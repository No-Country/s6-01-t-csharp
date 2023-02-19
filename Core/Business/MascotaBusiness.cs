using s6_01.Core.Helper;
using s6_01.Core.Interfaces;
using s6_01.Core.Models.Dtos;
using s6_01.DataAccess;

namespace s6_01.Core.Business
{
    public class MascotaBusiness: IMascotaBusiness
    {
        private readonly TWDContext _dbcontext;
        public MascotaBusiness( TWDContext context)
        {
            _dbcontext = context;
        }

        public Task<Response<bool>> CreateAsycn(MascotaDto entity)
        {
            throw new NotImplementedException();
        }

        public Task<Response<bool>> DeleteAsycn(string Id)
        {
            throw new NotImplementedException();
        }

        public Task<Response<MascotaDto>> GetByIdAsycn(string Id)
        {
            throw new NotImplementedException();
        }

        public Task<Response<IEnumerable<MascotaDto>>> Get_AllAsycn(MascotaDto entity)
        {
            throw new NotImplementedException();
        }

        public Task<Response<bool>> UpdateAsycn(MascotaDto entity)
        {
            throw new NotImplementedException();
        }
    }
}
