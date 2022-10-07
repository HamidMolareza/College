namespace WebApi.Models.Configs;

public class FilesValidationConfig {
    public const string SectionName = "FilesValidation";
    public long MinimumSize { get; set; }
    public long MaximumSize { get; set; }
}