namespace WebApi.Models;

public class DatabaseAppSetting {
    public const string SectionName = "Database";
    public string Type { get; set; } = null!;
    public string ConnectionString { get; set; } = null!;
}