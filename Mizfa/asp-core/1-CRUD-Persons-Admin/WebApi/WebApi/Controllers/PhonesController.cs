using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models.Db;
using WebApi.Models.ViewModels;

namespace WebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PhonesController : ControllerBase {
        private readonly PersonContext _context;

        public PhonesController(PersonContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhoneOutputViewModel>>> GetPhones() =>
            (await _context.Phones.ToListAsync())
            .Select(PhoneOutputViewModel.ConvertToViewModel)
            .ToList();

        [HttpGet("{id}")]
        public async Task<ActionResult<PhoneOutputViewModel>> GetPhoneDb(Guid id) {
            var phoneDb = await _context.Phones.FindAsync(id);

            if (phoneDb == null)
                return NotFound();

            return PhoneOutputViewModel.ConvertToViewModel(phoneDb);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhone(Guid id, phoneInputViewModel phone) {
            var phoneDb = await _context.Phones.FindAsync(id);

            if (phoneDb == null)
                return NotFound();
            if (await _context.Phones.AnyAsync(db => db.PhoneNumber == phone.PhoneNumber))
                return Conflict();

            phoneDb.PhoneNumber = phone.PhoneNumber;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<PhoneOutputViewModel>> PostPhoneDb(Guid personId, phoneInputViewModel phone) {
            var person = await _context.Persons.FindAsync(personId);
            if (person is null)
                return NotFound();

            if (await _context.Phones.AnyAsync(db => db.PhoneNumber == phone.PhoneNumber))
                return Conflict();

            var phoneDb = new PhoneDb {
                Id = new Guid(),
                PhoneNumber = phone.PhoneNumber,
                PersonId = personId
            };
            _context.Phones.Add(phoneDb);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPhoneDb), new {id = phoneDb.Id},
                PhoneOutputViewModel.ConvertToViewModel(phoneDb));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoneDb(Guid id) {
            var phoneDb = await _context.Phones.FindAsync(id);
            if (phoneDb == null)
                return NotFound();

            if (phoneDb.IsPrimary) {
                ModelState.AddModelError("can_not_delete_primary_phone",
                    "Can not delete primary phone. To delete this phone, please select another phone as the primary.");
                return BadRequest(ModelState);
            }

            _context.Phones.Remove(phoneDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("SetPrimary")]
        public async Task<ActionResult> SetPrimary(Guid id) {
            var phoneDb = await _context.Phones.FindAsync(id);

            if (phoneDb == null)
                return NotFound();
            if (phoneDb.IsPrimary)
                return NoContent();

            phoneDb.IsPrimary = true;

            var oldPrimaryPhone = await _context.Phones.Where(phone => phone.IsPrimary).SingleOrDefaultAsync();
            if (oldPrimaryPhone is not null)
                oldPrimaryPhone.IsPrimary = false;

            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}