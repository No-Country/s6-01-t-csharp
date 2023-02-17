﻿using s6_01.Entities.Auth;
using System.ComponentModel.DataAnnotations;

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
        public int Telefono { get; set; }
        [Required]
        public decimal CobroPorHora { get; set; }
        public ICollection<Disponibilidad> Disponibilidad { get; set; } = new List<Disponibilidad>();
        public List<string> Preferencias { get; set; }
        public string Descripcion { get; set; }
    }
}
