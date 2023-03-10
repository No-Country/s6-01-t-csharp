using s6_01.Entities.Auth;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace s6_01.Entities
{
    public class Paseador 
    {
        public int Id { get; set; }
        [Required]
        public string Nombres { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string CorreoElectronico { get; set; }
        [Required]
        public string Direccion { get; set; }
        [Required]
        public string ZonaActiva { get; set; }
        [Required]
        public int Telefono { get; set; }
        [Required]
        public decimal CobroPorHora { get; set; }
        public string Avatar { get; set; } = "https://i.pravatar.cc/150?u=";
        public ICollection<Disponibilidad> Disponibilidad { get; set; } = new List<Disponibilidad>();
        public ICollection<string> Preferencias { get; set; } = new List<string>();
        public string Descripcion { get; set; } = "";
    }
}
