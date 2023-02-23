using s6_01.Controllers;
using s6_01.Core.Helper;
using s6_01.Core.Interfaces;
using s6_01.Core.Models.Dtos;
using s6_01.Core.Services.Pagos;
using s6_01.DataAccess;
using s6_01.Entities;

namespace s6_01.Core.Business
{
    public class PagoBusiness : IPagoBusiness
    {
        private readonly TWDContext ctx;
        private readonly CreditCardPaymentService pym;

        public PagoBusiness(TWDContext ctx, CreditCardPaymentService pym)
        {
            this.ctx = ctx ?? throw new ArgumentNullException(nameof(ctx));
            this.pym = pym;
        }

        public async Task<Response<PagoResultadoModel>> CreateAsycn(PagoModel model)
        {

            PagoResultadoModel res = new PagoResultadoModel();
            //pending validation
            //paseo must exists
            if (!ctx.Paseos.Any(x => x.IdPaseo == model.PaseoId))
            {
                return new Response<PagoResultadoModel>() { Data = res, IsSuccess = false, Message = "Paseo no existe" };
            }
            //paseo doesnt have to have a payment
            if (ctx.Pagos.Any(x => x.PaseoId == model.PaseoId))
            {
                return new Response<PagoResultadoModel>() { Data = res, IsSuccess = false, Message = "Paseo ya registra información de pago" };
            }

            //obtengo respuesta del servicio de pagos
            //mapper
            CreditCardPayment ccPayment = new CreditCardPayment()
            {
                CreditCardNumber = model.Pago.CreditCardNumber,
                SecurityNumber = model.Pago.SecurityNumber,
                ValidThru = model.Pago.ValidThru,
                Value = model.Pago.Value,
            };
            var response = pym.GeneratePayment(ccPayment);

            //si es correcto genero el modelo del pago para persistirlo
            if (response.Status)
            {
                //mapper

                var entity = new Pago()
                {
                    FechaPago = DateTime.Now,
                    PaseoId = model.PaseoId,
                    Valor = model.Valor,
                    Nota = $"Pago con tarjeta Id: {response.Id}, Resultado = {response.StatusMessage}"
                };
                ctx.Pagos.Add(entity);
                try
                {
                    await ctx.SaveChangesAsync();
                    res = new PagoResultadoModel() { Id = entity.Id, PaseoId = model.PaseoId, Valor = model.Valor, Pago = response };
                    return new Response<PagoResultadoModel>() { Data = res, IsSuccess = true, Message = res.Pago.ToString() };
                }
                catch (Exception e)
                {
                    throw;
                }
            }
            //else
            res.PaseoId = model.PaseoId;
            res.Valor = model.Valor;
            res.Pago = response;
            return new Response<PagoResultadoModel>() { Data = res, IsSuccess = response.Status, Message = response.StatusMessage };
        }

        //public Task<Response<bool>> DeleteAsycn(string Id)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<Response<MascotaDto>> GetByIdAsycn(string Id)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<Response<IEnumerable<MascotaDto>>> Get_AllAsycn(Pago entity)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<Response<bool>> UpdateAsycn(Pago entity)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
