using WebApi.Models.Db;
using WebApi.Utility;

namespace WebApi.Models.ViewModels;

public class PersonOutputViewModel : BaseViewModel {
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public string? Family { get; set; }
    public string FullName => string.IsNullOrEmpty(Family) ? Name : Name + " " + Family;
    public string Username { get; set; } = null!;
    public string? Gender { get; set; }
    public bool IsStudent { get; set; }
    public string? HowToKnowUs { get; set; }
    public DateTime? Birthday { get; set; }
    public int? Age => DateTimeUtility.CalculateAge(Birthday, DateTime.UtcNow);
    public DateTime RegisterDate { get; set; }
    public List<ProfileImageOutputViewModel> ProfileImages { get; set; }
    public List<EmailOutputViewModel> Emails { get; set; }
    public List<PhoneOutputViewModel> Phones { get; set; }

    public static PersonOutputViewModel ConvertToViewModel(PersonDb personDb, string baseUrl) =>
        new() {
            Id = personDb.Id,
            Name = personDb.Name,
            Family = personDb.Family,
            Username = personDb.Username,
            Gender = personDb.Gender == GenderType.Male ? nameof(GenderType.Male) : nameof(GenderType.Female),
            IsStudent = personDb.IsStudent,
            HowToKnowUs = personDb.HowToKnowUs,
            Birthday = personDb.Birthday,
            RegisterDate = personDb.RegisterDate,
            CreatedDate = personDb.Created,
            UpdatedDate = personDb.Updated,
            ProfileImages = personDb.ProfileImages.Select(profileImageDb =>
                ProfileImageOutputViewModel.ConvertToViewModel(profileImageDb, baseUrl)).ToList(),
            Emails = personDb.Emails.Select(EmailOutputViewModel.ConvertToViewModel).ToList(),
            Phones = personDb.Phones.Select(PhoneOutputViewModel.ConvertToViewModel).ToList()
        };
}