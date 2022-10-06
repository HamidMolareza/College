using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models.Db;

public class PhoneDb : BaseDb {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public Guid Id { get; set; }

    [Phone] [MinLength(5)] [MaxLength(30)] public string PhoneNumber { get; set; }
    public bool IsPrimary { get; set; }

    public PersonDb Person { get; set; }
    public Guid PersonId { get; set; }
}