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

        public async Task<bool> AddPhotoTags(Photo photo, IEnumerable<Tag> tags)
        {
            var photoFromRepo = await _context.Photos
                .Include(t => t.Tags).ThenInclude(t => t.Tag)
                .FirstOrDefaultAsync(p => p.Id == photo.Id);

            foreach (var tag in tags)
            {
                var newPhotoTag =  new PhotoTag {
                    Photo = photo,
                    Tag = tag
                };

               await _context.photoTags.AddAsync(newPhotoTag);
            }

            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Photo> GetPhotoByIdAsync(int id)
        {
            return await _context.Photos
                .Include(t => t.Tags).ThenInclude(t => t.Tag)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Photo>> GetPhotosAsync()
        {
            var photos = await _context.Photos
                .Include(t => t.Tags).ThenInclude(t => t.Tag)
                .ToListAsync();

            return photos;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}