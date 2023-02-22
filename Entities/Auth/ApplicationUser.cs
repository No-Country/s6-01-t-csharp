using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace s6_01.Entities.Auth
{
    public class ApplicationUser : IdentityUser
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int? IdCliente { get; set; }
        public string? Nombres { get; set; }
        public string? Apellidos { get; set;} 
        public string? Telefono {get;set;}
        public ICollection<Mascota> Mascotas { get; set;} = new List<Mascota>();   
    }

    //TODO - Generate a intermediate table containing internal id with guid
}
