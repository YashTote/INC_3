
using Microsoft.EntityFrameworkCore;

using dotnetapp.Models;

namespace dotnetapp.Models
{
    public class ApplicationDbContext : DbContext
    {       
         public ApplicationDbContext(){
                
            }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            if(!optionsBuilder.IsConfigured){
                optionsBuilder.UseSqlServer("User ID = sa; password = examlyMssql@123; server = localhost; Database = inc3DB; trusted_connetion = false; Persist Security Info = false; Encrypt = false");
            }
        }

        // Add DbSet properties for other entities as needed
    }
}
