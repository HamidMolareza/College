using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models.Db;

public class EmailDb : BaseDb {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public Guid Id { get; set; }

    [EmailAddress]
    [MinLength(7)]
    [MaxLength(100)]
    [Required]
    public string Email { get; set; } = null!;

    public bool IsPrimary { get; set; }

    public PersonDb Person { get; set; } = null!;
    public Guid PersonId { get; set; }
}