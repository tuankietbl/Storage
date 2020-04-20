function FindProxyForURL(url, host) {
  var DIRECT = "DIRECT";
  var PROXY = "PROXY 127.0.0.1:80";
  var blacklist = {"appldnld.apple.com":1,"gdmf.apple.com":1,"ocsp.apple.com":1};
  var index = host.indexOf(".");
  host = host.toLowerCase();
  for (i = 0; i < 10; i++) {
    if (blacklist[host])
      {return PROXY;}
    if (index == -1)
      {break;} else {host = host.substring(index + 1);}
  }
  return DIRECT;
}
