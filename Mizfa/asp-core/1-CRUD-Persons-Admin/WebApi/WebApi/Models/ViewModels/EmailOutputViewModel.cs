using WebApi.Models.Db;

namespace WebApi.Models.ViewModels;

public class EmailOutputViewModel : BaseViewModel {
    public Guid EmailId { get; set; }
    public Guid OwnerId { get; set; }
    public string Email { get; set; } = null!;
    public bool IsPrimary { get; set; }

    public static EmailOutputViewModel ConvertToViewModel(EmailDb emailDbModel) =>
        new() {
            EmailId = emailDbModel.Id,
            OwnerId = emailDbModel.PersonId,
            Email = emailDbModel.Email,
            IsPrimary = emailDbModel.IsPrimary,
            CreatedDate = emailDbModel.Created,
            UpdatedDate = emailDbModel.Updated
        };
}