using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.ViewModels;

public class phoneInputViewModel {
    [Phone] [MinLength(5)] [MaxLength(30)] public string PhoneNumber { get; set; }
}