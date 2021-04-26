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

        public async Task<AppDetails> GetDetails()
        {
            return await  _context.AppDets.FirstOrDefaultAsync();
        }
    }
}