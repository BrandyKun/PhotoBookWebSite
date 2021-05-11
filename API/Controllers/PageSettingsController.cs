using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using API.Dtos;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Microsoft.Extensions.Options;
using API.Helpers;
using CloudinaryDotNet;
using API.Services;

namespace API.Controllers
{

    public class PageSettingsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        private readonly IBrandingService _brandService;
        public PageSettingsController(IUnitOfWork unitOfWork, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig, IBrandingService brandService)
        {
            _brandService = brandService;
            _mapper = mapper;
            _cloudinaryConfig = cloudinaryConfig;
            _unitOfWork = unitOfWork;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);

        }


        [HttpGet]
        public async Task<IActionResult> GetDetails()
        {
            var details = await _unitOfWork.Repository<AppDetails>().GetById(1);

            return Ok(details);
        }

        // [Authorize(Policy = "RequireAdminRole")]
        [HttpPut]
        public async Task<ActionResult> UpdatAppDetails(AppDetailsReturnDto detailsDto)
        {
            var details = await _unitOfWork.Repository<AppDetails>().GetById(1);

            var settings = await _brandService.UpdateApplicationSettings(detailsDto);

            _mapper.Map(detailsDto, details);

            // _unitOfWork.Repository<AppDetails>().Update(details);

            await _unitOfWork.Complete();

            return StatusCode(201);
        }
    }
}