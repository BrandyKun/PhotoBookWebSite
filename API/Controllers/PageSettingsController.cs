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

        // [Authorize(Policy = "RequireAdminRole")]
        [HttpPost("changesettings/{id}")]
        public async Task<ActionResult<AppDetails>> UpdatAppDetails(int id, [FromForm]AppDetailsDto detailsDto)
        {
            var details = await _unitOfWork.Repository<AppDetails>().GetById(id);

            _mapper.Map<AppDetailsDto, AppDetails>(detailsDto);

            _unitOfWork.Repository<AppDetails>().Update(details);

            await _unitOfWork.Complete();

            return StatusCode(201);
        }
    }
}