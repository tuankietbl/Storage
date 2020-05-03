function FindProxyForURL(url, host) {
if (shExpMatch(host, "(ocsp.apple.com|mesu.apple.com|xp.apple.com|gdmf.apple.com|appldnld.apple.com)"))
{return "PROXY 127.0.0.1:80";}
return "DIRECT";}
