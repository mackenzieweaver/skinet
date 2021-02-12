using System.Linq;
using Core.Entities;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    // just to be clear what's being passed in - TEntity
    public class SpecificationEvaluator<TEntity> where TEntity : BaseEntity
    {
        public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery, ISpecification<TEntity> spec)
        {
            // _context.Set<T>.AsQueryable()
            var query = inputQuery;
            
            // adds where clause
            if(spec.Criteria != null)
            {
                query = query.Where(spec.Criteria);
            }

            // adds orderby
            if(spec.OrderBy != null)
            {
                query = query.OrderBy(spec.OrderBy);
            }

            // adds orderbydescending
            if(spec.OrderByDescending != null)
            {
                query = query.OrderByDescending(spec.OrderByDescending);
            }

            // paging - comes last
            if(spec.IsPagingEnabled)        
            {
                query = query.Skip(spec.Skip).Take(spec.Take);
            }

            // aggregates ".Include()"s to query
            query = spec.Includes.Aggregate(query, (current, include) => current.Include(include));
            
            return query;
        }
    }
}