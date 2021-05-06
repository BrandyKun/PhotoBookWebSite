using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class AppDetailsDto
    {
         public string CompanyName { get; set; }
        public string MainLogoImage { get; set; }
        public string AboutDescription { get; set; }
        public string AboutPicture { get; set; }
        public string FacebookLink { get; set; }
        public string Instagram { get; set; }
        public string Pinterest { get; set; }
        public string LinkedIn { get; set; }
        public string Twitter { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}