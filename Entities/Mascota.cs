﻿using System.ComponentModel.DataAnnotations;

namespace s6_01.Entities
{
    public class Mascota
    {
        [Key]
        public int Masc_Id { get; set; }
        [Required]
        [StringLength(25)]
        public string Nombre { get; set; } = string.Empty;
        [Required]
        [StringLength(20)]
        public string Raza { get; set; } = string.Empty;
        [Required]
        public float Peso { get; set; }
        [Required]
        public int Edad { get; set; }
        [Required]
        public bool Vacunas { get; set; }
        public string Notas { get; set; } = string.Empty;
    }
}