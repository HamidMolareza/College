using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models.Db;
using WebApi.Models.ViewModels;
using WebApi.Utility;

namespace WebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase {
        private readonly PersonContext _context;

        public PersonController(PersonContext context) {
            _context = context;
        }

        // GET: api/Person
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonOutputViewModel>>> GetPersons(bool loadImages = false,
            bool loadEmails = false, bool loadPhones = false) {
            var persons = _context.Persons.AsNoTracking().AsQueryable();

            if (loadImages)
                persons = persons.Include(person => person.ProfileImages);
            else
                persons = persons.Include(person =>
                    person.ProfileImages.OrderByDescending(p => p.Created).Take(1));

            if (loadEmails)
                persons = persons.Include(person => person.Emails);
            else
                persons = persons.Include(person =>
                    person.Emails.Where(e => e.IsPrimary).Take(1));

            if (loadPhones)
                persons = persons.Include(person => person.Phones);
            else
                persons = persons.Include(person =>
                    person.Phones.Where(p => p.IsPrimary).Take(1));

            return (await persons.ToListAsync())
                .Select(person =>
                    PersonOutputViewModel.ConvertToViewModel(person, UrlUtility.AddHttp(Request.Headers["Host"])))
                .ToList();
        }

        // GET: api/Person/5
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<PersonOutputViewModel>> GetPerson(Guid id) {
            var personDb = await _context.Persons
                .AsNoTracking()
                .Where(p => p.Id == id)
                .Include(p => p.Phones)
                .Include(p => p.ProfileImages)
                .Include(p => p.Emails)
                .SingleOrDefaultAsync();

            if (personDb is null)
                return NotFound();

            return PersonOutputViewModel.ConvertToViewModel(personDb, UrlUtility.AddHttp(Request.Headers["Host"]));
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> PutPerson(Guid id, PersonUpdateViewModel person) {
            var personDb = await _context.Persons.FindAsync(id);
            if (personDb is null)
                return NotFound();

            if (!await IsUsernameValidAsync(person.Username)) {
                ModelState.AddModelError("username_error", "Username is not valid");
                return Conflict(ModelState);
            }

            if (!IsGenderTypeValid(person.Gender)) {
                ModelState.AddModelError("gender_error", "The gender value is not valid.");
                return BadRequest(ModelState);
            }

            personDb.Name = person.Name;
            personDb.Family = person.Family;
            personDb.Username = person.Username;
            personDb.IsStudent = person.IsStudent;
            personDb.HowToKnowUs = person.HowToKnowUs;
            personDb.Birthday = person.Birthday;
            personDb.RegisterDate = person.RegisterDate;
            personDb.Gender = person.Gender is null
                ? null
                : (GenderType) Enum.ToObject(typeof(GenderType), person.Gender);

            await _context.SaveChangesAsync();
            return NoContent();
        }

        private async Task<bool> IsUsernameValidAsync(string username) =>
            !await _context.Persons.AnyAsync(person => person.Username.ToLower() == username.ToLower());

        private static bool IsGenderTypeValid(int? gender) =>
            gender is null || Enum.IsDefined(typeof(GenderType), gender);

        [HttpPost]
        public async Task<ActionResult<PersonDb>> PostPerson(PersonInputViewModel person) {
            if (!await IsUsernameValidAsync(person.Username)) {
                ModelState.AddModelError("username_error", "Username is not valid");
                return Conflict(ModelState);
            }

            if (!IsGenderTypeValid(person.Gender)) {
                ModelState.AddModelError("gender_error", "The gender value is not valid.");
                return BadRequest(ModelState);
            }

            if (!await EnsureEmailsAreValidAsync(person.Emails))
                return BadRequest(ModelState);

            if (!await EnsurePhonesAreValidAsync(person.Phones))
                return BadRequest(ModelState);

            var personId = Guid.NewGuid();
            var personDb = new PersonDb {
                Id = personId,
                Name = person.Name,
                Family = person.Family,
                Username = person.Username,
                Gender = person.Gender is null
                    ? null
                    : (GenderType) Enum.ToObject(typeof(GenderType), person.Gender),
                IsStudent = person.IsStudent,
                HowToKnowUs = person.HowToKnowUs,
                Birthday = person.Birthday,
                RegisterDate = person.RegisterDate,
                Emails = person.Emails.Select(e => new EmailDb {
                    Id = Guid.NewGuid(),
                    Email = e.Email,
                    PersonId = personId
                }).ToList(),
                Phones = person.Phones.Select(p => new PhoneDb {
                    Id = Guid.NewGuid(),
                    PersonId = personId,
                    PhoneNumber = p.PhoneNumber
                }).ToList()
            };
            _context.Persons.Add(personDb);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPerson), new {id = personId},
                PersonOutputViewModel.ConvertToViewModel(personDb, UrlUtility.AddHttp(Request.Headers["Host"])));
        }

        private async Task<bool> EnsureEmailsAreValidAsync(List<EmailInputViewModel> emails) {
            var isValid = true;
            foreach (var email in emails) {
                if (!await _context.Emails.AnyAsync(e => e.Email == email.Email)) {
                    continue;
                }

                isValid = false;
                ModelState.AddModelError(email.Email, "Duplicate email");
            }

            return isValid;
        }

        private async Task<bool> EnsurePhonesAreValidAsync(List<phoneInputViewModel> phones) {
            var isValid = true;
            foreach (var phone in phones) {
                if (!await _context.Phones.AnyAsync(p => p.PhoneNumber == phone.PhoneNumber)) {
                    continue;
                }

                isValid = false;
                ModelState.AddModelError(phone.PhoneNumber, "Duplicate phone");
            }

            return isValid;
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeletePersonDb(Guid id) {
            var personDb = await _context.Persons.FindAsync(id);
            if (personDb is null)
                return NotFound();

            _context.Persons.Remove(personDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}