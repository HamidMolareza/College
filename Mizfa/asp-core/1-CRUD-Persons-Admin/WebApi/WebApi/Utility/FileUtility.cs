namespace WebApi.Utility;

public static class FileUtility {
    public static string GetFileExtenstion(string contentType) =>
        contentType.ToLower() switch {
            "image/jpeg" => "jpg",
            "image/png" => "png",
            "image/svg+xml" => "svg",
            "image/webp" => "webp",
            _ => throw new ArgumentOutOfRangeException(nameof(contentType))
        };
}