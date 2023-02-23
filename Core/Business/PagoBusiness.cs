using s6_01.Core.Helper;
using s6_01.Core.Interfaces;
using s6_01.Core.Models.Dtos;
using s6_01.DataAccess;
using s6_01.Entities;

namespace s6_01.Core.Business
{
    public class PagoBusiness :IPagoBusiness
    {
        private readonly TWDContext ctx;

        public PagoBusiness(TWDContext ctx) => ctx = ctx ?? throw new ArgumentNullException(nameof(ctx));

        public async Task<Response<Pago>> CreateAsycn(Pago entity)
        {
            ctx.Pagos.Add(entity);
            try
            {
                await ctx.SaveChangesAsync();
                return new Response<Pago>() { Data = entity, IsSuccess = true};
            }
            catch (Exception e)
            {
                throw;
            }
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
