using System.ComponentModel.DataAnnotations;

namespace s6_01.Entities
{
    public class Paseo
    {
        [Key]
        public int Pso_Id { get; set; }
        [Required]
        public DateTime FechaIn { get; set; }
        [Required]
        public DateTime FechaEnd { get; set; }
        [Required]
        [MaxLength(15)]
        public string  EstadoTask { get; set; }
        [Required]
        [MaxLength(20)]
        public string  ZonaPso { get; set; }
    }
}
