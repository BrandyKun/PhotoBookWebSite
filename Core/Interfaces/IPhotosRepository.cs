using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IPhotosRepository
    {
        Task<Photo> GetPhotoByIdAsync(int id);
        Task<IReadOnlyList<Photo>> GetPhotosAsync();
        Task<bool> SaveAll();

        
    }
}