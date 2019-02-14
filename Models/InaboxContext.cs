using Microsoft.EntityFrameworkCore;

namespace Inabox.Models
{
    public class InaboxContext : DbContext
    {
        public InaboxContext(DbContextOptions<InaboxContext> options)
            :base(options)
            {
            }
        public DbSet<Server> Servers { get; set; }
        public DbSet<ServerHistory> ServerHistories { get; set;}
        public DbSet<User> Users { get; set; }
    }
}