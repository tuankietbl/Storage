function FindProxyForURL(url, host) {
 PROXY = "PROXY 127.0.0.1:80";
 blacklist = {"appldnld.apple.com":1,"gdmf.apple.com":1,"ocsp.apple.com":1};
 host = host.toLowerCase();
 index = host.indexOf(".");
  for (i = 0; i < 10; i++) {
    if (shExpMatch(url, "mesu.apple.com/assets/com_apple_MobileAsset_SoftwareUpdate/*")) {return PROXY;}
    if (blacklist[host]) {return PROXY;}
    if (index == -1) {break;} else {host = host.substring(index + 1);}
  }
  return "DIRECT";
}
