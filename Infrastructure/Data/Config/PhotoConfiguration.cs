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
            builder.Property(p => p.Description);
            builder.Property(p => p.DataCreated);
            builder.Property(p => p.Url).IsRequired();
            builder.Property(p => p.PublicId).IsRequired();
            builder.HasMany(b => b.Tags);
        }
    }
}