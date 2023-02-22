using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using s6_01.Entities;
using s6_01.Entities.Auth;

namespace s6_01.DataAccess.Seeds.Auth
{
    public static class ClientesSeed
    {

        public static void Seed(ModelBuilder modelBuilder)
        {
            var roles = new[]
            {
              new ApplicationUser() {
                  Id =  "d30a6fc5-19eb-4403-931c-527dd84febf6",
                 // IdCliente = 0,
                  Nombres = "Cliente de prueba",
                  Apellidos = "Apellidos",
                  UserName = "cliente1",
                  Telefono = "123",
                  Email = "cliente1@mailinator.com"
              }
            };

            modelBuilder.Entity<ApplicationUser>().HasData(roles);
        }
    }
}
