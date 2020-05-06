function FindProxyForURL(url, host) {
var domains = {"ocsp.apple.com":1,"mesu.apple.com":1,"xp.apple.com":1,"gdmf.apple.com":1,"appldnld.apple.com":1};
  do {
    if (domains.hasOwnProperty(host)) {return "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080";}
    lastPos = host.indexOf('.') + 1;
    host = host.slice(lastPos);}
  while (lastPos >= 1);
return "DIRECT";}
