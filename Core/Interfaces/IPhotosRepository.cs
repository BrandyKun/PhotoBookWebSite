using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IPhotosRepository
    {
        Task<Photo> GetPhotoByIdAsync(int id);
        Task<IEnumerable<Photo>> GetPhotosAsync();
        Task<bool> SaveAll();
        Task<bool> AddPhotoTags(Photo photoTocreate, IEnumerable<Tag> tag);
    }
}