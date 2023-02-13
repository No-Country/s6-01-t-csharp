using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace s6_01.DataAccess.Seeds.Auth
{
    public static class RolesSeed
    {

        public static void Seed(ModelBuilder modelBuilder)
        {
            var roles = new[]
            {
              new IdentityRole() { Id =  Guid.NewGuid().ToString(), Name = "Admin", ConcurrencyStamp = "1", NormalizedName = "ADMIN" },
              new IdentityRole() { Id =  Guid.NewGuid().ToString(), Name = "User", ConcurrencyStamp = "2", NormalizedName = "USER" },
              new IdentityRole() { Id =  Guid.NewGuid().ToString(), Name = "DogSitter", ConcurrencyStamp = "3", NormalizedName = "DOGSITTER" }
            };

            modelBuilder.Entity<IdentityRole>().HasData(roles);
        }
    }
}
