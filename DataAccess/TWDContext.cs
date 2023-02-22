using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using s6_01.DataAccess.Seeds.Auth;
using s6_01.DataAccess.Seeds;
using s6_01.Entities;
using s6_01.Entities.Auth;
using System.Diagnostics;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore.Metadata;

namespace s6_01.DataAccess
{
    public class TWDContext : IdentityDbContext<ApplicationUser>
    {
        public TWDContext()
        {

        }

        public virtual DbSet<ReviewPaseo> Reviews { get; set; }
        public virtual DbSet<Pago> Pagos { get; set; }
        public virtual DbSet<Paseador> Paseadores { get; set; }
        public virtual DbSet<Mascota> Mascotas { get; set; }
        public virtual DbSet<Paseo> Paseos { get; set; }


        public TWDContext(DbContextOptions options)
        : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>().Property(p => p.IdCliente).UseIdentityColumn();

            //modelBuilder.Entity<ApplicationUser>().Property(p => p.IdCliente)
            //    .Metadata.SetAfterSaveBehavior(PropertySaveBehavior.Ignore);
            //modelBuilder.Entity<ApplicationUser>()
            //    .Property(t => t.IdCliente)
            //     .ValueGeneratedOnAdd();

            RolesSeed.Seed(modelBuilder);
            ClientesSeed.Seed(modelBuilder);
            PaseadorSeed.Seed(modelBuilder);
            MascotasSeed.Seed(modelBuilder);
            PaseosSeed.Seed(modelBuilder);
            ReviewsSeed.Seed(modelBuilder);

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();
        }
    }
}
