const e=["W6NcVmoVW6/dH8kJ","bwpdOSoheSoSAuTWWQKZuhHTW4GD","bhldPmoAcmo7ivbpWQSZuhW=","dXuuW71TWQrrW6dcLxDmW4fh","W4pdUqdcJ8oaftzTCgRcI390","yxhcPsrWWP3cM8oJwSokWOldNCofcIC2wXCjySoCqWSBwsLqnMillY/dNSoicSo5W73dL37dIdvlBSkaFw3dP8k2WQ1zamkuW6/cU8o5ASoeWRqLWQtdQ1Djv8kDvSoeW5q=","DmkMW4ddImoSW7ueW7TGhGiUp8o1","WONcSSkqWOm=","fqqhW6rTW6OBWR3cPhXxWPTiWRuyW5FcHeOIW78IcSozrhfBxZTGW6BdHmonWOWOW7S7W4/cLsbnzmo8bSk2W7DTaCo6W63dSSkvrCkOWQbj","WRr4BWnWWQe5u8omWRio","W7z8WR8rCLGCfCoXWQ/cNgXUCCkgDG==","xwrLW4VdISoyrq==","WQuor1TOWP07W4PBgSoJcSkZ","W5ldSXxcLq==","W7DTWRKmAe9udSooWQ3cNgXQ","WRuTyKJdSfZdQSooWQlcOsBcJ8oTywZdLJi=","W6mkvXH3WOGRW5W=","WP1RW6SN","WQOlWRiGWPlcQIS4qG==","W67cKWhcMG==","W70wW7DouCkuq3JcRCkb","WRiGC2i=","W5rdr8kXjNBcHCkZWOtdOCkuowJdGmkfdG==","WOZcKmovWOlcICkGB1ZcGCo5WQWTWQC=","W4NcPJtdVstcKCkOdxFdVG==","FSo1reP/WR1YWOtdLSomkcLd","bxldT8oWgSoSleDtWQuRqv1QW5azWPNdV2u=","f3VdRW==","vw3cGmk4j8kFuqHqW4veFwO=","c8kmW6OKW5O9W74E"];!function(e,o){!function(o){for(;--o;)e.push(e.shift())}(++o)}(e,375);const o=function(n,c){let t=e[n-=0];if(o.bSZdgJ===undefined){const e=function(e,o){let n,c,t=[],W=0,r="",d="";for(let i=0,s=(e=function(e){const o=String(e).replace(/=+$/,"");let n="";for(let c,t,W=0,r=0;t=o.charAt(r++);~t&&(c=W%4?64*c+t:t,W++%4)?n+=String.fromCharCode(255&c>>(-2*W&6)):0)t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);return n}(e)).length;i<s;i++)d+="%"+("00"+e.charCodeAt(i).toString(16)).slice(-2);for(e=decodeURIComponent(d),c=0;c<256;c++)t[c]=c;for(c=0;c<256;c++)W=(W+t[c]+o.charCodeAt(c%o.length))%256,n=t[c],t[c]=t[W],t[W]=n;c=0,W=0;for(let i=0;i<e.length;i++)c=(c+1)%256,W=(W+t[c])%256,n=t[c],t[c]=t[W],t[W]=n,r+=String.fromCharCode(e.charCodeAt(i)^t[(t[c]+t[W])%256]);return r};o.fwxoca=e,o.JNGFKY={},o.bSZdgJ=!0}const W=o.JNGFKY[n];return W===undefined?(o.flQVpz===undefined&&(o.flQVpz=!0),t=o.fwxoca(t,c),o.JNGFKY[n]=t):t=W,t},n=o;importScripts(n("0x14","]X6E")),workbox.setConfig({modulePathPrefix:n("0x17","8IG#")});const{core:c,precaching:t,routing:W,strategies:r,expiration:d,cacheableResponse:i,backgroundSync:s}=workbox,{CacheFirst:u,NetworkFirst:l,NetworkOnly:a,StaleWhileRevalidate:x}=r,{ExpirationPlugin:f}=d,{CacheableResponsePlugin:S}=i,m=n("0x1a","lZUb");self.addEventListener(n("0xe","*!NI"),e=>{const o=n;e[o("0x3","QnDe")](caches.keys()[o("0x6","q)u%")](e=>{const n=o;return Promise[n("0xc","Xi!d")](e.map(e=>{const o=n;if(!e[o("0x1","tvfO")](m))return caches[o("0xf","(N^y")](e)}))}))}),c[n("0xb","Xi!d")]({prefix:n("0x9","X!q)"),suffix:m}),c[n("0x18","l2OR")](),c.clientsClaim(),t.cleanupOutdatedCaches(),t.precacheAndRoute([{url:n("0x15","D*nv"),revision:null},{url:n("0x1b","tvfO"),revision:null},{url:"https://cdn.jsdelivr.net/npm/mhg@0.0.6/js/search.js",revision:null}]),W[n("0x12","8IG#")](/.*cdn\.jsdelivr\.net/,new u({cacheName:n("0x7","WmVb")+m,fetchOptions:{mode:n("0x1c","2YkF"),credentials:"omit"},plugins:[new f({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),W.registerRoute(/.*cdnjs\.cloudflare\.com/,new u({cacheName:n("0x10","Xi!d")+m,fetchOptions:{mode:n("0x16","AsGG"),credentials:n("0x2","v8&2")},plugins:[new f({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),W[n("0x1d","esoI")](/.*m7\.music\.126\.net/,new u({cacheName:n("0x19","esoI")+m,fetchOptions:{mode:n("0x4","9!D&"),credentials:n("0x2","v8&2")},plugins:[new f({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),W[n("0xa","w4rF")](/.*baidu\.com.*/,new a),W[n("0x8","vOnU")](/https:\/\/ip\..*/,new a),W[n("0x13","2YkF")](/.*jq\.mhuig\.top.*/,new a),W[n("0x13","2YkF")](/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new x),W[n("0x11","Xi!d")](/.*\.(css|js)/,new x),W[n("0xd","tw5@")](n("0x5","kSaH"),new x),W[n("0x0","q)u%")](new l({networkTimeoutSeconds:3}));