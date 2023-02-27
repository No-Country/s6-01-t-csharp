using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using s6_01.DataAccess;
using s6_01.Entities;

namespace s6_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusquedaController : ControllerBase
    {
        private readonly TWDContext context;

        public BusquedaController(TWDContext context)
        {
            this.context = context;
        }

        decimal GetRandomRating()
        {
            Random rnd = new Random();
            decimal rating = (decimal)rnd.NextDouble() * 1.5m + 3.5m;
            return Math.Round(rating, 1);
        }
        static string ConvertDayOfWeekToSpanish(DayOfWeek dayOfWeek)
        {
            switch (dayOfWeek)
            {
                case DayOfWeek.Monday:
                    return "Lunes";
                case DayOfWeek.Tuesday:
                    return "Martes";
                case DayOfWeek.Wednesday:
                    return "Miércoles";
                case DayOfWeek.Thursday:
                    return "Jueves";
                case DayOfWeek.Friday:
                    return "Viernes";
                case DayOfWeek.Saturday:
                    return "Sábado";
                case DayOfWeek.Sunday:
                    return "Domingo";
                default:
                    throw new ArgumentException("Invalid day of week.");
            }
        }
        [HttpGet]
        public IActionResult BuscarPaseadores(string query)
        {
            if (string.IsNullOrEmpty(query) || query.Length < 3)
            {
                // Return an empty list if query is null or has less than 3 characters
                return Ok(new List<string>());
            }
            var walkers = context.Paseadores
            .Where(p => p.ZonaActiva.Contains(query))
            .Select(p => new PaseadorParaListado
            {
                Id = p.Id,
                Nombre = p.Nombres + " " + p.Apellidos,
                Thumbnail = p.Avatar,
                Estrellas = GetRandomRating(),
                Descripcion = p.Descripcion,
                Disponibilidad = p.Disponibilidad
            .Select(d => new DisponibilidadVista
            {
                diaDeLaSemana = ConvertDayOfWeekToSpanish(d.DiaDeLaSemana),
                horaInicio = d.HoraInicio,
                horaFinal = d.HoraFinal
            })
            .ToArray(),
                Preferencias = p.Preferencias.ToArray(),
                AreasAtendidas = p.ZonaActiva,
                CobroPorHora = p.CobroPorHora
            })
            .AsNoTracking()
            .ToList();
            var directions = walkers.Select(a=>a.AreasAtendidas).Take(3).ToList();
            var result = new { Directions = directions, Walkers = walkers };
            return Ok(result);
        }
        public class PaseadorParaListado
        {
            public int Id { get; set; }
            public string Nombre { get; set; }
            public string Thumbnail { get; set; }
            public decimal Estrellas { get; set; }
            public string Descripcion { get; set; }
            public string[] Preferencias { get; set; }
            public DisponibilidadVista[] Disponibilidad { get; set; }
            public string AreasAtendidas { get; set; }
            public decimal CobroPorHora { get; set; }
        }
        public class DisponibilidadVista
        {
            public string diaDeLaSemana { get; set; }
            public int horaInicio { get; set; }
            public int horaFinal { get; set; }
        }
    }

  
}




