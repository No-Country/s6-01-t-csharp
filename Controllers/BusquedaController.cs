using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using s6_01.Entities;

namespace s6_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusquedaController : ControllerBase
    {
        ICollection<PaseadorParaListado> dummyData;
        public BusquedaController()
        {
            dummyData = this.DummyData();
        }

        [HttpGet("{areaAtendida}")]
        public ICollection<PaseadorParaListado> Buscar(string areaAtendida)
        {
            var filtrado = dummyData
                .Where(x => x.AreasAtendidas
                .Any(x => x.ToUpper() == areaAtendida.ToUpper()))
                .OrderBy( x => x.Id)
                .ToList();
            return filtrado ;
        }

        private IList<PaseadorParaListado> DummyData()
        {
            return new List<PaseadorParaListado>()
            {
                new PaseadorParaListado(){
                    AreasAtendidas = new []{"Norte", "Oriente","Centro"},
                    Thumbnail = "/images/paseador1.png",
                    Id =6,
                    Nombre = "José Perdomo",
                    Descripcion = "Soy un hombre de 34 años que disfruta de las actividades al aire libre es por motivo(sumando el hecho que me gustan los animales) que decidí...",
                    CobroPorHora = 50.0m,
                      Preferencias = new []
                    {
                        "Golden Retriever",
                        "Labrador Retriever",
                        "Pastor Alemán"
                    }

                },
                new PaseadorParaListado(){
                    AreasAtendidas = new []{"Norte"},
                    Thumbnail = "/images/paseador2.png",
                    Id =7,
                    Nombre = "Andrés Pérez",
                    Descripcion = "Me gusta pasear perros, generalmente hago mis paseos en la tarde-noche. Estoy comprometido a brindarle a tu mascota el mejor servicio.",
                      Preferencias = new []
                    {
                        "Golden Retriever",
                        "Labrador Retriever",
                        "Pastor Alemán"
                    }
                },
                new PaseadorParaListado(){
                    AreasAtendidas = new []{"Norte", "Sur"},
                    Thumbnail = "/images/paseador3.png",
                    Id =8,
                    Nombre = "Juan Lacaze",
                    Descripcion = "Hola, soy Juan. Soy estudiante universitario y en mi tiempo libre me gusta salir a caminar, es por eso que decidí postularme como paseador de perros...",
                      Preferencias = new []
                    {
                        "Golden Retriever",
                        "Labrador Retriever",
                        "Pastor Alemán"
                    }
                },

                new PaseadorParaListado
                {
                    AreasAtendidas = new []{"Centro", "Sur"},
                    Thumbnail =  "/images/paseador.placeholder.png",
                    Id = 1,
                    Nombre = "Juan Pérez",
                    CobroPorHora = 50.0m,
                    Descripcion = "Soy un paseador de perros con más de 5 años de experiencia.",
                    Preferencias = new []
                    {
                        "Golden Retriever",
                        "Labrador Retriever",
                        "Pastor Alemán"
                    }
                },
                new PaseadorParaListado
                {
                    AreasAtendidas = new []{"Oriente"},
                    Thumbnail =  "/images/paseador.placeholder.png",
                    Id = 2,
                    Nombre = "María González",
                    CobroPorHora = 60.0m,
                    Descripcion = "Soy una paseadora de perros con más de 10 años de experiencia.",
                    Preferencias = new []
                    {
                        "Caniche",
                        "Bichón Frisé",
                        "Shih Tzu"
                    }
                },
                new PaseadorParaListado
                {
                    AreasAtendidas = new []{"Norte", "Occidente","Oriente","Centro"},
                    Thumbnail =  "/images/paseador.placeholder.png",
                    Id = 3,
                    Nombre = "Carlos García",
                    CobroPorHora = 25000.00m,
                    Preferencias = new [] { "Perros grandes", "Caminatas largas", "Juegos de pelota" },
                    Descripcion = "Soy un amante de los perros y me encanta pasearlos por el parque. Me gusta jugar con ellos y asegurarme de que estén bien hidratados durante la caminata."
                },
                new PaseadorParaListado
                {
                    AreasAtendidas = new []{"Norte", "Occidente"},
                    Thumbnail =  "/images/media/paseador.placeholder.png",
                    Id = 4,
                    Nombre = "Luis Hernández",
                    CobroPorHora = 150.0M,
                    Preferencias = new []
                    {
                        "Caminar por el parque",
                        "Jugar con pelotas",
                        "Hacer ejercicio"
                    },
                    Descripcion = "Soy un paseador de perros con experiencia de 5 años, amo a los perros y me encanta caminar con ellos."
                },
                new PaseadorParaListado
                {
                      AreasAtendidas = new []{"Norte","Sur", "Occidente"},
                    Thumbnail =  "/images/paseador.placeholder.png",
                    Id = 5,
                    Nombre = "Isabella Martínez",
                    CobroPorHora = 20000.00m,
                    Preferencias = new []{ "Perros pequeños", "Caminatas cortas", "Juegos de búsqueda" },
                    Descripcion = "Soy una paseadora de perros con experiencia de 2 años, amo a los perros y me encanta caminar con ellos."
                }
            };

        }


        [HttpGet("Zonas")]
        public IEnumerable<string> GetAllZonas()
        {
            var zonas = dummyData.SelectMany(x => x.AreasAtendidas).Distinct();
            return zonas;

        }

    }
}

public class PaseadorParaListado
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Thumbnail { get; set; }
    public int Estrellas { get; set; }
    public string Descripcion { get; set; }
    public string[] Preferencias { get; set; }
    public string[] AreasAtendidas { get; set; }
    public decimal CobroPorHora { get; set; }


}

