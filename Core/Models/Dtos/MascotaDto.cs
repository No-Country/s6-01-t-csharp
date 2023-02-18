namespace s6_01.Core.Models.Dtos
{
    public class MascotaDto
    {
        public int Id { get; set; }
    
        public string Nombre { get; set; } = string.Empty;
       
        public string Raza { get; set; } = string.Empty;
    
        public float Peso { get; set; }
     
        public int Edad { get; set; }
     
        public bool Vacunas { get; set; }
        public string Notas { get; set; } = string.Empty;
    }
}
