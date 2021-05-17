using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace API.Dtos
{
    public class AppDetailsReturnDto
    {
        public string CompanyName { get; set; }
        public IFormFile MainLogoImage { get; set; }
        public string AboutDescription { get; set; }
        public IFormFile ContactPageImage { get; set; }
        public IFormFile  AboutPictur { get; set; }
        public string FacebookLink { get; set; }
        public string Instagram { get; set; }
        public string Pinterest { get; set; }
        public string LinkedIn { get; set; }
        public string Twitter { get; set; }
        
        [EmailAddress]
        public string ContactEmail { get; set; }
        public string ContactNumber { get; set; }
    }
}