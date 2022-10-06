namespace WebApi.Utility;

public static class DateTimeUtility {
    public static int? CalculateAge(DateTime? birthdayUtc, DateTime nowUtc) {
        if (birthdayUtc is null)
            return null;

        birthdayUtc = (DateTime) birthdayUtc;
        var age = nowUtc.Year - ((DateTime) birthdayUtc).Year;

        // Go back to the year in which the person was born in case of a leap year
        if ((DateTime) birthdayUtc > nowUtc.AddYears(-age))
            age--;

        return age;
    }
}