using s6_01.Controllers;
using s6_01.Core.Helper;
using s6_01.Core.Interfaces;
using s6_01.Core.Mapper.Reviews;
using s6_01.Core.Models.Dtos;
using s6_01.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace s6_01.Core.Business
{
    public class ReviewBusiness : IReviewBusiness
    {
        TWDContext ctx;
        public ReviewBusiness(TWDContext context)
        {
            ctx = context;
        }
        /// <summary>
        /// Get all reviews, and filters them by cliendId and/or paseadorId
        /// </summary>
        /// <param name="clienteId"></param>
        /// <param name="paseadorId"></param>
        /// <returns></returns>
        public Task<Response<IEnumerable<ReviewModel>>> Get_AllAsync(int? clienteId, int? paseadorId)
        {
            if (clienteId.Equals(String.Empty) || paseadorId < 0) throw new ArgumentOutOfRangeException();

            IEnumerable<ReviewModel> allreviews = new List<ReviewModel>();
            var baseQuery = ctx.Reviews.Include(y => y.Paseo);

            //without filters
            if (clienteId == 0 && paseadorId == 0)
            {
                allreviews = baseQuery
                    .Select(x => x.ToViewModel());
            }
            //by CLiente
            if (clienteId != 0 && paseadorId == 0)
            {
                allreviews = baseQuery
                  .Where(x => x.Paseo.IdCliente == clienteId)
                  .Select(x => x.ToViewModel());

            } //by Paseador
            if (clienteId == 0 && paseadorId != 0)
            {
                allreviews = baseQuery
                  .Where(x => x.Paseo.PaseadorId == paseadorId)
                  .Select(x => x.ToViewModel());
            }

            return Task.FromResult(new Response<IEnumerable<ReviewModel>>()
            {
                Data = allreviews.ToList(),
                Message = $"count: {allreviews.Count()}",
                IsSuccess = true
            });
        }
        public async Task<Response<ReviewModel>> GetByIdAsync(int id)
        {
            var obj = await ctx.Reviews.Include( x => x.Paseo).FirstOrDefaultAsync( x => x.Id == id);
            if (obj == null)
                return new Response<ReviewModel>() { Message = "Not found" };

            return new Response<ReviewModel>() {Data = obj.ToViewModel(), IsSuccess = true };
        }


        public async Task<Response<ReviewModel>> CreateAsync(ReviewModel model)
        {
            var paseoId = model.IdPaseo;
            var paseo = await ctx.Paseos.Include(p => p.Review).FirstOrDefaultAsync(x => x.IdPaseo == paseoId);
            if (paseo == null)
                return await Task.FromResult(new Response<ReviewModel>() { IsSuccess = false, Message = "paseo not found" });

            //If already has a review => false
            if (paseo.Review != null)
                return await Task.FromResult(new Response<ReviewModel>() { IsSuccess = false, Message = "paseo already has a review" });

            //if paseo hasn't been executed => false
            if (paseo.FechaEnd.ToUniversalTime() > DateTime.UtcNow)
                return await Task.FromResult(new Response<ReviewModel>() { IsSuccess = false, Message = "paseo hasn't ended" });

            //if user isn't the same who hired paseador = > false
            if (paseo.IdCliente != model.IdCliente)
                return await Task.FromResult(new Response<ReviewModel>() { IsSuccess = false, Message = "you can't left a review on this paseo" });

            var obj = model.ToEntity();
            //  obj.Paseo = paseo;
            //    ctx.Entry(obj).State = EntityState.Added;
            ctx.Reviews.Add(obj);
            await ctx.SaveChangesAsync();
            return await Task.FromResult(new Response<ReviewModel>() { Data = obj.ToViewModel(), IsSuccess = true, Message = "" });

        }

        #region Pending implementation
        public Task<Response<bool>> DeleteAsycn(string Id)
        {
            throw new NotImplementedException();
        }

        public Task<Response<bool>> UpdateAsycn(ReviewModel entity)
        {
            throw new NotImplementedException();
        }

    }
    #endregion
}
