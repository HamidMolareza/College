using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models.Db;
using WebApi.Models.ViewModels;

namespace WebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class EmailsController : ControllerBase {
        private readonly PersonContext _context;

        public EmailsController(PersonContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<List<EmailOutputViewModel>> GetEmails() {
            return (await _context.Emails.AsNoTracking().ToListAsync())
                .Select(EmailOutputViewModel.ConvertToViewModel)
                .ToList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EmailOutputViewModel>> GetEmail(Guid id) {
            var emailDb = await _context.Emails.FindAsync(id);

            if (emailDb == null)
                return NotFound();

            return EmailOutputViewModel.ConvertToViewModel(emailDb);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmail(Guid id, EmailInputViewModel email) {
            var emailDb = await _context.Emails.FindAsync(id);
            
            if (emailDb == null)
                return NotFound();
            if (await _context.Emails.AnyAsync(db => string.Equals(db.Email, email.Email, StringComparison.CurrentCultureIgnoreCase)))
                return Conflict();

            emailDb.Email = email.Email;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<EmailDb>> PostEmailDb(Guid personId, EmailInputViewModel email) {
            var person = await _context.Persons.FindAsync(personId);
            if (person is null)
                return NotFound();

            if (await _context.Emails.AnyAsync(db => string.Equals(db.Email, email.Email, StringComparison.CurrentCultureIgnoreCase)))
                return Conflict();

            var emailDb = new EmailDb {
                Id = new Guid(),
                Email = email.Email,
                PersonId = personId
            };
            _context.Emails.Add(emailDb);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmail), new {id = emailDb.Id},
                EmailOutputViewModel.ConvertToViewModel(emailDb));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmailDb(Guid id) {
            var emailDb = await _context.Emails.FindAsync(id);
            if (emailDb == null)
                return NotFound();

            _context.Emails.Remove(emailDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("SetPrimary")]
        public async Task<ActionResult> SetPrimaryEmail(Guid id) {
            var emailDb = await _context.Emails.FindAsync(id);
            
            if (emailDb == null)
                return NotFound();
            if (emailDb.IsPrimary)
                return NoContent();

            emailDb.IsPrimary = true;

            var oldPrimaryEmail = await _context.Emails.Where(email => email.IsPrimary).SingleOrDefaultAsync();
            if (oldPrimaryEmail is not null)
                oldPrimaryEmail.IsPrimary = false;

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}