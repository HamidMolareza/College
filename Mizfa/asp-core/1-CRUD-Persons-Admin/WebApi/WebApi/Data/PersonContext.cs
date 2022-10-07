using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using WebApi.Models.Db;

namespace WebApi.Data;

public class PersonContext : DbContext {
    public PersonContext(DbContextOptions options) : base(options) { }

    public DbSet<PersonDb> Persons { get; set; }
    public DbSet<EmailDb> Emails { get; set; }
    public DbSet<PhoneDb> Phones { get; set; }
    public DbSet<ProfileImageDb> ProfileImages { get; set; }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new()) {
        UpdateEntries(ChangeTracker);
        return base.SaveChangesAsync(cancellationToken);
    }

    public override int SaveChanges() {
        UpdateEntries(ChangeTracker);
        return base.SaveChanges();
    }

    //TODO: Test
    private static void UpdateEntries(ChangeTracker changeTracker) {
        var now = DateTime.UtcNow;

        foreach (var changedEntity in changeTracker.Entries()) {
            if (changedEntity.Entity is BaseDb baseObj) {
                switch (changedEntity.State) {
                    case EntityState.Added:
                        baseObj.Created = now;
                        baseObj.Updated = now;
                        break;
                    case EntityState.Modified:
                        baseObj.Updated = now;
                        break;
                }
            }

            foreach (var propertyInfo in changedEntity.Entity.GetType().GetProperties()) {
                if (propertyInfo.PropertyType == typeof(DateTime)) {
                    ConvertToUtc(changedEntity.Entity, propertyInfo);
                }
                else if (propertyInfo.PropertyType == typeof(DateTime?) &&
                         ((DateTime?) propertyInfo.GetValue(changedEntity.Entity)).HasValue) {
                    ConvertToUtc(changedEntity.Entity, propertyInfo);
                }
            }
        }
    }

    private static void ConvertToUtc(object entity, PropertyInfo propertyInfo) {
        propertyInfo.SetValue(entity,
            DateTime.SpecifyKind((DateTime) propertyInfo.GetValue(entity)!, DateTimeKind.Utc));
    }
}