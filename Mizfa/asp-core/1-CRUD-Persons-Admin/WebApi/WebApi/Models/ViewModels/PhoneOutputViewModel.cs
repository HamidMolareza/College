using WebApi.Models.Db;

namespace WebApi.Models.ViewModels;

public class PhoneOutputViewModel : BaseViewModel {
    public Guid Id { get; set; }
    public bool IsPrimary { get; set; }

    public static PhoneOutputViewModel ConvertToViewModel(PhoneDb phoneDb) =>
        new() {
            Id = phoneDb.Id,
            IsPrimary = phoneDb.IsPrimary,
            CreatedDate = phoneDb.Created,
            UpdatedDate = phoneDb.Updated
        };
}