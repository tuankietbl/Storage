function FindProxyForURL(url, host) {
var block = {"ocsp.apple.com":1,"mesu.apple.com":1,"xp.apple.com":1,"gdmf.apple.com":1,"appldnld.apple.com":1};
if (block[host]) {return "PROXY 0000:0000:0000:0000:0000:0000:0000:0001";}
return "DIRECT";}
