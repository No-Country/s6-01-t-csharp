using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using s6_01.DataAccess;
using s6_01.Entities;

namespace s6_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusquedaController : ControllerBase
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

            var directions = context.Paseadores.Where(p => p.Direccion.Contains(query)).Select(p => p.Direccion).ToList();
            var walkers = context.Paseadores.Where(p => p.Direccion.Contains(query)).ToList();

            var result = new { Directions = directions, Walkers = walkers };

            return Ok(result);
        }
    }
}



