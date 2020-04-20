function FindProxyForURL(url, host) {
  var PROXY = "PROXY 127.0.0.1:80";
  var blacklist = {"ocsp.apple.com":1,"appldnld.apple.com":1,"gdmf.apple.com":1};
    if (shExpMatch(url, "mesu.apple.com/assets/com_apple_MobileAsset_SoftwareUpdate/com_apple_MobileAsset_SoftwareUpdate.xml")) {return PROXY;}
  host = host.toLowerCase();
  for (i = 0; i < 30; i++) {
    if (blacklist[host]) {return PROXY;}
    var index = host.indexOf(".");
    if (index == -1) {break;} else {host = host.substring(index + 1);}
  }
  return "DIRECT";
}
