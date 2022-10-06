namespace WebApi.Models.Db;

public class BaseDb {
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime Updated { get; set; } = DateTime.UtcNow;
}

//TODO: Auto update
//TODO: https://stackoverflow.com/questions/4648540/entity-framework-datetime-and-utc