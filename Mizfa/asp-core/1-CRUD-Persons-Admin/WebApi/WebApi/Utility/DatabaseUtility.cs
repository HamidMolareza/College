using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models.Configs;

namespace WebApi.Utility;

public static class DatabaseUtility {
    public static IServiceCollection AddDatabase(this WebApplicationBuilder builder) {
        var databaseData = new DatabaseConfig();
        builder.Configuration.GetSection(DatabaseConfig.SectionName).Bind(databaseData);

        builder.Services.AddDbContext<PersonContext>(options =>
            options.UseDatabase(databaseData.Type, databaseData.ConnectionString));

        return builder.Services;
    }

    private static DbContextOptionsBuilder UseDatabase(this DbContextOptionsBuilder options, string databaseType,
        string connectionString) {
        return databaseType.ToLower() switch {
            "postgres" => options.UseNpgsql(connectionString),
            "sqlserver" => options.UseSqlServer(connectionString),
            "memory" => options.UseInMemoryDatabase(connectionString),
            "mysql" => options.UseMySQL(connectionString),
            _ => throw new ArgumentOutOfRangeException($"The {databaseType} database is not supported.")
        };
    }
}