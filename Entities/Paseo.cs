using s6_01.Entities.Auth;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace s6_01.Entities
{
    public class Paseo
    {
        [Key]
        public int IdPaseo { get; set; }
        [Required]
        public DateTime FechaIn { get; set; }
        [Required]
        public DateTime FechaEnd { get; set; }
        [Required]
        [MaxLength(15)]
        public string EstadoTask { get; set; }
      //  [Required]
        [MaxLength(20)]
        public string? ZonaPso { get; set; }
        public decimal Tarifa { get; set; }
        public virtual ReviewPaseo Review { get; set; }
        //public int ReviewPaseoId { get; set; }

        public int MascotaId { get; set; }
        public Mascota Mascota { get; set; } 

        public Paseador? Paseador { get; set; } 
        public int? PaseadorId { get; set; }

        //public ApplicationUser Cliente { get; set; } = new ApplicationUser();
        //[ForeignKey("ApplicationUser")]
        [Required]
        public int IdCliente { get; set; }
      //  public int cli { get; set; }
    }
}
