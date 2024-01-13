using Microsoft.EntityFrameworkCore;
using CustomerApi.Model;


namespace CustomerApi.Data
{
	public class CusDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "CusDbContext");
        }

        public DbSet<CustomerDetail> CustomerDetails { get; set; }
    }
}

