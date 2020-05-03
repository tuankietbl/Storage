function FindProxyForURL(url, host) {
if (shExpMatch(url, "mesu.apple.com/assets/com_apple_MobileAsset_SoftwareUpdate/*")
|| shExpMatch(host, "appldnld.apple.com")
|| shExpMatch(host, "gdmf.apple.com")
|| shExpMatch(host, "ocsp.apple.com")
|| shExpMatch(host, "xp.apple.com"))
{return "PROXY 127.0.0.1:80";}
return "DIRECT";}
