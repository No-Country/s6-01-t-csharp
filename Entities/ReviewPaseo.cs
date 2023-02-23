using System.ComponentModel.DataAnnotations;

namespace s6_01.Entities
{
    public class ReviewPaseo
    {
        public int Id { get; set; }
        public int PaseoId { get; set; }
        public virtual Paseo Paseo { get; set; }
        public DateTime Fecha { get; set; }
        [Range(1,5,ErrorMessage ="Out of range")]
        public int Estrellas { get; set; }
        public string Comentario { get; set; } = string.Empty;

        public bool IsVisible { get; set; } = true;
        public bool IsModerated { get; set; } = false;
        public bool IsDeleted { get; set; } = false;
    }
}
