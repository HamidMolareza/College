using WebApi.Models.Db;

namespace WebApi.Models.ViewModels;

public class ProfileImageOutputViewModel : BaseViewModel {
    public Guid Id { get; set; }
    public Guid OwnerId { get; set; }
    public string ImageUrl { get; set; }

    public static ProfileImageOutputViewModel ConvertToViewModel(ProfileImageDb profileImageDb, string baseUrl) =>
        new() {
            Id = profileImageDb.Id,
            OwnerId = profileImageDb.PersonId,
            ImageUrl = $"{baseUrl}/{profileImageDb.ImagePath}",
            CreatedDate = profileImageDb.Created,
            UpdatedDate = profileImageDb.Updated
        };
}