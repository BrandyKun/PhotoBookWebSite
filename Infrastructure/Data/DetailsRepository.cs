using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class DetailsRepository : IDetailsRepository
    {
        private readonly DataContext _context;

        public DetailsRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<AppDetails> GetDetailsById(int id)
        {
            return await _context.AppDets.FirstOrDefaultAsync();
        }

        public Task<bool> UpdatedDetails(AppDetails dets)
        {
            throw new System.NotImplementedException();
        }

        // public async Task<bool> UpdatedDetails(AppDetails dets)
        // {
        //     var details = await _context.AppDets.FirstOrDefaultAsync();


        //     return ;

        // }
        //     public void Update(T entity)
        // {
        //     DbSet.Attach(entity);
        //     ApplicationContext.Entry(entity).State = EntityState.Modified;
        // }
    }
}