importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/"});var _workbox=workbox,core=_workbox.core,precaching=_workbox.precaching,routing=_workbox.routing,strategies=_workbox.strategies,expiration=_workbox.expiration,cacheableResponse=_workbox.cacheableResponse,backgroundSync=_workbox.backgroundSync,CacheFirst=strategies.CacheFirst,NetworkFirst=strategies.NetworkFirst,NetworkOnly=strategies.NetworkOnly,StaleWhileRevalidate=strategies.StaleWhileRevalidate,ExpirationPlugin=expiration.ExpirationPlugin,CacheableResponsePlugin=cacheableResponse.CacheableResponsePlugin,cacheSuffixVersion="-000023",maxEntries=100;self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(!e.includes(cacheSuffixVersion))return caches.delete(e)}))}))}),core.setCacheNameDetails({prefix:"mhuig-blog",suffix:cacheSuffixVersion}),core.skipWaiting(),core.clientsClaim(),precaching.cleanupOutdatedCaches(),precaching.precacheAndRoute([{url:"/css/style.css",revision:null},{url:"/js/app.js",revision:null},{url:"https://cdn.jsdelivr.net/npm/mhg@0.0.6/js/search.js",revision:null}]),routing.registerRoute(/.*cdn\.jsdelivr\.net/,new CacheFirst({cacheName:"static-immutable"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/.*cdnjs\.cloudflare\.com/,new CacheFirst({cacheName:"static-immutable"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/.*m7\.music\.126\.net/,new CacheFirst({cacheName:"static-immutable"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/.*baidu\.com.*/,new NetworkOnly),routing.registerRoute(/https:\/\/rmt\.dogedoge\.com.*/,new NetworkOnly),routing.registerRoute(/https:\/\/ip\..*/,new NetworkOnly),routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new StaleWhileRevalidate),routing.registerRoute(/.*\.(css|js)/,new StaleWhileRevalidate),routing.registerRoute("/s.js",new StaleWhileRevalidate),routing.setDefaultHandler(new NetworkFirst({networkTimeoutSeconds:3}));