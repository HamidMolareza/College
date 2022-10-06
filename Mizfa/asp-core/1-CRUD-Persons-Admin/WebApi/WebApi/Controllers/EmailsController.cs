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
    public class EmailsController : ControllerBase {
        private readonly PersonContext _context;

        public EmailsController(PersonContext context) {
            _context = context;
        }

        // GET: api/Emails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmailDb>>> GetEmails() {
            return await _context.Emails.ToListAsync();
        }

        // GET: api/Emails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmailDb>> GetEmailDb(Guid id) {
            var emailDb = await _context.Emails.FindAsync(id);

            if (emailDb == null) {
                return NotFound();
            }

            return emailDb;
        }

        // PUT: api/Emails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmailDb(Guid id, EmailDb emailDb) {
            if (id != emailDb.Id) {
                return BadRequest();
            }

            _context.Entry(emailDb).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) {
                if (!EmailDbExists(id)) {
                    return NotFound();
                }
                else {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Emails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmailDb>> PostEmailDb(EmailDb emailDb) {
            _context.Emails.Add(emailDb);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmailDb", new {id = emailDb.Id}, emailDb);
        }

        // DELETE: api/Emails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmailDb(Guid id) {
            var emailDb = await _context.Emails.FindAsync(id);
            if (emailDb == null) {
                return NotFound();
            }

            _context.Emails.Remove(emailDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmailDbExists(Guid id) {
            return _context.Emails.Any(e => e.Id == id);
        }
    }
}