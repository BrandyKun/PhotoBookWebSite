using System.Linq;
using Core.Entities;

namespace Core.Specification
{
    public class PhotosWithTagsAndCollectionSpecification : BaseSpecification<Photo>
    {
        public PhotosWithTagsAndCollectionSpecification(PhotoSpecParams photoSpecParams)
            : base(x => 
            (string.IsNullOrEmpty(photoSpecParams.Search) || x.Tags.Any(x => x.Tag.Name.ToLower().Contains(photoSpecParams.Search))) &&
            (!photoSpecParams.TagId.HasValue || x.Tags.Any(x => x.TagId == photoSpecParams.TagId)) &&
            (!photoSpecParams.CollectionId.HasValue || x.Collections.Any(x => x.CollectionId == photoSpecParams.CollectionId))
            )
           
        {
            AddInclude(x => x.Tags);
            AddInclude(x => x.Collections);
            AddOrdebyDescending(x => x.Id);
            ApplyPaging(photoSpecParams.PageSize * (photoSpecParams.PageIndex - 1), photoSpecParams.PageSize);


            if (!string.IsNullOrEmpty(photoSpecParams.Sort))
            {
                switch (photoSpecParams.Sort)
                {
                    case "dateDesc":
                        AddOrdebyDescending(p=>p.DataCreated);
                        break;
                    case "priceAsc": 
                        AddOrdeby(p=>p.Price);
                        break;
                    case "priceDesc": 
                        AddOrdebyDescending(p=>p.Price);
                        break;
                    case "name": 
                        AddOrdebyDescending(p=>p.ProductName);
                        break;
                    default:
                        AddOrdebyDescending(p=>p.Id);
                        break;
                        
                }
            }
        }

        public PhotosWithTagsAndCollectionSpecification(int id): base(x => x.Id == id)
        {
            AddInclude(x => x.Tags);
            AddInclude(x => x.Collections);
        }
    }
}