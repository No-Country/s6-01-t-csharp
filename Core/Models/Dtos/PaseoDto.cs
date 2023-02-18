namespace s6_01.Core.Models.Dtos
{
    public class PaseoDto
    {
        public int Id { get; set; }
     
        public DateTime FechaIn { get; set; }
    
        public DateTime FechaEnd { get; set; }

        public string EstadoTask { get; set; } = String.Empty;

        public string ZonaPso { get; set; } = String.Empty;
        public float Tarifa { get; set; }
    }
}
