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
    public class ProfileImagesController : ControllerBase {
        private readonly PersonContext _context;

        public ProfileImagesController(PersonContext context) {
            _context = context;
        }

        // GET: api/ProfileImages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfileImageDb>>> GetProfileImages() {
            return await _context.ProfileImages.ToListAsync();
        }

        // GET: api/ProfileImages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProfileImageDb>> GetProfileImageDb(Guid id) {
            var profileImageDb = await _context.ProfileImages.FindAsync(id);

            if (profileImageDb == null) {
                return NotFound();
            }

            return profileImageDb;
        }

        // PUT: api/ProfileImages/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProfileImageDb(Guid id, ProfileImageDb profileImageDb) {
            if (id != profileImageDb.Id) {
                return BadRequest();
            }

            _context.Entry(profileImageDb).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) {
                if (!ProfileImageDbExists(id)) {
                    return NotFound();
                }
                else {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProfileImages
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProfileImageDb>> PostProfileImageDb(ProfileImageDb profileImageDb) {
            _context.ProfileImages.Add(profileImageDb);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfileImageDb", new {id = profileImageDb.Id}, profileImageDb);
        }

        // DELETE: api/ProfileImages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfileImageDb(Guid id) {
            var profileImageDb = await _context.ProfileImages.FindAsync(id);
            if (profileImageDb == null) {
                return NotFound();
            }

            _context.ProfileImages.Remove(profileImageDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfileImageDbExists(Guid id) {
            return _context.ProfileImages.Any(e => e.Id == id);
        }
    }
}