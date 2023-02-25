/*
 PRE: For payment paseo must exist
 
 */
using s6_01.Controllers;
using s6_01.Core.Helper;
using s6_01.Core.Services.Email.Interfaces;
using s6_01.DataAccess;
using s6_01.Entities;
using static s6_01.Controllers.PaseosController;

namespace s6_01.Core.Business
{
    public class PaseoBusiness
    {
        //crear un paseo
        //notificar solicitud paseo
        //recibir aceptacion paseo  PUT //api/paseo/1  aceptado id 
        //habilitar link pago   //api/paseo/1/pago

        private readonly TWDContext ctx;
        private readonly IEmailService emailService;
        public PaseoBusiness(TWDContext context, IEmailService emailService)
        {
            ctx = context;
            this.emailService = emailService;
        }

        public int CreatePaseo(PaseoCreateModel paseo)
        {
            //creo el paseo, le notifico al paseador con un email. el paseador al recibir el email puede aceptar ¿¿o declinar??
            //debo crear una mascota
            var paseoEntity = new Paseo()
            {
                EstadoTask = EstadoPaseo.SinAceotar,
                IdCliente = paseo.ClienteId,
                FechaIn = paseo.FechaInicio,
                FechaEnd = paseo.FechaInicio.AddHours(paseo.CantidadHoras)

            };

            var cliente = ctx.Users.First(x => x.IdCliente == paseo.ClienteId);
            var paseador = ctx.Paseadores.Find(paseo.PaseadorId);
            //necesito crear una mascota
            var mascota = new Mascota()
            {
                Nombre = paseo.MascotaNombre,
                Notas = paseo.MascotaTamano,
                Propietario = cliente,
                PropietarioId2 = cliente.IdCliente
            };
            paseoEntity.Mascota = mascota;
            paseoEntity.Tarifa = paseo.CantidadHoras * paseador.CobroPorHora;

            ctx.Paseos.Add(paseoEntity);
            ctx.SaveChanges();

            //templates
            var contenido =
                $"<h2>Hola {paseador.Nombres}!</h2><br>" +
                $"Tienes una nueva solicitud. Visita este link para aceptarla <a href='#' /> " +
                $"<br/>Info del paseo: {paseoEntity.Mascota.Nombre} <br/>" +
                $"Fecha : {paseo.MascotaNombre} <br/>" +
                $"Horas : {paseo.CantidadHoras}  <br/>" +
                $"etc.. ";

            var mensajePaseador = new Message(new[] { paseador.CorreoElectronico }, $"Quieres pasear con {paseo.MascotaNombre}?", contenido);

            contenido =
                $"<h2>Hola {cliente.Nombres}!</h2><br>" +
                $"Recibimos tu solicitud.Una vez el paseador que elegiste decida aceptarla <a href='#' /> " +
                $"<br/>recibiras un correo electronico para formalizar tu solicitud<br/>" +
                $"Fecha : {paseo.MascotaNombre} <br/>" +
                $"Horas : {paseo.CantidadHoras}  <br/>" +
                $"etc.. ";
            var mensajeCLiente = new Message(new[] { cliente.Email }, $"Haz agendado un paseo para {paseo.MascotaNombre}?", contenido);

            emailService.SendEmail(mensajePaseador);
            emailService.SendEmail(mensajeCLiente);
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
            var rows = ctx.SaveChanges();
            return rows > 0 ? true : false;
            //TODO  necesita mejora
        }

        //public PaseoModel UpdatePaseo(PaseoModel model)
        //{

        //}

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

