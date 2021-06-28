using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using API.Dtos;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Microsoft.Extensions.Options;
using API.Helpers;
using API.Services;
using Microsoft.AspNetCore.Http;

namespace API.Controllers
{

    public class PageSettingsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IBrandingService _brandService;
        public PageSettingsController(IUnitOfWork unitOfWork, IBrandingService brandService)
        {
            _brandService = brandService;
            _unitOfWork = unitOfWork;

        }

        [Cached(600)]
        [HttpGet]
        public async Task<IActionResult> GetDetails()
        {
            var details = await _unitOfWork.Repository<AppDetails>().GetById(3);

            return Ok(details);
        }

        // [Authorize(Policy = "RequireAdminRole")]
        [HttpPut]
        public async Task<ActionResult> UpdatAppDetails(AppDetailsReturnDto detailsDto)
        {
            var details = await _unitOfWork.Repository<AppDetails>().GetById(1);

            var settings = await _brandService.UpdateApplicationSettings(detailsDto);

            await _unitOfWork.Complete();

            return StatusCode(201);
        }
        [HttpPost]
        [Route("mainLogo")]
        public async Task<IActionResult> mainLogoUpload([FromForm(Name = "file")]IFormFile logo)
        {
            var url = await _brandService.mainLogoUpload(logo);
            await _unitOfWork.Complete();

            return Ok(url);
        }
        [HttpPost]
        [Route("aboutimg")]
        public async Task<IActionResult> aboutImageUpload([FromForm(Name = "file")]IFormFile picture)
        {
            var url = await _brandService.aboutImageUpload(picture);

            await _unitOfWork.Complete();

            return Ok(url);
        }
        [HttpPost]
        [Route("contactimg")]
        public async Task<IActionResult> contactImageUpload([FromForm(Name = "file")]IFormFile image)
        {
            var url = await _brandService.contactImageUpload(image);

            await _unitOfWork.Complete();

            return Ok(url);
        }
    }
}