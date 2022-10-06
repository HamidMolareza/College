namespace WebApi.Utility;

public static class DateTimeUtility {
    public static int CalculateAge(DateTime birthdayUtc, DateTime nowUtc) {
        var age = nowUtc.Year - birthdayUtc.Year;

        // Go back to the year in which the person was born in case of a leap year
        if (birthdayUtc.Date > nowUtc.AddYears(-age))
            age--;

        return age;
    }
}