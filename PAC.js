function FindProxyForURL(url, host) {
  PROXY = "PROXY 127.0.0.1:80";
  blacklist = {"appldnld.apple.com":1,"appldnld.apple.com.akadns.net":1,"appldnld.g.aaplimg.com":1,"mesu-cdn.apple.com.akadns.net":1,"mesu-cdn.origin-apple.com.akadns.net":1,"mesu.g.aaplimg.com":1,"gdmf.apple.com":1,"gdmf.apple.com.akadns.net":1,"ocsp.apple.com":1};
  host = host.toLowerCase();
  index = host.indexOf(".");
    if (shExpMatch(url, "mesu.apple.com/assets/com_apple_MobileAsset_SoftwareUpdate/com_apple_MobileAsset_SoftwareUpdate.xml")) {return PROXY;}
  for (i = 0; i < 30; i++) {
    if (blacklist[host]) {return PROXY;}
    if (index == -1) {break;} else {host = host.substring(index + 1);}
  }
  return "DIRECT";
}
