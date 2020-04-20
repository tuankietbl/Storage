function FindProxyForURL(url, host) {
  var blacklist = {"ocsp.apple.com":1,"appldnld.apple.com":1,"gdmf.apple.com":1};
  var index = host.indexOf(".");
  url = url.toLowerCase();
  host = host.toLowerCase();
  for (i = 0; i < 6; i++) {
    if (shExpMatch(url, "https://mesu.apple.com/assets/com_apple_MobileAsset_SoftwareUpdate/com_apple_MobileAsset_SoftwareUpdate.xml")) {return "PROXY 127.0.0.1:80";}
    if (blacklist[host]) {return "PROXY 127.0.0.1:80";}  
    if (index == -1) {break;} else {host = host.substring(index + 1);}
  }
  return "DIRECT";
}
