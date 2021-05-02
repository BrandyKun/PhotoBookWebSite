using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace API.Controllers
{
    
    public class PageSettingsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public PageSettingsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }


        [HttpGet]
        public async Task<IActionResult> GetDetails()
        {
            var details = await _unitOfWork.Repository<AppDetails>().GetById(1);

            return Ok(details);
        }

        [Authorize]
        [HttpPut("changesettings/{1}")]
        public async Task<ActionResult<AppDetails>> UpdatAppDetails(int id,[FromQuery]AppDetailsDto detailsDto)
        {
            var details = await _unitOfWork.Repository<AppDetails>().GetById(id);

            details.AboutDescription = detailsDto.AboutDescription;
            details.AboutPictureUrl = detailsDto.AboutPicture;
            details.CompanyName = detailsDto.CompanyName;
            details.FacebookLink = detailsDto.FacebookLink;
           
           await _unitOfWork.Complete();

             return details;
        }
    }
}