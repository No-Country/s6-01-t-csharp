using s6_01.Controllers;
using s6_01.Core.Models.Dtos;
using s6_01.Entities;

namespace s6_01.Core.Mapper.Reviews
{
    public static class PaseadorMapper
    {
        static int GetRandomRating()
        {
            Random rnd = new Random();
            decimal rating = (decimal)rnd.NextDouble() * 1.5m + 3.5m;
            return (int)Math.Round(rating);
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
        public static PaseadorDto ToViewModel(this Paseador p)
        {
            PaseadorDto paseadorDto = new PaseadorDto
            {
                Id = p.Id,
                Nombres = p.Nombres,
                Apellidos = p.Apellidos,
                Avatar = p.Avatar,
                Estrellas = GetRandomRating(),
                Descripcion = p.Descripcion,
                Direccion = p.Direccion,
                Telefono = p.Telefono,
                Disponibilidad = p.Disponibilidad
            .Select(d => new DisponibilidadDto
            {
                diaDeLaSemana = ConvertDayOfWeekToSpanish(d.DiaDeLaSemana),
                horaInicio = d.HoraInicio,
                horaFinal = d.HoraFinal
            })
            .ToArray(),
                Preferencias = p.Preferencias.ToArray(),
                ZonaActiva = p.ZonaActiva,
                CobroPorHora = p.CobroPorHora
            };
            return paseadorDto;
        }
        public static IEnumerable<PaseadorDto> ToViewModel(this IEnumerable<Paseador> paseadores)
        {
            IEnumerable<PaseadorDto> dtos = paseadores.Select(x => x.ToViewModel());
            return dtos;
        }
    }
}
