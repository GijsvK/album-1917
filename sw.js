/* Service worker: maakt de app installeerbaar en houdt bekeken pagina's offline beschikbaar.
   Verhoog VERSION na grote wijzigingen om oude bestanden op te ruimen. */
const VERSION = "album-1917-v1";
const CORE = ["./", "index.html", "teksten.html", "texts.js", "js/page-flip.browser.js",
  "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isImage = url.origin === location.origin && /\/(pages|icons)\//.test(url.pathname);
  if (isImage) {
    // afbeeldingen veranderen zelden: eerst uit de cache
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res;
    })));
    return;
  }
  // pagina's, teksten, lettertypes: eerst het netwerk (zodat wijzigingen direct zichtbaar zijn), anders de cache
  e.respondWith(fetch(req).then(res => {
    if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true })));
});
