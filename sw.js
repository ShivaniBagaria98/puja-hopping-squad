// Puja Hopping Squad: lets phones install the app. Always loads fresh from the network (no caching),
// so updates show up straight away.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
