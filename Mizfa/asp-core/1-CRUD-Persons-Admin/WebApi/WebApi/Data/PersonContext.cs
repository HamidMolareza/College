using Microsoft.EntityFrameworkCore;
using WebApi.Models.Db;

namespace WebApi.Data;

public class PersonContext : DbContext {
    public PersonContext(DbContextOptions options) : base(options) { }

    public DbSet<PersonDb> Persons { get; set; }
    public DbSet<EmailDb> Emails { get; set; }
    public DbSet<PhoneDb> Phones { get; set; }
    public DbSet<ProfileImageDb> ProfileImages { get; set; }
}