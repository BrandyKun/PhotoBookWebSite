using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IDetailsRepository
    {
        Task<AppDetails> GetDetailsById(int id);

        Task<bool> UpdatedDetails(AppDetails dets);
    }
}