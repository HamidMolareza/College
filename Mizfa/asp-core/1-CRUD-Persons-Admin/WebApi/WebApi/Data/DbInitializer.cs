using WebApi.Models.Db;

namespace WebApi.Data;

public static class DbInitializer {
    public static async Task PrepareDatabaseAsync(IHost host) {
        using var scope = host.Services.CreateScope();
        var services = scope.ServiceProvider;

        try {
            var context = services.GetRequiredService<PersonContext>();
            await SeedAsync(context);
            await context.Database.MigrateAsync();
        }
        catch (Exception ex) {
            var logger = services.GetRequiredService<ILogger<Program>>();
            logger.LogError(ex, "An error occurred creating the DB");
            throw;
        }
    }

    private static async Task SeedAsync(PersonContext context) {
        await context.Database.EnsureCreatedAsync();
        if (context.Persons.Any()) {
            return; // DB has been seeded
        }

        var person1Id = new Guid();
        var person2Id = new Guid();

        var persons = new PersonDb[] {
            new() {
                Id = person1Id,
                Name = "Hamid",
                Family = "Molareza",
                Username = "HamidMolareza",
                Gender = GenderType.Male,
                IsStudent = false,
                HowToKnowUs = "He is the main developer.",
                Birthday = new DateTime(1996, 08, 19).ToUniversalTime(),
                RegisterDate = new DateTime(2022, 10, 06, 14, 46, 0).ToUniversalTime(),
                Emails = new List<EmailDb> {
                    new() {
                        PersonId = person1Id,
                        Email = "HamidMolareza@gmail.com",
                        IsPrimary = true
                    }
                },
                Phones = new List<PhoneDb> {
                    new() {
                        PersonId = person1Id,
                        PhoneNumber = "+989190305819",
                        IsPrimary = true
                    }
                }
            },
            new() {
                Id = person2Id,
                Name = "Mohammad",
                Family = "Molareza",
                Username = "m_molareza",
                Gender = GenderType.Male,
                IsStudent = false,
                RegisterDate = new DateTime(2022, 10, 06, 14, 52, 10).ToUniversalTime(),
            }
        };

        context.Persons.AddRange(persons);
        await context.SaveChangesAsync();
    }
}