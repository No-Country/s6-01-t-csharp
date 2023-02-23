using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using s6_01.Core.Helper;
using s6_01.Core.Interfaces;
using s6_01.Core.Mapper.Reviews;
using s6_01.DataAccess;
using s6_01.Entities;
using s6_01.Entities.Auth;
using System.ComponentModel.DataAnnotations;

namespace s6_01.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        IReviewBusiness business;
        UserManager<ApplicationUser> userManager;
        public ReviewsController(IReviewBusiness b, UserManager<ApplicationUser> userManager)
        {
            business = b;
            this.userManager = userManager;
        }

        #region Get
        // GET: api/<Reviews>
        [HttpGet]
        public async Task<Response<IEnumerable<ReviewModel>>> GetAll()
        {
            var res = await business.Get_AllAsync();
            return res;
        }

        /// <summary>
        /// Get ALl reviews left by cliente
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/<Reviews>/5
        [HttpGet("cliente/{idCliente}")]
        public async Task<Response<IEnumerable<ReviewModel>>> GetAllByPCLiente(int idCliente)
        {
            //TODO : Check if user requested is same who request
            var res = await business.Get_AllAsync(idCliente);
            return res;
        }

        /// <summary>
        /// Get ALl reviews by paseador
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/<Reviews>/5
        [HttpGet("paseador/{id}")]
        public async Task<Response<IEnumerable<ReviewModel>>> GetAllByPaseador(int id)
        {
            var res = await business.Get_AllAsync(paseadorId: id);
            return res;
        }

        /// <summary>
        /// Get by review Id
        /// </summary>
        /// <param name="idReview"></param>
        /// <returns></returns>
        // GET api/<Reviews>/5
        [HttpGet("{idReview}")]
        public async Task<Response<ReviewModel>> GetByReviewId(int idReview)
        {
            return await business.GetByIdAsync(idReview);
        }
        #endregion


        // POST api/<Reviews>
        [Authorize]
        [HttpPost()]
        public async Task<IActionResult> Post([FromBody] CreateReviewModel review)
        {
            //TODO get current user and check if he can post a review on this paseo
            var currentUser = HttpContext.User;
            var user = await userManager.FindByNameAsync(currentUser.Identity.Name);
            var currentUserId = user.IdCliente;

            var vm = review.ToViewModel(currentUserId);
            var result = await business.CreateAsync(vm);

            if (result.IsSuccess)
                return Created($"api/reviews/{result.Data.IdReview}", result);

            return BadRequest(result);
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
        public int IdReview { get; set; }
        public int IdPaseo { get; set; }
        public int IdCliente { get; set; }
        public int IdPaseador { get; set; }

        public DateTime Fecha { get; set; } = DateTime.Now;
        public int Estrellas { get; set; } = 1;
        public string Comentario { get; set; } = string.Empty;
    }

    public class CreateReviewModel
    {
        [Required]
        public int IdPaseo { get; set; }
        [Range(1,5)]
        public int Estrellas { get; set; } = 1;
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