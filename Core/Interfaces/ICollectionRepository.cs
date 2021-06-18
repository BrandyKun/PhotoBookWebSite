using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface ICollectionRepository
    {
        Task<IEnumerable<Collection>> GetCollectionsAsync();
        Task<Collection> GetCollectionByIdAsync(int id);
        Task<Collection> DeleteCollection(int id);
        Task<Collection> EditCollection(Collection collection);
        Task<bool> AddNewCollection(Collection collectionForCreation);

    }
}