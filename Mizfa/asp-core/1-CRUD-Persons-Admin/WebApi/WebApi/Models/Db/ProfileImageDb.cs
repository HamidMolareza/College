using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models.Db;

public class ProfileImageDb : BaseDb {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public Guid Id { get; set; }

    public string ImagePath { get; set; }

    public PersonDb Person { get; set; }
    public Guid PersonId { get; set; }
}