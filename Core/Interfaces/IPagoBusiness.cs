using s6_01.Controllers;
using s6_01.Core.Helper;
using s6_01.Core.Models.Dtos;
using s6_01.Core.Services.Pagos;
using s6_01.Entities;

namespace s6_01.Core.Interfaces
{
    public interface IPagoBusiness
    {
        Task<Response<PagoResultadoModel>> CreateAsycn(PagoModel model);
        //Task<Response<ReviewModel>> GetByIdAsync(int Id);
        //Task<Response<IEnumerable<ReviewModel>>> Get_AllAsync(int? clienteId = 0,int? paseadorId= 0);
        //Task<Response<ReviewModel>> CreateAsync(ReviewModel entity);
        //Task<Response<bool>> UpdateAsycn(ReviewModel entity);
        //Task<Response<bool>> DeleteAsycn(string Id);
    }
}
//Get_AllByPaseadorId(