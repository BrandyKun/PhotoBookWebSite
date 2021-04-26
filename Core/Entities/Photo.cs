using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public class Photo : BaseEntity 
    {
        public string Url { get; set; }
        public DateTime DataCreated { get; set; }
        public string Description { get; set; }
        public string PublicId { get; set; }
        public Tag Tag { get; set; }
        public int? TagId { get; set; }

        public Photo()
        {
            DataCreated = DateTime.UtcNow;
        }
    }
}