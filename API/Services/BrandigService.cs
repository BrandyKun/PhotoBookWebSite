using System.Threading.Tasks;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace API.Services
{
    public class BrandigService : IBrandingService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;


        public BrandigService(IUnitOfWork unitOfWork, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _cloudinaryConfig = cloudinaryConfig;
            _unitOfWork = unitOfWork;
            _mapper = mapper;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);

        }

        public async Task<string> aboutImageUpload(IFormFile aboutImg)
        {
            var settings = await _unitOfWork.Repository<AppDetails>().GetById(1);

            var file = aboutImg;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(550).Crop("fill").Gravity("center"),
                        Folder = "about"
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            settings.AboutPictureUrl = uploadResult.SecureUrl.ToString();

            await _unitOfWork.Complete();

            return uploadResult.SecureUri.ToString();
        }

        public async Task<string> contactImageUpload(IFormFile contactImg)
        {
            var settings = await _unitOfWork.Repository<AppDetails>().GetById(1);

            var file = contactImg;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(550).Crop("fill").Gravity("center"),
                        Folder = "contactUs"
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            settings.ContactPictureUrl = uploadResult.SecureUrl.ToString();

            await _unitOfWork.Complete();

            return uploadResult.SecureUri.ToString();
        }

        public async Task<string> mainLogoUpload(IFormFile mainLogo)
        {
            var settings = await _unitOfWork.Repository<AppDetails>().GetById(1);
            var file = mainLogo;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(550).Crop("fill").Gravity("center"),
                        Folder = "mainLogo"
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            settings.MainLogoImageUrl = uploadResult.SecureUrl.ToString();

            await _unitOfWork.Complete();

            return uploadResult.SecureUri.ToString();
        }

        public async Task<AppDetails> UpdateApplicationSettings(AppDetailsReturnDto appDetsDto)
        {
             var details = await _unitOfWork.Repository<AppDetails>().GetById(1);

            _mapper.Map(appDetsDto, details);

             return details;
        }
    }
}