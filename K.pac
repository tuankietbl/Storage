function FindProxyForURL(url, host) {
var x = {"ocsp.apple.com":1,"xp.apple.com":1,"gdmf.apple.com":1,"appldnld.apple.com":1};
var B = "PROXY 127.0.0.1:80"
if (shExpMatch(url, "mesu.apple.com/assets/com_apple_MobileAsset_SoftwareUpdate/com_apple_MobileAsset_SoftwareUpdate.xml"))  {return B;}
if (x[host]) {return B;}
return "DIRECT";}
