using System.Collections.Generic;

namespace Core.Entities
{
    public class Collection : BaseEntity
    {
        public string Name { get; set; }
        public IEnumerable<PhotoCollection> Photos { get; set; }
    }
}