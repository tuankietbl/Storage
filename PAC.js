function FindProxyForURL(url, host) {
  PROXY = "PROXY 127.0.0.1:80";
  blacklist = {"ocsp.apple.com":1,"appldnld.apple.com":1,"gdmf.apple.com":1};
  host = host.toLowerCase();
  index = host.indexOf(".");
    if (shExpMatch(url, "mesu.apple.com/assets/com_apple_MobileAsset_SoftwareUpdate/com_apple_MobileAsset_SoftwareUpdate.xml")) {return PROXY;}
  for (i = 0; i < 10; i++) {
    if (blacklist[host]) {return PROXY;}
    if (index == -1) {break;} else {host = host.substring(index + 1);}
  }
  return "DIRECT";
}
