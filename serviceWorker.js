const staticDev = "kural_memory_game"
const service_worker_version = "v2.023"
const assets = [
  "index.html",
  "style.css",
  "thirukkural.txt",
  "script.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDev).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
