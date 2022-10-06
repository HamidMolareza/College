using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.ViewModels; 

public class EmailInputViewModel {
    [EmailAddress]
    [MinLength(7)]
    [MaxLength(100)]
    [Required]
    public string Email { get; set; } = null!;
}