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
              new IdentityRole() { Id =  "7b3e5dc9-4be9-484a-96b6-7f08b5ee3aaa", Name = "Admin", ConcurrencyStamp = "1", NormalizedName = "ADMIN" },
              new IdentityRole() { Id =  "4ad18d24-1b9e-43fa-881a-da0a82331a36", Name = "User", ConcurrencyStamp = "2", NormalizedName = "USER" },
              new IdentityRole() { Id =  "7b3e5dc9-4be9-484a-96b6-7f08b5ee3aab", Name = "DogSitter", ConcurrencyStamp = "3", NormalizedName = "DOGSITTER" }
            };

            modelBuilder.Entity<IdentityRole>().HasData(roles);
        }
    }
}
