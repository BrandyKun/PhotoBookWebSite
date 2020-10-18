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
                .ForMember(d => d.Tag, o => o.MapFrom(s => s.Tag.Name));
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<Photo, PhotoForCreationDto>();
            CreateMap<Address, AddressDto>();
            CreateMap<AddressDto, Address>();

        }

    }
}