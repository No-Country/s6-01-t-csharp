using s6_01.Controllers;
using s6_01.Core.Helper;
using s6_01.Core.Models.Dtos;

namespace s6_01.Core.Interfaces
{
    public interface IReviewBusiness
    {
        Task<Response<ReviewModel>> GetByIdAsync(int Id);
        Task<Response<IEnumerable<ReviewModel>>> Get_AllAsync(int? clienteId = 0,int? paseadorId= 0);
        Task<Response<ReviewModel>> CreateAsync(ReviewModel entity);
        Task<Response<bool>> UpdateAsycn(ReviewModel entity);
        Task<Response<bool>> DeleteAsycn(string Id);
    }
}
//Get_AllByPaseadorId(