using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Bob",
                    Email = "bobby@test.com",
                    UserName = "bobby@test.com",
                    Address = new Address {
                        FirstName = "Bob",
                        LastName = "Bobwart",
                        Street = "10 The Street",
                        City = "Leeds",
                        PostCode = "LS115HZ"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}