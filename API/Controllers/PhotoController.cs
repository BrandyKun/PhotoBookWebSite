using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Core.Entities;
using Core.Specification;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace API.Controllers
{
    public class PhotoController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        private readonly IUnitOfWork _unitOfWork;

        public PhotoController(IOptions<CloudinarySettings> cloudinaryConfig,
                                IUnitOfWork unitOfWork,
                                IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _cloudinaryConfig = cloudinaryConfig;
            _mapper = mapper;


            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);


        }

        [HttpGet]
        public async Task<ActionResult<Pagination<PhotoForReturnDto>>> GetPhotos([FromQuery] PhotoSpecParams photoSpecParams)
        {
            var spec = new PhotosWithTagsSpecification(photoSpecParams);

            var countSpec = new PhotoWithFiltersForCountSpecification(photoSpecParams);

            var totalItems = await _unitOfWork.Repository<Photo>().CountAsync(spec);

            var photos = await _unitOfWork.Repository<Photo>().ListAsync(spec);

            var data = _mapper.Map<IEnumerable<Photo>, IEnumerable<PhotoForReturnDto>>(photos);

            return Ok(new Pagination<PhotoForReturnDto>(photoSpecParams.PageIndex, photoSpecParams.PageSize, totalItems, data));
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<ActionResult<PhotoForReturnDto>> GetPhoto(int id)
        {
            var spec = new PhotosWithTagsSpecification(id);

            var photoFromRepo = await _unitOfWork.Repository<Photo>().GetEntityWithSpec(spec);

            var photo = _mapper.Map<Photo, PhotoForReturnDto>(photoFromRepo);

            return Ok(photo);
        }

        

        [HttpPost("addPhoto")]
        public async Task<IActionResult> AddPhoto([FromForm] PhotoForCreationDto photoForCreationDto)
        {
            // IEnumerable<Photo> photosfromRepo = await _unitOfWork.Repository<Photo>().ListAllAsync();

            var file = photoForCreationDto.File;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(415.15).Height(500).Crop("fill").Gravity("center")
                    };

                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            photoForCreationDto.Url = uploadResult.Uri.ToString();
            photoForCreationDto.PublicId = uploadResult.PublicId;

            var photo = _mapper.Map<Photo>(photoForCreationDto);


            _unitOfWork.Repository<Photo>().Add(photo);

            if (await _unitOfWork.Complete() >= 0)
            {
                var photoToReturn = _mapper.Map<PhotoForReturnDto>(photo);
                return CreatedAtRoute("GetPhoto", new { id = photo.Id, tagId = photo.TagId }, photoToReturn);
            }
            return BadRequest("could not return photo");

        }

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