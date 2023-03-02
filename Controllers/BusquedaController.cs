using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using s6_01.Core.Mapper.Reviews;
using s6_01.Core.Models.Dtos;
using s6_01.DataAccess;

namespace s6_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public partial class BusquedaController : ControllerBase
    {
        private readonly TWDContext context;

        public BusquedaController(TWDContext context)
        {
            this.context = context;
        }
     
        [HttpGet]
        public IActionResult BuscarPaseadores(string query)
        {
            if (string.IsNullOrEmpty(query) || query.Length < 3)
            {
                // Return an empty list if query is null or has less than 3 characters
                return Ok(new List<string>());
            }
            var walkers = context.Paseadores.Where(p => p.ZonaActiva.Contains(query) || p.Direccion.Contains(query)).ToList().ToViewModel();
            var directions = walkers.Select(a => a.ZonaActiva).Take(3).ToList();
            var result = new { Directions = directions, Walkers = walkers };
            return Ok(result);
        }
    }


}




