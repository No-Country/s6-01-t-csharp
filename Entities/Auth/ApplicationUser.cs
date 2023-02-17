using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace s6_01.Entities.Auth
{
    public class ApplicationUser : IdentityUser
    {
       [Required]
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        ICollection<Mascota> Mascotas { get; set;}
    }
}
