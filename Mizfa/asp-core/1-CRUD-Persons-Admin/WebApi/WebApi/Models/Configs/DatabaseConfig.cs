namespace WebApi.Models.Configs;

public class DatabaseConfig {
    public const string SectionName = "Database";
    public string Type { get; set; } = null!;
    public string ConnectionString { get; set; } = null!;
}