using System;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IUnitOfWork : IDisposable // when the transaction is finished this disposes of the context
    {
         IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;
         
         // tracks number of changes to the db
         Task<int> Complete();
    }
}