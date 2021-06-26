using System.Linq;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;
using Core.Entities.OrderAggregate;

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
            CreateMap<Core.Entities.Identity.Address, AddressDto>().ReverseMap();
            CreateMap<AppDetailsDto, AppDetails>();
            CreateMap<AppDetailsReturnDto, AppDetails>();
            CreateMap<AddressDto, Core.Entities.OrderAggregate.Address>();
            CreateMap<Order, OrderToReturnDto>()
                .ForMember(d => d.DeliveryMethod, o => o.MapFrom(s => s.DeliveryMethod.ShortName))
                .ForMember(d => d.ShippingPrice, o => o.MapFrom(s => s.DeliveryMethod.Price));
            CreateMap<OrderItem, OrderItemDto>()
                .ForMember(d => d.PhotoId, o => o.MapFrom(s => s.ItemOrdered.ProductItemId))
                .ForMember(d => d.ProductName, o => o.MapFrom(s => s.ItemOrdered.ProductName))
                .ForMember(d => d.Url, o => o.MapFrom(s => s.ItemOrdered.PictureUrl));
        }
    }
}