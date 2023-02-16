using Microsoft.AspNetCore.Mvc;
using s6_01.Entities;

namespace s6_01.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        // GET: api/<Reviews>
        [HttpGet]
        public IEnumerable<string> GetAll()
        {
            return new[] {
            "All Reviews collection",
            "All Reviews collection",
            "All Reviews collection",
            "All Reviews collection" };
        }

        /// <summary>
        /// Get ALl reviews left by cliente
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/<Reviews>/5
        [HttpGet("cliente/{idCliente}")]
        public IEnumerable<string> GetAllByPCLiente(int idCliente)
        {
            return new[] {
            $"All Reviews collection {idCliente}",
            $"All Reviews collection {idCliente}",
            $"All Reviews collection {idCliente}",
            $"All Reviews collection {idCliente}" };
        }


        /// <summary>
        /// Get ALl reviews by paseador
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/<Reviews>/5
        [HttpGet("paseador/{id}")]
        public IEnumerable<string> GetAllByPaseador(int id)
        {
            return new[] {
            $"All Reviews collection {id}",
            $"All Reviews collection {id}",
            $"All Reviews collection {id}",
            $"All Reviews collection {id}" };
        }

        /// <summary>
        /// Get by review Id
        /// </summary>
        /// <param name="idReview"></param>
        /// <returns></returns>
        // GET api/<Reviews>/5/45
        [HttpGet("{idReview}")]
        public IEnumerable<string> GetByReviewId(int idReview)
        {
            return new[] {
            $"All Reviews collection {idReview}",
            $"All Reviews collection {idReview}",
            $"All Reviews collection {idReview}",
            $"All Reviews collection {idReview}" };
        }



        // POST api/<Reviews>
        [HttpPost("{idPaseo}")]
        public IActionResult Post(int idPaseo, [FromBody] ReviewModel review)
        {
            var id = new Random().Next(10);
            return  Created($"api/reviews/{id}", review);
        }

        //// PUT api/<Reviews>/5
        //[HttpPut("{idReview}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<Reviews>/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return "deleted";
        }
    }


    public class ReviewModel
    {
        protected int IdPaseo { get; set; }
        protected DateTime Fecha { get; set; } = DateTime.Now;
        public int Estrellas { get; set; }  = 1;
        public string Comentario { get; set; } = string.Empty;
    }
}


/*
 
  public int Id { get; set; }
        public int PaseoId { get; set; }
        public Paseo Paseo { get; set; }
        public DateTime Fecha { get; set; }
        [Range(1,5,ErrorMessage ="Out of range")]
        public int Estrellas { get; set; }
        public string Comentario { get; set; } = string.Empty;

        public bool IsVisible { get; set; } = true;
        public bool IsModerated { get; set; } = false;
        public bool IsDeleted { get; set; } = false;*/