using s6_01.DataAccess;

namespace s6_01.Core.Business
{
    public class PaseoBusiness
    {
        private readonly TWDContext _context;
        public PaseoBusiness(TWDContext context)
        {
            _context = context;
        }

    }
}
