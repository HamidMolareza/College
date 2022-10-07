using System.Security.Cryptography;

namespace WebApi.Utility;

public static class SecurityUtility {
    public static string GetSecureGuid() {
        using var provider = RandomNumberGenerator.Create();
        var bytes = new byte[16];
        provider.GetBytes(bytes);
        return new Guid(bytes).ToString("N");
    }
}