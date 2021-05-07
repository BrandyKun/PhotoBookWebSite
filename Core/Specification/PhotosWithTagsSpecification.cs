using Core.Entities;

namespace Core.Specification
{
    public class PhotosWithTagsSpecification : BaseSpecification<Photo>
    {
        public PhotosWithTagsSpecification(PhotoSpecParams photoSpecParams)
            : base(
                // x =>
                // (string.IsNullOrEmpty(photoSpecParams.Search)|| x.Tag.Name.ToLower().Contains(photoSpecParams.Search)) &&
                // (!photoSpecParams.TagId.HasValue|| x.TagId == photoSpecParams.TagId)
            ) 
        {
            AddInclude(x => x.Tags);
            // AddIncludeThen(x=> x.);
            AddOrdebyDescending(x => x.Id);
            // ApplyPaging(photoSpecParams.PageSize * (photoSpecParams.PageIndex - 1), photoSpecParams.PageSize);


            if (!string.IsNullOrEmpty(photoSpecParams.Sort))
            {
                switch (photoSpecParams.Sort)
                {
                    case "dateDesc":
                        AddOrdebyDescending(p=>p.DataCreated);
                        break;
                    default:
                        AddOrdebyDescending(p=>p.Id);
                        break;
                        
                }
            }
        }

        public PhotosWithTagsSpecification(int id): base(x => x.Id == id)
        {
            // AddInclude(x => x.Tag);
        }
    }
}