using System.Threading.Tasks;
using API.Dtos;
using Core.Entities;
using Microsoft.AspNetCore.Http;

namespace API.Services
{
    public interface IBrandingService
    {
         Task<AppDetails> UpdateApplicationSettings(AppDetailsReturnDto appDets);
         Task<string> mainLogoUpload(IFormFile mainLogo );
         Task<string> aboutImageUpload(IFormFile aboutImg );
         Task<string> contactImageUpload(IFormFile contactImg );
    }
}