using Microsoft.EntityFrameworkCore;
using s6_01.Entities;

namespace s6_01.DataAccess.Seeds
{
    public static class PaseadorSeed
    {

        public static void Seed(ModelBuilder modelBuilder)
        {
            var data = new[]
            {
              new Paseador() {
                  Id =1,
                  Nombres = "Paseador1",
                  Apellidos = "Apellido1",
                  CobroPorHora = 3,
                  Descripcion = "soy un paseador de prueba",
                  CorreoElectronico = "paseador1@mailinator.com",
                //  Disponibilidad = new List<Disponibilidad>();
                   Direccion = "cerca al centro",
                   Telefono = 123,
              },
            };

            modelBuilder.Entity<Paseador>().HasData(data);
        }
    }
}
