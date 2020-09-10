using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class DataContextSeed
    {
        public static async Task SeedAsync(DataContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.Tags.Any())
                {
                    var tagsData = File.ReadAllText("../Infrastructure/Data/SeedData/Tags.json");

                    var tags = JsonSerializer.Deserialize<List<Tag>>(tagsData);

                    foreach (var item in tags)
                    {
                        context.Tags.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Photos.Any())
                {
                    var photosData = File.ReadAllText("../Infrastructure/Data/SeedData/Photos.json");

                    var photos = JsonSerializer.Deserialize<List<Photo>>(photosData);

                    foreach (var item in photos)
                    {
                        context.Photos.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<DataContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}