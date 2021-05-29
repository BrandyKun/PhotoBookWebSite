using System.Reflection;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<PhotoTag> photoTags { get; set; }
        public DbSet<AppDetails> AppDets { get; set; }
        public DbSet<Collection> Collections { get; set; }
        public DbSet<PhotoCollection> PhotoCollection { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            
            modelBuilder.Entity<PhotoTag>(x=> x.HasKey(pt => new {pt.PhotoId, pt.TagId}));
            modelBuilder.Entity<PhotoCollection>(x=> x.HasKey(pt => new {pt.PhotoId, pt.CollectionId}));

            modelBuilder.Entity<PhotoTag>()
                .HasOne(p => p.Photo)
                .WithMany(t => t.Tags)
                .HasForeignKey(pt => pt.PhotoId);

            modelBuilder.Entity<PhotoTag>()
                .HasOne(t => t.Tag)
                .WithMany(p => p.Photos)
                .HasForeignKey(pt => pt.TagId);

            modelBuilder.Entity<PhotoCollection>()
                .HasOne(p => p.Photo)
                .WithMany(c => c.Collectios)
                .HasForeignKey(pc => pc.PhotoId);

            modelBuilder.Entity<PhotoCollection>()
                .HasOne(c => c.Collection)
                .WithMany(p => p.Photos)
                .HasForeignKey(pc => pc.CollectionId);

        }
    }
}