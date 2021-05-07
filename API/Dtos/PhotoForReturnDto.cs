using System;
using System.Collections.Generic;
using Core.Entities;

namespace API.Dtos
{
    public class PhotoForReturnDto
    {
        public int Id { get; set; }
        public string URL { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }
        public IEnumerable<PhotoTag> Tags { get; set; }

    }
}