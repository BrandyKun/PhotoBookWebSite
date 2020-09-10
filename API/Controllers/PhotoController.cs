using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Core.Entities;
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
                                
        private readonly IPhotosRepository _photoRepo;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        private readonly IGenericRepository<Photo> _genRepo;
        private readonly IGenericRepository<Tag> _tagRepo;

        public PhotoController(IOptions<CloudinarySettings> cloudinaryConfig,
                                IGenericRepository<Photo> genRepo,
                                IGenericRepository<Tag> tagRepo,
                                IPhotosRepository photoRepo,
                                IMapper mapper)
        {
            _tagRepo = tagRepo;
            _genRepo = genRepo;
            _cloudinaryConfig = cloudinaryConfig;
            _mapper = mapper;
            _photoRepo = photoRepo;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);


        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Photo>>> GetPhotos()
        {
            var photos = await _genRepo.ListAllAsync();

            return Ok(photos);
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<ActionResult<Photo>> GetPhoto(int id)
        {
            var photoFromRepo = await _genRepo.GetById(id);

            var photo = _mapper.Map<PhotoForReturnDto>(photoFromRepo);

            return Ok(photo);
        }

        [HttpGet("tags")]
        public async Task<ActionResult<IReadOnlyList<Tag>>> GetPhotoTag(int Id)
        {
            var tags = await _tagRepo.ListAllAsync();

            return Ok(tags);
        }

        [HttpPost]
        public async Task<IActionResult> AddPhoto([FromForm] PhotoForCreationDto photoForCreationDto)
        {
            var photosFromRepo = await _photoRepo.GetPhotosAsync();

            var file = photoForCreationDto.File;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };

                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            photoForCreationDto.Url = uploadResult.Uri.ToString();
            photoForCreationDto.PublicId = uploadResult.PublicId;

            var photo = _mapper.Map<Photo>(photoForCreationDto);

            photosFromRepo.Append(photo);

            
                var photoToReturn = _mapper.Map<PhotoForReturnDto>(photo);
                return CreatedAtRoute("GetPhoto", new { id = photo.Id }, photoToReturn);
            

           //Sreturn BadRequest("could not return photo");

        }

    }
}