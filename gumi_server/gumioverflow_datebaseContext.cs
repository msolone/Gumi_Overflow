using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Gumi_Server;

namespace Gumi_Server
{
    public partial class gumioverflow_datebaseContext : DbContext
    {
        public gumioverflow_datebaseContext()
        {
        }

        public gumioverflow_datebaseContext(DbContextOptions<gumioverflow_datebaseContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=localhost;database=gumioverflow_database");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}
        public DbSet<Question> Questions {get; set;}
        public DbSet<Answer> Answers {get; set;}
    }
}
