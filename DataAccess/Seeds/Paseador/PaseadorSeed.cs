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
                new Paseador
                {
                    Id = 1,
                    Nombres = "Juan",
                    Apellidos = "Pérez",
                    CorreoElectronico = "juan.perez@example.com",
                    Direccion = "Calle 123",
                    Telefono = 1234567890,
                    CobroPorHora = 50.0m,
                    Descripcion = "Soy un paseador de perros con más de 5 años de experiencia.",
                    Disponibilidad = new List<Disponibilidad>
                    {
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Monday, HoraInicio = 8, HoraFinal = 10 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Wednesday, HoraInicio = 14, HoraFinal = 16 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Friday, HoraInicio = 10, HoraFinal = 12 }
                    },
                    Preferencias = new List<string>
                    {
                        "Golden Retriever",
                        "Labrador Retriever",
                        "Pastor Alemán"
                    }
                },
                new Paseador
                {
                    Id = 2,
                    Nombres = "María",
                    Apellidos = "González",
                    CorreoElectronico = "maria.gonzalez@example.com",
                    Direccion = "Avenida 456",
                    Telefono = 234578901,
                    CobroPorHora = 60.0m,
                    Descripcion = "Soy una paseadora de perros con más de 10 años de experiencia.",
                    Disponibilidad = new List<Disponibilidad>
                    {
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Tuesday, HoraInicio = 12, HoraFinal = 14 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Thursday, HoraInicio = 16, HoraFinal = 18 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Saturday, HoraInicio = 8, HoraFinal = 10 }
                    },
                    Preferencias = new List<string>
                    {
                        "Caniche",
                        "Bichón Frisé",
                        "Shih Tzu"
                    }
                },
                new Paseador
                {
                    Id = 3,
                    Nombres = "Carlos",
                    Apellidos = "García",
                    CorreoElectronico = "carlos.garcia@example.com",
                    Direccion = "Calle 45 #23-56",
                    Telefono = 311234567,
                    CobroPorHora = 25000.00m,
                    Disponibilidad = new List<Disponibilidad>
                    {
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Monday, HoraInicio = 9, HoraFinal = 12 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Tuesday, HoraInicio = 10, HoraFinal = 14 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Wednesday, HoraInicio = 8, HoraFinal = 10 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Thursday, HoraInicio = 11, HoraFinal = 13 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Friday, HoraInicio = 12, HoraFinal = 15 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Saturday, HoraInicio = 15, HoraFinal = 18 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Sunday, HoraInicio = 14, HoraFinal = 17 }
                    },
                    Preferencias = new List<string> { "Perros grandes", "Caminatas largas", "Juegos de pelota" },
                    Descripcion = "Soy un amante de los perros y me encanta pasearlos por el parque. Me gusta jugar con ellos y asegurarme de que estén bien hidratados durante la caminata."
                },
                new Paseador
                {
                    Id = 4,
                    Nombres = "Luis",
                    Apellidos = "Hernández",
                    CorreoElectronico = "luis.hernandez@example.com",
                    Direccion = "Calle 123, Colonia Centro",
                    Telefono = 555134567,
                    CobroPorHora = 150.0M,
                    Disponibilidad = new List<Disponibilidad>
                    {
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Monday, HoraInicio = 8, HoraFinal = 12 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Tuesday, HoraInicio = 13, HoraFinal = 18 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Wednesday, HoraInicio = 8, HoraFinal = 12 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Friday, HoraInicio = 14, HoraFinal = 20 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Saturday, HoraInicio = 10, HoraFinal = 16 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Sunday, HoraInicio = 10, HoraFinal = 16 }
                    },
                    Preferencias = new List<string>
                    {
                        "Caminar por el parque",
                        "Jugar con pelotas",
                        "Hacer ejercicio"
                    },
                    Descripcion = "Soy un paseador de perros con experiencia de 5 años, amo a los perros y me encanta caminar con ellos."
                },
                new Paseador
                {
                    Id = 5,
                    Nombres = "Isabella",
                    Apellidos = "Martínez",
                    CorreoElectronico = "isabella.martinez@example.com",
                    Direccion = "Calle 30 #14-32",
                    Telefono = 316876543,
                    CobroPorHora = 20000.00m,
                    Disponibilidad = new List<Disponibilidad>
                    {
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Monday, HoraInicio = 10, HoraFinal = 13 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Tuesday, HoraInicio = 9, HoraFinal = 12 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Wednesday, HoraInicio = 11, HoraFinal = 14 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Thursday, HoraInicio = 12, HoraFinal = 15 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Friday, HoraInicio = 13, HoraFinal = 16 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Saturday, HoraInicio = 9, HoraFinal = 11 },
                        new Disponibilidad { DiaDeLaSemana = DayOfWeek.Sunday, HoraInicio = 11, HoraFinal = 13 }
                    },
                    Preferencias = new List<string> { "Perros pequeños", "Caminatas cortas", "Juegos de búsqueda" },
                    Descripcion = "Soy una paseadora de perros con experiencia de 2 años, amo a los perros y me encanta caminar con ellos."
                }
            };

            modelBuilder.Entity<Paseador>().HasData(data);
        }
    }
}
