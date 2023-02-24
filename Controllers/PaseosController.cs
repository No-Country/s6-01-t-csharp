using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using s6_01.Core.Business;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace s6_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaseosController : ControllerBase
    {   
        private readonly PaseoBusiness paseoBusiness;

        public PaseosController(PaseoBusiness paseoBusiness)
        {
            this.paseoBusiness = paseoBusiness;
        }

        // GET: api/<PaseosController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PaseosController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PaseosController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        //TODO authorize, si es paseador solo podra aceptar y cancelar un paseo
        //TODO si es cliente puede modificar fechas,modificar mascota, cancelar si aun no ha sido aceptada por el paseador
        //TODO alguna regla para cancelaciones cuando ya se ha realizado el pago y no se ha ejecutado el paseo
        // PUT api/<PaseosController>/5

       // [Authorize]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] PaseoCreateModel model)
        {
            if(User.IsInRole("Petwalker"))
            {
                var paseadorId = 1; //get paseadorId from user
                //aca acepto o cancelo e ignoro cualquier otro parametro
                var estado = model.Estado;
                //TODO : aca podria cancelarlo segun lo que venga en estado
                //verificar si estado es Aceptar o cancelar
                paseoBusiness.AcceptPaseo(paseadorId, id);
            }
            if (User.IsInRole("User"))
            {
                //TODO implementacion
            }

        //// DELETE api/<PaseosController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }

    public class PaseoCreateModel
    {
        public int ClienteId { get; set; }
        public int PaseadorId { get; set; }
        public string MascotaNombre { get; set; }
        public string MascotaTamano { get; set; }
        public DateTime FechaInicio { get; set; }
        public int CantidadHoras { get; set; }
        public string Notas { get; set; }

        public string Estado {get; set; }
    }
}
