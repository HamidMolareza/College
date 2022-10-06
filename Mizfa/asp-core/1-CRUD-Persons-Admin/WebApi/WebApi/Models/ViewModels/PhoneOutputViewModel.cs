using WebApi.Models.Db;

namespace WebApi.Models.ViewModels;

public class PhoneOutputViewModel : BaseViewModel {
    public Guid PhoneId { get; set; }
    public Guid OwnerId { get; set; }
    public string PhoneNumber { get; set; }
    public bool IsPrimary { get; set; }

    public static PhoneOutputViewModel ConvertToViewModel(PhoneDb phoneDb) =>
        new() {
            PhoneId = phoneDb.Id,
            OwnerId = phoneDb.PersonId,
            PhoneNumber = phoneDb.PhoneNumber,
            IsPrimary = phoneDb.IsPrimary,
            CreatedDate = phoneDb.Created,
            UpdatedDate = phoneDb.Updated
        };
}