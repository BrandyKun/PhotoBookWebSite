using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class PhotoConfiguration : IEntityTypeConfiguration<Photo>
    {
        public void Configure(EntityTypeBuilder<Photo> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Description).HasMaxLength(180);
            builder.Property(p => p.DataCreated);
            builder.Property(p => p.Url).IsRequired();
            builder.Property(p => p.PublicId).IsRequired();
            builder.HasOne(b => b.Tag).WithMany()
                .HasForeignKey(p => p.TagId);
           
        }
    }
}