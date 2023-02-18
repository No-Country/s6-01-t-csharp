using s6_01.Core.Helper;
using s6_01.Core.Models.Dtos;

namespace s6_01.Core.Interfaces
{
    public interface IPaseoBusiness
    {
        Task<Response<PaseoDto>> GetByIdAsycn(string Id);
        Task<Response<IEnumerable<PaseoDto>>> Get_AllAsycn(PaseoDto entity);
        Task<Response<bool>> CreateAsycn(PaseoDto entity);
        Task<Response<bool>> UpdateAsycn(PaseoDto entity);
        Task<Response<bool>> DeleteAsycn(string Id);
    }
}
