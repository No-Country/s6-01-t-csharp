using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Crypto.Macs;
using s6_01.Core.Services.Email.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace s6_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComentariosController : ControllerBase
    {
        //TODO for brevety, needs improvements

        IEmailService servicioEmail;

        public ComentariosController(IEmailService servicioEmail)
        {
            this.servicioEmail = servicioEmail;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ComentarioModel model /*, IConfiguration coservicioEmailnf*/)
        {
            this.servicioEmail = servicioEmail;
            //envio al email de la empresa

            //si disponible, envio al correo de quien envia una confirmacion con un numero de tiquet asociado
            var ticketNumber = new Random().Next(1000, 50000);

            var textoConfirmacion =
                "Hola " + model.Nombre + "!." +
                "<br>Tu consulta ha sido recibida con exito! " +
                "Si requieres una respuesta ,nuestro equipo se " +
                "contactará contigo a traves del correo suministrado.";
            //TODO need improv..
            // var emailEmpresa = conf.GetSection("EmailConfiguration")
            //var casillas =  new []{ "tiketfan@gmail.com",
            if (model.Email != null)
            {
                var msgUsuario = new
                    Message(new[] { $"{model.Email}" }, $"[Ticket {ticketNumber}] TheWalkingDog :Tu consulta ha sido recibida!"
                    , textoConfirmacion);
                servicioEmail.SendEmailAsync(msgUsuario).ConfigureAwait(false);
            }

            var msgInterno = new Message(new[] { "tiketfan@gmail.com" }, $"[Ticket {ticketNumber}]  From: {model.Nombre} - {model.Email}"
              , model.Mensaje);
            servicioEmail.SendEmailAsync(msgInterno).ConfigureAwait(false); ;

            return Ok("Comentario recibido exitosamente");
        }
    }

    public class ComentarioModel
    {
        [Required]
        public string Nombre { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        
        public string Asunto { get; set; }
        [Required]
        [MaxLength(200)]
        public string Mensaje { get; set; }
    }
}
