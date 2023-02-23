using Microsoft.AspNetCore.Mvc;
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
        public IEnumerable<Paseador> Get()
        {
            return _context.Paseadores.ToList();
        }

        // GET api/<PaseadoresController>/5
        [HttpGet("{id}")]
        public Paseador Get(int id)
        {
            return _context.Paseadores.First(a=>a.Id == id);
        }

        // POST api/<PaseadoresController>
        [HttpPost]
        public void Post([FromBody] Paseador value)
        {

        }

        // PUT api/<PaseadoresController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Paseador value)
        {
        }

        // DELETE api/<PaseadoresController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
