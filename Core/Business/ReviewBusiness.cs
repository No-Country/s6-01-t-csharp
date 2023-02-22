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
                IsSucces = true
            });
        }

        #region Pending implementation

        public Task<Response<bool>> CreateAsycn(ReviewModel entity)
        {
            //If already has a review => false
            //if paseo hasn't been executed => false
            //if user isn't the same who hired paseador = > false

            throw new NotImplementedException();
        }

        public Task<Response<bool>> DeleteAsycn(string Id)
        {
            throw new NotImplementedException();
        }

        public Task<Response<ReviewModel>> GetByIdAsycn(string Id)
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
