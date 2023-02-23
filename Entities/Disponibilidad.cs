namespace s6_01.Entities
{
    public class Disponibilidad
    {
        public int Id { get; set; }
        public DayOfWeek DiaDeLaSemana { get; set; }
        public int HoraInicio { get; set; }
        public int HoraFinal { get; set; }
        public int PaseadorId { get; set; }
    }
}
