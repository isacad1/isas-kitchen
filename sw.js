/* Isa's Kitchen offline helper.
   Keeps a copy of the app's own files so it opens without internet.
   Always tries the network first, so updates you upload to GitHub show up on the next open.
   Google sign-in, Google Drive and font requests are never stored here. */
const CACHE = "isas-kitchen-v2";
const FILES = ["./", "index.html", "config.js", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Google, Drive, fonts: straight to the network
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match("index.html")))
  );
});
