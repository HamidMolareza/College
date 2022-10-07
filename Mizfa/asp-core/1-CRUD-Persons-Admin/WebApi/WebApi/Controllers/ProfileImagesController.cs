using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models.Configs;
using WebApi.Models.Db;
using WebApi.Models.ViewModels;
using WebApi.Utility;

namespace WebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileImagesController : ControllerBase {
        private readonly PersonContext _context;
        private readonly FilesValidationConfig _filesValidationConfig;
        private readonly IWebHostEnvironment _appEnvironment;

        public ProfileImagesController(PersonContext context, IConfiguration configuration,
            IWebHostEnvironment appEnvironment) {
            _context = context;
            _filesValidationConfig =
                configuration.GetSection(FilesValidationConfig.SectionName).Get<FilesValidationConfig>();
            _appEnvironment = appEnvironment;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfileImageOutputViewModel>>> GetProfileImages() {
            return (await _context.ProfileImages.ToListAsync())
                .Select(profileImage =>
                    ProfileImageOutputViewModel.ConvertToViewModel(profileImage,
                        UrlUtility.AddHttp(Request.Headers["Host"])))
                .ToList();
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<ProfileImageOutputViewModel>> GetProfileImage(Guid id) {
            var profileImageDb = await _context.ProfileImages.FindAsync(id);

            if (profileImageDb == null)
                return NotFound();

            return ProfileImageOutputViewModel.ConvertToViewModel(profileImageDb,
                UrlUtility.AddHttp(Request.Headers["Host"]));
        }

        [HttpPost("{personId:guid}")]
        public async Task<ActionResult> PostProfileImage(Guid personId, [Required] IFormFile file) {
            if (file.Length < _filesValidationConfig.MinimumSize || file.Length > _filesValidationConfig.MaximumSize) {
                ModelState.AddModelError("Size_Error",
                    $"The file size must between {_filesValidationConfig.MinimumSize} and {_filesValidationConfig.MaximumSize}");
                return BadRequest(ModelState);
            }

            //TODO: Check file type

            var person = await _context.Persons.FindAsync(personId);
            if (person is null) {
                ModelState.AddModelError(nameof(personId), "Can not find person.");
                return NotFound(ModelState);
            }

            var fileExtenstion = FileUtility.GetFileExtenstion(file.ContentType);
            var fileName = SecurityUtility.GetSecureGuid() + $".{fileExtenstion}";
            var resultPath = GetFilePath(fileName);

            await using var stream = System.IO.File.Create(resultPath);
            await file.CopyToAsync(stream);

            var profileImage = new ProfileImageDb {
                Id = Guid.NewGuid(),
                PersonId = person.Id,
                ImagePath = fileName
            };
            _context.ProfileImages.Add(profileImage);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProfileImage), new {id = profileImage.Id},
                ProfileImageOutputViewModel.ConvertToViewModel(profileImage,
                    UrlUtility.AddHttp(Request.Headers["Host"])));
        }

        private string GetFilePath(string fileName) =>
            Path.Combine(_appEnvironment.WebRootPath, fileName);

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteProfileImage(Guid id) {
            var profileImageDb = await _context.ProfileImages.FindAsync(id);
            if (profileImageDb == null)
                return NotFound();

            var filePath = GetFilePath(profileImageDb.ImagePath);
            System.IO.File.Delete(filePath);

            _context.ProfileImages.Remove(profileImageDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}