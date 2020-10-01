using Core.Entities;

namespace Core.Specification
{
    public class PhotoWithFiltersForCountSpecification : BaseSpecification<Photo>
    {
        public PhotoWithFiltersForCountSpecification(PhotoSpecParams photoSpecParams)
            : base(x =>
                (string.IsNullOrEmpty(photoSpecParams.Search) || x.Tag.Name.ToLower().Contains(photoSpecParams.Search)) &&
                (!photoSpecParams.TagId.HasValue || x.TagId == photoSpecParams.TagId)
            )
        {
        }
    }
}