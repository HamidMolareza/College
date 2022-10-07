using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApi.Utility;

namespace WebApi.Models.Db;

public class PersonDb : BaseDb {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public Guid Id { get; set; }

    [Required]
    [MinLength(3)]
    [MaxLength(100)]
    public string Name { get; set; } = null!;

    [MaxLength(100)] public string? Family { get; set; }
    public string FullName => string.IsNullOrEmpty(Family) ? Name : Name + " " + Family;

    [Required]
    [RegularExpression("[a-zA-Z0-9_]+")]
    [MinLength(4)]
    [MaxLength(50)]
    public string Username { get; set; } = null!;

    public GenderType? Gender { get; set; }
    public bool IsStudent { get; set; }
    [MaxLength(300)] public string? HowToKnowUs { get; set; }
    [DataType(DataType.Date)] public DateTime? Birthday { get; set; }
    public int? Age => DateTimeUtility.CalculateAge(Birthday, DateTime.UtcNow);
    public DateTime RegisterDate { get; set; }

    public ICollection<ProfileImageDb> ProfileImages { get; set; }
    public List<EmailDb> Emails { get; set; }
    public List<PhoneDb> Phones { get; set; }
}

public enum GenderType {
    Male = 1,
    Female = 2
}