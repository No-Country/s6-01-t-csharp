using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using s6_01.Entities;

namespace s6_01.DataAccess.Seeds
{
    public static class PaseosSeed
    {

        public static void Seed(ModelBuilder modelBuilder)
        {
            var roles = new[]
            {
              new Paseo() {
                  IdPaseo =  1,
                 // IdClienteGUID = "d30a6fc5-19eb-4403-931c-527dd84febf6",
                  IdCliente = 1,
                  //cli = 1,
                  MascotaId = 1,
                  PaseadorId = 1,
                  FechaIn = DateTime.Now,
                  FechaEnd = DateTime.Now.AddHours(2),
                  Tarifa = 3,
                  EstadoTask = "con review",
                  ZonaPso = "Centro"
              },
              new Paseo() {
                  IdPaseo =  2,
                 // IdCliente = "d30a6fc5-19eb-4403-931c-527dd84febf6",
                  IdCliente = 1,
                  //cli = 1,
                  MascotaId = 1,
                  PaseadorId = 1,
                  FechaIn = DateTime.Now.AddDays(-5),
                  FechaEnd = DateTime.Now.AddDays(-5).AddHours(2),
                  Tarifa = 3,
                  EstadoTask = "sin review",
                  ZonaPso = "Sur"
              },

            };

            modelBuilder.Entity<Paseo>().HasData(roles);
        }
    }
}
