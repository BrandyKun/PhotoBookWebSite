using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ProductResolver : IValueResolver<Photo, PhotoForReturnDto, string>
    {
        private readonly IConfiguration _config;
        public ProductResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Photo source, PhotoForReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.Url))
            {
                return _config["ApiUrl"] + source.Url;
            }

            return null;
        }
    }
}