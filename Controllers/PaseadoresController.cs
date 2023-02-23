using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using s6_01.DataAccess;
using s6_01.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace s6_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaseadoresController : ControllerBase
    {
        public TWDContext _context { get; }

        public PaseadoresController(TWDContext context)
        {
            _context = context;
        }
        // GET: api/<PaseadoresController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paseador>>> Get()
        {
            var paseadores = await _context.Paseadores
                .Include(a=>a.Disponibilidad)
                .Include(a=>a.Preferencias)
                .ToListAsync();
            return paseadores;
        }

        // GET api/<PaseadoresController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Paseador>> Get(int id)
        {
            var paseador = await _context.Paseadores
                .Include(a => a.Disponibilidad)
                .Include(a => a.Preferencias)
                .FirstAsync(a=>a.Id == id);

            if (paseador == null)
            {
                return NotFound();
            }

            return paseador;
        }

        // POST api/<PaseadoresController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Paseador paseador)
        {
            try
            {
                _context.Paseadores.Add(paseador);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetPaseador", new { id = paseador.Id }, paseador);
            }
            catch (Exception e)
            {
                return BadRequest(e);
                throw;
            }

        }

        // PUT api/<PaseadoresController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Paseador paseador)
        {
            if (id != paseador.Id)
            {
                return BadRequest();
            }

            _context.Entry(paseador).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE api/<PaseadoresController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var paseador = await _context.Paseadores.FindAsync(id);

            if (paseador == null)
            {
                return NotFound();
            }

            _context.Paseadores.Remove(paseador);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
