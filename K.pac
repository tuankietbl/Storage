function FindProxyForURL(url, host) {
var block = {"ocsp.apple.com":1,"xp.apple.com":1,"gdmf.apple.com":1,"appldnld.apple.com":1};
if (shExpMatch(url, "mesu.apple.com/assets/com_apple_MobileAsset_SoftwareUpdate/com_apple_MobileAsset_SoftwareUpdate.xml")
|| (block[host])) {return "PROXY 127.0.0.1:80";}
return "DIRECT";}
