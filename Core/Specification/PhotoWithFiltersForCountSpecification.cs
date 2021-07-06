using System.Linq;
using Core.Entities;

namespace Core.Specification
{
    public class PhotoWithFiltersForCountSpecification : BaseSpecification<Photo>
    {
        public PhotoWithFiltersForCountSpecification(PhotoSpecParams photoSpecParams)
            : base(x =>
                (string.IsNullOrEmpty(photoSpecParams.Search) || x.Tags.Any(x => x.Tag.Name.ToLower().Contains(photoSpecParams.Search))) &&
                (!photoSpecParams.TagId.HasValue || x.Tags.Any(x => x.TagId == photoSpecParams.TagId)) && 
                (!photoSpecParams.CollectionId.HasValue || x.Collections.Any(x => x.CollectionId == photoSpecParams.CollectionId))
            )
        {
        }
    }
}