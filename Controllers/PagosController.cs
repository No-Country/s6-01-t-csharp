using Microsoft.AspNetCore.Mvc;
using s6_01.Core.Helper;
using s6_01.Core.Interfaces;
using s6_01.Core.Services.Pagos;
using s6_01.Entities;

namespace s6_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagosController : ControllerBase
    {
        private readonly IPagoBusiness pagosBusiness;
        public PagosController(IPagoBusiness pagos)
        {
            this.pagosBusiness = pagos;
        }

        [HttpPost]
        public async Task<Response<PagoResultadoModel>> CreatePayment(PagoModel pago)
        {
            var result = await pagosBusiness.CreateAsycn(pago);
            return result;
        }
    }

    public class PagoModel
    {
        public int PaseoId { get; set; }
        public decimal Valor { get; set; }

        public PagoTarjetaCredito Pago { get; set; }
    }

    //needs improvement
    public class PagoResultadoModel
    {
        public int Id { get; set; }
        public int PaseoId { get; set; }
        public decimal Valor { get; set; }
        public PaymentResponse  Pago {get;set;}
    }


    public class PagoTarjetaCredito
    {
        public decimal Value { get; set; }
        public string CreditCardNumber { get; set; }
        public DateTime ValidThru { get; set; }
        public int SecurityNumber { get; set; }
    }
}
