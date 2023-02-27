namespace s6_01.Core.Models.Dtos
{
    public class PaseadorDto
    {
        public int Id { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Avatar { get; set; }
        public decimal Estrellas { get; set; }
        public string Descripcion { get; set; }
        public string[] Preferencias { get; set; }
        public int Telefono { get; set; }
        public string Direccion { get; set; }
        public DisponibilidadDto[] Disponibilidad { get; set; }
        public string ZonaActiva { get; set; }
        public decimal CobroPorHora { get; set; }
    }

}




