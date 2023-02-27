using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace s6_01.Entities
{
    public class Pago
    {
        public int Id { get; set; }
        public Paseo Paseo { get; set; }
        [ForeignKey("Paseo")]
        public int PaseoId { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public decimal Valor { get; set; }
        public DateTime FechaPago { get; set; }

        // public int MedioPago { get; set; }
        //TODO needs improvements => this only for the demo
        //public string NumeroTarjeta { get; set; }
        //public int CodigoSeguridad { get; set; }
        //public DateTime FechaVencimiento { get; set; }

        public string Nota { get; set; } = String.Empty;
    }
}
