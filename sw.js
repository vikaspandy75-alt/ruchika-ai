CACHE_NAME = "ruchika-ai-v1";

const urlsToCache = [

"/",
"/index.html",
"/dashboard.html",
"/chat.html",
"/settings.html",
"/tools.html",

"/css/style.css",
"/css/animations.css",
"/css/robot.css",

"/js/app.js",
"/js/chat.js",
"/js/firebase.js",
"/js/auth.js",

"/assets/logo.png"

];

// Install Service Worker
self.addEventListener(
"install",
(event)=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then((cache)=>{

return cache.addAll(
urlsToCache
);

})

);

}
);

// Fetch Cache
self.addEventListener(
"fetch",
(event)=>{

event.respondWith(

caches.match(
event.request
)

.then((response)=>{

return response ||
fetch(event.request);

})

);

}
);

// Activate
self.addEventListener(
"activate",
