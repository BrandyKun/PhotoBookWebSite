using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
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

                //creating Default Roles
                var roles = new List<Role>
                {
                    new Role{Name = "Member"},
                    new Role{Name = "Admin"},
                    new Role{Name = "Moderator"},
                    new Role{Name = "VIP"}
                };

                
                foreach (var role in roles)
                {
                    roleManager.CreateAsync(role).Wait();
                }

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                //creatre admin
                var adminUser = new User
                {
                    DisplayName = "Admin",
                    Email = "TechAdmin@Test.com",
                    UserName = "TechAdmin"
                };

                var result = userManager.CreateAsync(adminUser, "Pa$$w0rd").Result;

                if (result.Succeeded)
                {
                    var admin = userManager.FindByEmailAsync("TechAdmin@Test.com").Result;
                    userManager.AddToRolesAsync(admin, new[] {"Admin","Moderator"}).Wait();
                }
            }
        }
    }
}