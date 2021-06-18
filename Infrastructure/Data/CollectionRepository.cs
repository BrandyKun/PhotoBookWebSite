using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class CollectionRepository : ICollectionRepository
    {
        private readonly DataContext _context;
        public CollectionRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<bool> AddNewCollection(Collection collectionForCreation)
        {
            await _context.Collections.AddAsync(collectionForCreation);

            return await _context.SaveChangesAsync() > 0;
        }

        public Task<Collection> DeleteCollection(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Collection> EditCollection(Collection collection)
        {
            throw new System.NotImplementedException();
        }

        // public async Task<Collection> EditCollection()
        // {
        //     var collection = await _context.Collections.FirstOrDefaultAsync(x => x.Id == id);

        //     mappe
        // }

        public async Task<Collection> GetCollectionByIdAsync(int id)
        {
            return await _context.Collections.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<Collection>> GetCollectionsAsync()
        {
            var collections =  await _context.Collections
                .OrderBy(x => x.Name)
                .ToListAsync();

            return collections;
        }
    }
}