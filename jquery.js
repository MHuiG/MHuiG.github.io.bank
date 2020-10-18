importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/"});var e=workbox,t=e.core,n=e.precaching,r=e.routing,s=e.strategies,i=e.expiration,o=e.cacheableResponse,c=e.backgroundSync,a=s.CacheFirst,u=s.NetworkFirst,l=s.NetworkOnly,m=s.StaleWhileRevalidate,g=i.ExpirationPlugin,p=o.CacheableResponsePlugin,d="-000033",h=100;self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(!e.includes(d))return caches.delete(e)}))}))}),t.setCacheNameDetails({prefix:"mhuig-blog",suffix:d}),t.skipWaiting(),t.clientsClaim(),n.cleanupOutdatedCaches(),n.precacheAndRoute([{url:"https://cdn.jsdelivr.net/npm/mhg@0.0.12/css/style.css",revision:null},{url:"https://cdn.jsdelivr.net/npm/mhg@0.0.12/js/jquery.js",revision:null},{url:"https://cdn.jsdelivr.net/npm/mhg@0.0.6/js/search.js",revision:null}]),r.registerRoute(/.*cdn\.jsdelivr\.net/,new a({cacheName:"static-immutable"+d,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new g({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r.registerRoute(/.*cdnjs\.cloudflare\.com/,new a({cacheName:"static-immutable"+d,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new g({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r.registerRoute(/.*m7\.music\.126\.net/,new a({cacheName:"static-immutable"+d,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new g({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r.registerRoute(/.*baidu\.com.*/,new l),r.registerRoute(/https:\/\/ip\..*/,new l),r.registerRoute(/.*mv\.mhuig\.top.*/,new l),r.registerRoute(/.*vmv\.mhuig\.top.*/,new l),r.registerRoute(/.*jq\.mhuig\.top.*/,new l),r.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new m),r.registerRoute(/.*\.(css|js)/,new m),r.registerRoute("/jquery.js",new m),r.setDefaultHandler(new u({networkTimeoutSeconds:3}));