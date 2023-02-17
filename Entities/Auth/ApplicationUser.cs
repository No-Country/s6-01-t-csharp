using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace s6_01.Entities.Auth
{
    public class ApplicationUser : IdentityUser
    {
        public int Id { get; set; }
        [Required]
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        ICollection<Mascota> Mascotas { get; set;} = new List<Mascota>();   
    }
}
