using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using s6_01.DataAccess.Seeds.Auth;
using s6_01.Entities.Auth;
using System.Reflection.Emit;

namespace s6_01.DataAccess
{
    public class TWDContext : IdentityDbContext<ApplicationUser>
    {
        public TWDContext()
        {

        }
        public TWDContext(DbContextOptions options)
        : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            RolesSeed.Seed(modelBuilder);
        }
    }
}
