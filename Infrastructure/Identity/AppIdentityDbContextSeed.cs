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
                    DisplayName = "Petar",
                    Email = "p.shatanovski@gmail.com",
                    UserName = "p.shatanovski@gmail.com",
                    Address = new Address
                    {
                        FirstName = "Petar",
                        LastName = "Shatanovski",
                        Street = "Metodija shatorov sharlo 17",
                        City = "Skopje",
                        State = "Macedonia",
                        ZipCode = "1000"
                    }
                };

                await userManager.CreateAsync(user, "Petar1982@");
            }
        }
    }
}