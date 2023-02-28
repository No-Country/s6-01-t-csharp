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
                    CorreoElectronico = "juan.perez@mailinator.com",
                    Direccion = "Calle Buenos Aires 123, Barrio Norte, Ciudad Autónoma de Buenos Aires, C1006AAB",
                    Telefono = 1234567890,
                    CobroPorHora = 50.0m,
                    ZonaActiva ="Barrio Norte",
                    Descripcion = "Soy un paseador de perros con más de 5 años de experiencia.",                    
                    Preferencias = new List<string>
                    {
                        "Golden Retriever",
                        "Labrador Retriever",
                        "Pastor Alemán"
                    },
                    Avatar = $"https://i.pravatar.cc/150?img=68"
                },
                new Paseador
                {
                    Id = 2,
                    Nombres = "María",
                    Apellidos = "González",
                    CorreoElectronico = "maria.gonzalez@mailinator.com",
                    Direccion = "Avenida Corrientes 678, Centro, Ciudad Autónoma de Buenos Aires, C1043AAB",
                    Telefono = 234578901,
                    CobroPorHora = 60.0m,
                    ZonaActiva ="Centro",
                    Descripcion = "Soy una paseadora de perros con más de 10 años de experiencia.",
                    Preferencias = new List<string>
                    {
                        "Caniche",
                        "Bichón Frisé",
                        "Shih Tzu"
                    },
                    Avatar = $"https://i.pravatar.cc/150?img=49"
                },
                new Paseador
                {
                    Id = 3,
                    Nombres = "Carlos",
                    Apellidos = "García",
                    CorreoElectronico = "carlos.garcia@mailinator.com",
                    Direccion = "Calle Florida 999, Microcentro, Ciudad Autónoma de Buenos Aires, C1005AAC",
                    Telefono = 311234567,
                    CobroPorHora = 25000.00m,
                    ZonaActiva ="Microcentro",
                    Avatar = $"https://i.pravatar.cc/150?img=60",
                    Preferencias = new List<string> { "Perros grandes", "Caminatas largas", "Juegos de pelota" },
                    Descripcion = "Soy un amante de los perros y me encanta pasearlos por el parque. Me gusta jugar con ellos y asegurarme de que estén bien hidratados durante la caminata."
                },
                new Paseador
                {
                    Id = 4,
                    Nombres = "Luis",
                    Apellidos = "Hernández",
                    CorreoElectronico = "luis.hernandez@mailinator.com",
                    Direccion = "Calle San Martín 555, San Miguel de Tucumán, Tucumán, T4000AIG",
                    Telefono = 555134567,
                    CobroPorHora = 150.0M,
                    ZonaActiva = "San Miguel de Tucumán",
                    Avatar = $"https://i.pravatar.cc/150?img=59",
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
                    CorreoElectronico = "isabella.martinez@mailinator.com",
                    Direccion = "Avenida San Juan 777, San Juan, San Juan, J5402ABJ",
                    Telefono = 316876543,
                    CobroPorHora = 20000.00m,
                    ZonaActiva = "San Juan", 
                    Avatar = $"https://i.pravatar.cc/150?img=48",
                    Preferencias = new List<string> { "Perros pequeños", "Caminatas cortas", "Juegos de búsqueda" },
                    Descripcion = "Soy una paseadora de perros con experiencia de 2 años, amo a los perros y me encanta caminar con ellos."
                }
            };

            modelBuilder.Entity<Paseador>().HasData(data);
            modelBuilder.Entity<Paseador>().OwnsMany(e => e.Disponibilidad).HasData(
                        new Disponibilidad { Id=1, DiaDeLaSemana = DayOfWeek.Monday, HoraInicio = 8, HoraFinal = 10, PaseadorId = 1 },
                        new Disponibilidad { Id=2, DiaDeLaSemana = DayOfWeek.Wednesday, HoraInicio = 14, HoraFinal = 16, PaseadorId = 1 },
                        new Disponibilidad { Id=3, DiaDeLaSemana = DayOfWeek.Friday, HoraInicio = 10, HoraFinal = 12, PaseadorId = 1 },
                        new Disponibilidad { Id=4, DiaDeLaSemana = DayOfWeek.Tuesday, HoraInicio = 12, HoraFinal = 14, PaseadorId = 2 },
                        new Disponibilidad { Id=5, DiaDeLaSemana = DayOfWeek.Thursday, HoraInicio = 16, HoraFinal = 18, PaseadorId = 2 },
                        new Disponibilidad { Id=6, DiaDeLaSemana = DayOfWeek.Saturday, HoraInicio = 8, HoraFinal = 10, PaseadorId = 2 },
                        new Disponibilidad { Id=7, DiaDeLaSemana = DayOfWeek.Monday, HoraInicio = 9, HoraFinal = 12, PaseadorId = 3 },
                        new Disponibilidad { Id=8, DiaDeLaSemana = DayOfWeek.Tuesday, HoraInicio = 10, HoraFinal = 14, PaseadorId = 3 },
                        new Disponibilidad { Id=9, DiaDeLaSemana = DayOfWeek.Wednesday, HoraInicio = 8, HoraFinal = 10, PaseadorId = 3 },
                        new Disponibilidad { Id=10, DiaDeLaSemana = DayOfWeek.Thursday, HoraInicio = 11, HoraFinal = 13, PaseadorId = 3 },
                        new Disponibilidad { Id=11, DiaDeLaSemana = DayOfWeek.Friday, HoraInicio = 12, HoraFinal = 15, PaseadorId = 3 },
                        new Disponibilidad { Id=12, DiaDeLaSemana = DayOfWeek.Saturday, HoraInicio = 15, HoraFinal = 18, PaseadorId = 3 },
                        new Disponibilidad { Id=13, DiaDeLaSemana = DayOfWeek.Sunday, HoraInicio = 14, HoraFinal = 17, PaseadorId = 3 },
                        new Disponibilidad { Id=14, DiaDeLaSemana = DayOfWeek.Monday, HoraInicio = 8, HoraFinal = 12, PaseadorId = 4 },
                        new Disponibilidad { Id=15, DiaDeLaSemana = DayOfWeek.Tuesday, HoraInicio = 13, HoraFinal = 18, PaseadorId = 4 },
                        new Disponibilidad { Id=16, DiaDeLaSemana = DayOfWeek.Wednesday, HoraInicio = 8, HoraFinal = 12, PaseadorId = 4 },
                        new Disponibilidad { Id=17, DiaDeLaSemana = DayOfWeek.Friday, HoraInicio = 14, HoraFinal = 20, PaseadorId = 4 },
                        new Disponibilidad { Id=18, DiaDeLaSemana = DayOfWeek.Saturday, HoraInicio = 10, HoraFinal = 16, PaseadorId = 4 },
                        new Disponibilidad { Id=19, DiaDeLaSemana = DayOfWeek.Sunday, HoraInicio = 10, HoraFinal = 16, PaseadorId = 4 },
                        new Disponibilidad { Id=20, DiaDeLaSemana = DayOfWeek.Monday, HoraInicio = 10, HoraFinal = 13, PaseadorId = 5 },
                        new Disponibilidad { Id=21, DiaDeLaSemana = DayOfWeek.Tuesday, HoraInicio = 9, HoraFinal = 12, PaseadorId = 5 },
                        new Disponibilidad { Id=22, DiaDeLaSemana = DayOfWeek.Wednesday, HoraInicio = 11, HoraFinal = 14, PaseadorId = 5 },
                        new Disponibilidad { Id=23, DiaDeLaSemana = DayOfWeek.Thursday, HoraInicio = 12, HoraFinal = 15, PaseadorId = 5 },
                        new Disponibilidad { Id=24, DiaDeLaSemana = DayOfWeek.Friday, HoraInicio = 13, HoraFinal = 16, PaseadorId = 5 },
                        new Disponibilidad { Id=25, DiaDeLaSemana = DayOfWeek.Saturday, HoraInicio = 9, HoraFinal = 11, PaseadorId = 5 },
                        new Disponibilidad { Id=26, DiaDeLaSemana = DayOfWeek.Sunday, HoraInicio = 11, HoraFinal = 13, PaseadorId = 5 }
                );
        }
    }
}
