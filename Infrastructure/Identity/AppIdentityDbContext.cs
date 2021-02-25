using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContext : IdentityDbContext<AppUser>
    {
        public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : base(options)
        {
        }
        // if you don't do this you get problems with Identity and the primary keys it's looking for
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}