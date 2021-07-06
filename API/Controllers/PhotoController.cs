using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Core.Entities;
using Core.Specification;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;
using Infrastructure.Data;

namespace API.Controllers
{
    [AllowAnonymous]
    public class PhotoController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private readonly IPhotosRepository _photoRepository;
        private readonly IGenericRepository<Photo> _photoRepo;
        private Cloudinary _cloudinary;
        private readonly IUnitOfWork _unitOfWork;

        public PhotoController(IOptions<CloudinarySettings> cloudinaryConfig,
                                IPhotosRepository photoRepository,
                                IGenericRepository<Photo> photoRepo,
                                IUnitOfWork unitOfWork,
                                IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _cloudinaryConfig = cloudinaryConfig;
            _photoRepository = photoRepository;
            _photoRepo = photoRepo;
            _mapper = mapper;
            


            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);


        }

        [Cached(600)]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhotoForReturnDto>>> GetPhotos([FromQuery] PhotoSpecParams photoSpecParams)
        {
            var spec = new PhotosWithTagsAndCollectionSpecification(photoSpecParams);

            var countSpec = new PhotoWithFiltersForCountSpecification(photoSpecParams);

            var totalItems = await _photoRepo.CountAsync(countSpec);

            var photos = await _photoRepo.ListAsync(spec);

            var data = _mapper.Map<IEnumerable<Photo>, IEnumerable<PhotoForReturnDto>>(photos);

            // var photos = await _photoRepository.GetPhotosAsync();

            return Ok( new Pagination<PhotoForReturnDto>(photoSpecParams.PageIndex, photoSpecParams.PageSize, totalItems, data));

            // return Ok(data);

        }
        
        [Cached(600)]
        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<ActionResult<PhotoForReturnDto>> GetPhoto(int id)
        {
            var spec = new PhotosWithTagsAndCollectionSpecification(id);

            var photoFromRepo = await _unitOfWork.Repository<Photo>().GetEntityWithSpec(spec);
            
            var photo = _mapper.Map<Photo, PhotoForReturnDto>(photoFromRepo);

            return Ok(photo);
        }

        
        [Authorize(Policy = "RequireAdminRole")]
        [HttpPost("addPhoto")]
        public async Task<IActionResult> AddPhoto([FromForm]PhotoForCreationDto photoForCreationDto)
        {

            var file = photoForCreationDto.File;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(550).Crop("fill").Gravity("center")
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            photoForCreationDto.Url = uploadResult.SecureUri.ToString();
            photoForCreationDto.PublicId = uploadResult.PublicId;
            photoForCreationDto.ProductName = uploadResult.OriginalFilename;

            var photo = _mapper.Map<Photo>(photoForCreationDto);

            _unitOfWork.Repository<Photo>().Add(photo);

            if (await _unitOfWork.Complete() >= 0)
            {
                var photoToReturn = _mapper.Map<PhotoForReturnDto>(photo);
                return CreatedAtRoute("GetPhoto", new { id = photo.Id }, photoToReturn);
            }
            return BadRequest("could not return photo");
        }
        
        [Authorize(Policy = "RequireAdminRole")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePhoto(int id)
        {
            var spec = new PhotosWithTagsAndCollectionSpecification(id);

            var photoFromRepo = await _unitOfWork.Repository<Photo>().GetEntityWithSpec(spec);

            var deleteParams = new DeletionParams(photoFromRepo.PublicId);
            var results = _cloudinary.Destroy(deleteParams);

            if (results.Result == "ok")
            {
                _unitOfWork.Repository<Photo>().Delete(photoFromRepo);
            }

            if (await _unitOfWork.Complete() >= 0)
            {
                return Ok();
            }

            return BadRequest("Failed to deelte image");
        }
        [Cached(600)]
        [HttpGet("tags")]
        public async Task<ActionResult<IReadOnlyList<Tag>>> GetPhotoTags(int Id)
        {
            var tags = await _unitOfWork.Repository<Tag>().ListAllAsync();

            return Ok(tags);
        }

        [HttpPost("AddTag")]
        public async Task<ActionResult> AddTag( [FromBody] string name)
        {
            if (!string.IsNullOrEmpty(name))
            {
                var newTag = new Tag {
                    Name = name
                };

                _unitOfWork.Repository<Tag>().Add(newTag);

                await _unitOfWork.Complete();

                return StatusCode(201);
            }

            return BadRequest("Could not create new tag");
        }


    }
}