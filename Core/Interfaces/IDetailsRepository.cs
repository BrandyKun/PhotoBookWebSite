using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IDetailsRepository
    {
        Task<AppDetails> GetDetails ();

        Task<bool> UpdatedDetails();
    }
}