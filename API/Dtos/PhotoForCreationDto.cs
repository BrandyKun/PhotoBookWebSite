using System;
using System.Collections.Generic;
using Core.Entities;
using Microsoft.AspNetCore.Http;

namespace API.Dtos
{
    public class PhotoForCreationDto
    {
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }
        public IEnumerable<Tag> TagId { get; set; }
        public PhotoForCreationDto()
        {
            DateAdded  = DateTime.UtcNow;
        }
    }
}