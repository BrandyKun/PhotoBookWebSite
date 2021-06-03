using API.Helpers;
using API.Middleware;
using AutoMapper;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System.Linq;
using API.Errors;
using Infrastructure.Identity;
using API.Extensions;
using Infrastructure.Services;
using API.Services;
using StackExchange.Redis;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;
        public Startup(IConfiguration config)
        {
            _config = config;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureDevelopmentServices(IServiceCollection services)
        {
            // services.AddDbContext<DataContext>(x => x.UseSqlite(_config.GetConnectionString("DefaultConnection")));
            // services.AddDbContext<AppIdentityDbContext>(x => x.UseSqlite(_config.GetConnectionString("IdentityConnection")));
            services.AddDbContext<DataContext>(x => x.UseSqlServer(_config.GetConnectionString("DefaultSQLConnection")));
            services.AddDbContext<AppIdentityDbContext>(x => x.UseSqlServer(_config.GetConnectionString("IdentitySQlConnection")));
            
            ConfigureServices(services);
        }
        public void ConfigureProductionServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(x => x.UseSqlServer(_config.GetConnectionString("DefaultSQLConnection")));
            services.AddDbContext<AppIdentityDbContext>(x => x.UseSqlServer(_config.GetConnectionString("IdentitySQlConnection")));

            ConfigureServices(services);
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IBasketRepository, BasketRepository>();
            services.Configure<CloudinarySettings>(_config.GetSection("CloudinarySettings"));
            services.AddAutoMapper(typeof(MappingProfiles));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddControllers();
            services.AddSingleton<IConnectionMultiplexer>(c =>
            {
                var configuration = ConfigurationOptions.Parse(_config.GetConnectionString("Redis"), true);
                return ConnectionMultiplexer.Connect(configuration);
            });
               
            services.Configure<ApiBehaviorOptions>(options =>
                {
                    options.InvalidModelStateResponseFactory = actionContext =>
                        {
                            var errors = actionContext.ModelState
                            .Where(e => e.Value.Errors.Count > 0)
                            .SelectMany(x => x.Value.Errors)
                            .Select(x => x.ErrorMessage).ToArray();

                            var errorResponse = new ApiValidationErrorResponse
                            {
                                Errors = errors
                            };

                            return new BadRequestObjectResult(errorResponse);
                        };
                });
            
            services.AddIdentityServices(_config);

            services.AddAuthentication();
            services.AddScoped<IPhotosRepository, PhotoRepository>();
            services.AddScoped<IBrandingService, BrandigService>();
            services.AddScoped((typeof(IGenericRepository<>)), (typeof(GenericRepository<>)));
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.WithOrigins("https://localhost:4200").AllowAnyHeader().AllowCredentials().AllowAnyMethod();
                });
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PhotoBook API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseMiddleware<ExceptionMiddleware>();

            app.UseStatusCodePagesWithReExecute("/errors/{0}");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.UseCors("CorsPolicy");

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseSwagger();

            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "Photobook API v1"); });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapFallbackToController("Index","Fallback");
            });
        }
    }
}
