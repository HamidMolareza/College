using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.ViewModels;

public class PersonInputViewModel {
    [Required]
    [MinLength(3)]
    [MaxLength(100)]
    public string Name { get; set; } = null!;

    [MaxLength(100)] public string? Family { get; set; }

    [Required]
    [RegularExpression("[a-zA-Z0-9_]+")]
    [MinLength(4)]
    [MaxLength(50)]
    public string Username { get; set; } = null!;

    public int? Gender { get; set; }
    public bool IsStudent { get; set; }
    [MaxLength(300)] public string? HowToKnowUs { get; set; }
    [DataType(DataType.Date)] public DateTime? Birthday { get; set; }
    public DateTime RegisterDate { get; set; }

    public List<EmailInputViewModel> Emails { get; set; }
    public List<phoneInputViewModel> Phones { get; set; }
}