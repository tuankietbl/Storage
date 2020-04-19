var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:80";
var blacklist = {"ocsp.apple.com":1,"appldnld.apple.com":1,"gdmf.apple.com":1};
function FindProxyForURL(url, host) {
  url = url.toLowerCase();
  host = host.toLowerCase();
  for (i = 0; i < 30; i++) {
    if (shExpMatch(url, "mesu.apple.com/assets/com_apple_MobileAssets_SoftwareUpdate/*")) {return PROXY;}
    if (blacklist[host]) {return PROXY;}
    var index = host.indexOf(".");
    if (index == -1) {break;} else {host = host.substring(index + 1);}
  }
  return DIRECT;
}
