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
    public class PersonController : ControllerBase {
        private readonly PersonContext _context;

        public PersonController(PersonContext context) {
            _context = context;
        }

        // GET: api/Person
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonDb>>> GetPersons() {
            return await _context.Persons.ToListAsync();
        }

        // GET: api/Person/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonDb>> GetPersonDb(Guid id) {
            var personDb = await _context.Persons.FindAsync(id);

            if (personDb == null) {
                return NotFound();
            }

            return personDb;
        }

        // PUT: api/Person/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonDb(Guid id, PersonDb personDb) {
            if (id != personDb.Id) {
                return BadRequest();
            }

            _context.Entry(personDb).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) {
                if (!PersonDbExists(id)) {
                    return NotFound();
                }
                else {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Person
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PersonDb>> PostPersonDb(PersonDb personDb) {
            _context.Persons.Add(personDb);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersonDb", new {id = personDb.Id}, personDb);
        }

        // DELETE: api/Person/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersonDb(Guid id) {
            var personDb = await _context.Persons.FindAsync(id);
            if (personDb == null) {
                return NotFound();
            }

            _context.Persons.Remove(personDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonDbExists(Guid id) {
            return _context.Persons.Any(e => e.Id == id);
        }
    }
}