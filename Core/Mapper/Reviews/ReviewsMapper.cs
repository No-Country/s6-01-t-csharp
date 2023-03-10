using s6_01.Controllers;
using s6_01.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace s6_01.Core.Mapper.Reviews
{
    public static class ReviewsMapper
    {
        public static ReviewModel ToViewModel(this ReviewPaseo review)
        {
            var dto = new ReviewModel()
            {
              IdReview = review.Id,
              IdPaseo = review.PaseoId,
              Fecha = review.Fecha,
              Comentario = review.Comentario,
              Estrellas = review.Estrellas,
              IdCliente = review.Paseo.IdCliente,
              IdPaseador = review.Paseo.PaseadorId.Value
            };
            return dto;
        }

        public static IEnumerable<ReviewModel> ToViewModel(this IEnumerable<ReviewPaseo> reviews)
        {
            IEnumerable<ReviewModel>  dtos = reviews.Select(x => x.ToViewModel());
            return dtos;
        }

        public static ReviewModel ToViewModel(this CreateReviewModel review,int idCliente)
        {
            var dto = new ReviewModel()
            {
                IdPaseo = review.IdPaseo,
                Comentario = review.Comentario,
                Estrellas = review.Estrellas,
                IdCliente = idCliente,
            };
            return dto;
        }

        public static ReviewPaseo ToEntity(this ReviewModel review)
        {
            var obj = new ReviewPaseo()
            {
                Id = review.IdReview,
                PaseoId = review.IdPaseo,
                Fecha = DateTime.Now,
                Comentario = review.Comentario,
                Estrellas = review.Estrellas,
            };
            return obj;
        }

    }
}
