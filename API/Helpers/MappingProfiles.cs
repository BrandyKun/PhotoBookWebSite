using System.Linq;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Photo, PhotoForReturnDto>()
                .ForMember(t => t.Tags, o => o.MapFrom(o => o.Tags.Select(cs => cs.Tag)));
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<Photo, PhotoForCreationDto>();
            CreateMap<Address, AddressDto>();
            CreateMap<AddressDto, Address>();
            CreateMap<AppDetailsDto, AppDetails>();

        }

    }
}