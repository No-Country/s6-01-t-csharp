using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using s6_01.Entities;

namespace s6_01.DataAccess.Seeds
{
    public static class MascotasSeed
    {

        public static void Seed(ModelBuilder modelBuilder)
        {
            var roles = new[]
            {
              new Mascota() {
                  Id =1,
                  Edad = 5, 
                  Nombre = "FLOKY", 
                  Peso=2,Raza = "none",
                  Vacunas = true ,
                  Notas ="mascota de prueba",
                  PropietarioId = "d30a6fc5-19eb-4403-931c-527dd84febf6",
              },
              

            };

            modelBuilder.Entity<Mascota>().HasData(roles);
        }
    }
}
