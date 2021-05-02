using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class PhotoRepository : IPhotosRepository
    {
        private readonly DataContext _context;
        public PhotoRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Photo> GetPhotoByIdAsync(int id)
        {
            return await _context.Photos.FindAsync(id);
        }

        public async Task<IReadOnlyList<Photo>> GetPhotosAsync()
        {
            var photos = await _context.Photos.ToListAsync();

            // foreach (var photo in photos)
            // {
            //     if (photo.PhotoTags ==null || photo.PhotoTags == 0)
            //         photo.PhotoTags = 1;
            // }

            return photos;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}