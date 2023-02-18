using s6_01.Core.Helper;
using s6_01.Core.Models.Dtos;
using s6_01.Entities;

namespace s6_01.Core.Interfaces
{
    public interface IMascotaBusiness
    {
        Task<Response<MascotaDto>> GetByIdAsycn(string Id);
        Task<Response<IEnumerable<MascotaDto>>> Get_AllAsycn(MascotaDto entity);
        Task<Response<bool>> CreateAsycn(MascotaDto entity);
        Task<Response<bool>> UpdateAsycn(MascotaDto entity);
        Task<Response<bool>> DeleteAsycn(string Id);

    }
}
