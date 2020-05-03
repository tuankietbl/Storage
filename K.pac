function FindProxyForURL(url, host) {
if (shExpMatch(host, "ocsp.apple.com")
|| shExpMatch(host, "mesu.apple.com")
|| shExpMatch(host, "xp.apple.com")
|| shExpMatch(host, "gdmf.apple.com")
|| shExpMatch(host, "appldnld.apple.com"))
{return "PROXY 127.0.0.1:80";}
return "DIRECT";}
