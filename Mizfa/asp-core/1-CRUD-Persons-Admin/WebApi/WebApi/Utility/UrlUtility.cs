namespace WebApi.Utility;

public static class UrlUtility {
    public static string AddHttp(string url) {
        url = url.ToLower();
        return url.StartsWith("http") ? url : "https://" + url;
    }
}