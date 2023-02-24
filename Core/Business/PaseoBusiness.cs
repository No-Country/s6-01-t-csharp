/*
 PRE: For payment paseo must exist
 
 */
using s6_01.Controllers;
using s6_01.Core.Helper;
using s6_01.DataAccess;
using s6_01.Entities;
using static s6_01.Controllers.PaseosController;

namespace s6_01.Core.Business
{
    public class PaseoBusiness
    {
        private readonly TWDContext ctx;
        public PaseoBusiness(TWDContext context)
        {
            ctx = context;
        }

        public int CreatePaseo(PaseoCreateModel paseo)
        {
            //creo el paseo, le notifico al paseador con un email. el paseador al recibir el email puede aceptar ¿¿o declinar??
            return 1;
        }


        public Response<Paseo> GetPaseoById(int id)
        {
            var obj = ctx.Paseos.Find(id);
            if (obj == null)
                return new Response<Paseo>() { IsSuccess = false, Message = "Not found", ResponseCode = 404 };

            return new Response<Paseo>() { Data = obj, IsSuccess = true };
        }

        public bool AcceptPaseo(int paseadorId, int paseoId)
        {
            //al recibir el correo recibe un email con un link a cliente, cliente debe llamar a PUT api/paseo/id con el estado Aceptado
            //TODO validations,
            //paseador must be active
            //paseador must exist
            //paseo must exist
            var paseo = ctx.Paseos.Find(paseoId);
            paseo.PaseadorId = paseoId;
            paseo.EstadoTask = EstadoPaseo.Aceptado;
            return true;
        }

        //crear un paseo
        //notificar solicitud paseo
        //recibir aceptacion paseo  PUT //api/paseo/1  aceptado id 
        //habilitar link pago   //api/paseo/1/pago

    }

    public static class EstadoPaseo
    {
        public static readonly string SinAceotar = "SinAceptar";
        public static readonly string Aceptado = "Aceptado";
        public static readonly string EnEjecucion = "EnEjecucion";
        public static readonly string Ejecutado = "Ejecutado"; 
        public static readonly string Cancelado = "Cancelado"; //este caso se da cuando una solicitud no es aceptada y pasa la fecha de la solicitud
        public static readonly string CanceladoPorCliente = "Cancelado";
        public static readonly string CanceladoPorPaseador = "Cancelado";
        public static readonly string Pagado = "Pagado";
    }
}

