using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models.Db;

namespace WebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PhonesController : ControllerBase {
        private readonly PersonContext _context;

        public PhonesController(PersonContext context) {
            _context = context;
        }

        // GET: api/Phones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhoneDb>>> GetPhones() {
            return await _context.Phones.ToListAsync();
        }

        // GET: api/Phones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PhoneDb>> GetPhoneDb(Guid id) {
            var phoneDb = await _context.Phones.FindAsync(id);

            if (phoneDb == null) {
                return NotFound();
            }

            return phoneDb;
        }

        // PUT: api/Phones/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhoneDb(Guid id, PhoneDb phoneDb) {
            if (id != phoneDb.Id) {
                return BadRequest();
            }

            _context.Entry(phoneDb).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) {
                if (!PhoneDbExists(id)) {
                    return NotFound();
                }
                else {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Phones
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PhoneDb>> PostPhoneDb(PhoneDb phoneDb) {
            _context.Phones.Add(phoneDb);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhoneDb", new {id = phoneDb.Id}, phoneDb);
        }

        // DELETE: api/Phones/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoneDb(Guid id) {
            var phoneDb = await _context.Phones.FindAsync(id);
            if (phoneDb == null) {
                return NotFound();
            }

            _context.Phones.Remove(phoneDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PhoneDbExists(Guid id) {
            return _context.Phones.Any(e => e.Id == id);
        }
    }
}