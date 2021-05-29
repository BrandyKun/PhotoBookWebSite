using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
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
                var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

                if (!context.Tags.Any())
                {
                    var tagsData = File.ReadAllText(path + @"/Data/SeedData/Tags.json");
                    // var tagsData = File.ReadAllText("../Infrastructure/Data/SeedData/Tags.json");

                    var tags = JsonSerializer.Deserialize<List<Tag>>(tagsData);

                    foreach (var item in tags)
                    {
                        context.Tags.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Photos.Any())
                {
                    var photosData = File.ReadAllText(path + @"/Data/SeedData/Photos.json");
                    // var photosData = File.ReadAllText("../Infrastructure/Data/SeedData/Photos.json");

                    var photos = JsonSerializer.Deserialize<List<Photo>>(photosData);

                    foreach (var item in photos)
                    {
                        context.Photos.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
                if (!context.AppDets.Any())
                {
                    var appSettingsData = File.ReadAllText(path + @"/Data/SeedData/Settings.json");

                    var settings = JsonSerializer.Deserialize<AppDetails>(appSettingsData);

                    
                        context.AppDets.Add(settings);
                    
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