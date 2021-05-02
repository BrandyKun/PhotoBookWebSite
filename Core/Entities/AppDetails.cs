namespace Core.Entities
{
    public class AppDetails : BaseEntity
    {
        public string CompanyName { get; set; }
        public string MainLogoImageUrl { get; set; }
        public string AboutDescription { get; set; }
        public string AboutPictureUrl { get; set; }
        public string favIconUrl { get; set; }
        public string FacebookLink { get; set; }
        public string Instagram { get; set; }
        public string Pinterest { get; set; }
        public string LinkedIn { get; set; }
        public string Twitter { get; set; }
        public string ContactEmail { get; set; }
        public string ContactNumber { get; set; }
    }
}