using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public class Photo : BaseEntity 
    {
        public string ProductName { get; set; }
        public string Url { get; set; }
        public DateTime DataCreated { get; set; }
        public string Description { get; set; }
        public string PublicId { get; set; }
        public decimal Price { get; set; }
        public IEnumerable<PhotoTag>  Tags {get; set;}
        public IEnumerable<PhotoCollection> Collections { get; set; }
        public Photo()
        {
            DataCreated = DateTime.UtcNow;
        }
    }
}