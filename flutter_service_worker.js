'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d1da34055c58b2aea60ae8ef88e5ae4e",
"assets/AssetManifest.bin.json": "454ae11f8a7b86d6ee3c5a6c5bef5ff3",
"assets/AssetManifest.json": "ea7d94a99f6a49d6963aa0890ee82bd8",
"assets/assets/png/iphone.png": "9c159710b32ec2f94643769abfb427f6",
"assets/assets/png/iphone_wall_1.png": "a802a1a0c482ff766ea8dd22274fcba4",
"assets/assets/png/iphone_wall_2.png": "cad19d742b85aa83097ac36e2642b72e",
"assets/assets/svgs/cameraS.svg": "31b1e73f06b42e8cc6c7c018a6381dc3",
"assets/assets/svgs/empty.svg": "26f7174944a08f2955835df8bc5f031b",
"assets/assets/svgs/EmptyCart.svg": "72c3e953ee3b5efdf1f2bb05b5930a7b",
"assets/assets/svgs/icons/AppStore.svg": "6cc250a7dce4b87e394ab7298b02ff4a",
"assets/assets/svgs/icons/books.svg": "a9ba844b18a1099780c5fa8ffac9a444",
"assets/assets/svgs/icons/calculator.svg": "a4c4e5f06ec8c3a481c1ca42ffcbdbc5",
"assets/assets/svgs/icons/call.svg": "c0410f608df64b74babaf513877587c5",
"assets/assets/svgs/icons/camera.svg": "a3f2bc8cb6da0a2753e6b5601978ac85",
"assets/assets/svgs/icons/email.svg": "fe68e526d54f9e0465cfc153e59eb89b",
"assets/assets/svgs/icons/facetime.svg": "02eb61d4255f3be907552f828fd7733b",
"assets/assets/svgs/icons/files.svg": "c22c5f7b7be3fa3195fb7415c2df3b08",
"assets/assets/svgs/icons/github.svg": "6e849c0891b23c2feab79ae972a964c7",
"assets/assets/svgs/icons/leetcode.svg": "4d66c64121a80b424e8ac8b341d75d7f",
"assets/assets/svgs/icons/message.svg": "59623e59555a73b6517434cb51cfa1e7",
"assets/assets/svgs/icons/my-shortcuts.svg": "a4ee44f4691cefb7257930c67b9b7320",
"assets/assets/svgs/icons/notes.svg": "61eb8dd01015f46e75e9cba3cb23c80f",
"assets/assets/svgs/icons/reminders.svg": "2e0264f73e69f44f0d1a6c26642f2703",
"assets/assets/svgs/icons/settings.svg": "7089ccfe26611a2622c695f7d0df0ffc",
"assets/assets/svgs/icons/wallet.svg": "3b4c156f8ffcab21cc6404784886c9b3",
"assets/assets/svgs/iphone16.svg": "ca945e14554daf7261e4863da8bc821a",
"assets/assets/svgs/low-battery.svg": "40537512567c6cf998d53f4d7a7277f9",
"assets/assets/svgs/Me.svg": "b197bd1a0682ca01ea3f60c4db12918c",
"assets/assets/svgs/network.svg": "347a5cc70a00a9656a732eb7e5397190",
"assets/assets/svgs/skype.svg": "11148aa4c94e197696dc3a80c523ff46",
"assets/assets/svgs/watch.svg": "5723ae42d7f713b753d1e7ecea1c9a6a",
"assets/assets/svgs/wifi.svg": "44d01649f0b41e3f3ca27e03b36e7634",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "2d3016c4cd5fcea76ab5ac214bc0cd17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5e7a613246f991c629c03c38ac2cdbd3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0324f6fb30053f74ed5ab26c7710ea99",
"/": "0324f6fb30053f74ed5ab26c7710ea99",
"main.dart.js": "c1962eae17e4e05fe3060e2243a6a633",
"manifest.json": "244514c79c782e5241a6f2851dd8dc03",
"version.json": "d6e1c8e9da5197be5984be4709f736d7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
