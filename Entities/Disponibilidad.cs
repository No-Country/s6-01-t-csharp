namespace s6_01.Entities
{
    public class Disponibilidad
    {
        public int Id { get; set; }
        public DayOfWeek DiaDeLaSemana { get; set; }
        public TimeSpan HoraInicio { get; set; }
        public TimeSpan HoraFinal { get; set; }
    }
}
