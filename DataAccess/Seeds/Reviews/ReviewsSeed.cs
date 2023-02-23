using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using s6_01.Entities;

namespace s6_01.DataAccess.Seeds
{
    public static class ReviewsSeed
    {

        public static void Seed(ModelBuilder modelBuilder)
        {
            var entities = new[]
            {
              new ReviewPaseo() {
                  Id =1,
                  PaseoId =1,
                  Comentario ="Comentario de prueba para paseo de prueba 1",
                  Estrellas = 3,
                  Fecha = DateTime.Now,
                  IsVisible = true,
              },
            };

            modelBuilder.Entity<ReviewPaseo>().HasData(entities);
        }
    }
}
