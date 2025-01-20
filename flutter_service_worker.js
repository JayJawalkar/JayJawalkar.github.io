'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "7897595e6d70c18c5379eda798f2932f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a5bb1f2247e0e2358df24cadefb930b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "070ba34145461e0e5637664f28443024",
".git/logs/refs/heads/main": "74e26e9134194ecbe791128ce1677ac6",
".git/logs/refs/remotes/origin/main": "f70fab6b5fe8df3a738df19d2654c555",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/d66dc622783ee47b5946040fa7aa35b11bdcd5": "aed4d37a1b7f17b78f0a5cba80982d84",
".git/objects/1c/374c3d79e97a361188427b8594ed03522a7e64": "1d258ed585c50597da027d1ea9017791",
".git/objects/1d/6f4ffbe4a629cc081eeb2717f93b248932145b": "ec70e08c43cf0fb90740f261e4440927",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/66d0e4b7128278a611d88d5e4397d160972da6": "c9df5253c14c6a0a8a387e88b686608b",
".git/objects/23/0752bd69bc0039c9f173f6ca64e40b3f32fdc9": "755f2c3941c4fcb15d693ef2e7bca586",
".git/objects/23/4d64783e16e46271d78090bb6aa7cfb7b2da62": "ad42581caa0601430e97101f801b149a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/c1388faabbc36b8b341ae3f6439bd0e856750f": "5c277b22169023d57d0ce5f1d970ef8c",
".git/objects/32/623e038010100311216c945cc1e6f0d5e5ceef": "ea9c9ec99ae0ffd3ef4ab7e7ee594157",
".git/objects/32/fc76d75fb9025d9a5ee2ddc11ee80f53c3d5cb": "84b100d1b43a35d6c476b7c2c5f54ad0",
".git/objects/36/2d0cbdb2348aba87dcd89c5652ff3d9aac6eb0": "6f9e329a670b6c0664a531dd7461c559",
".git/objects/39/23ee827536cbef7c8a9ecb5ea21a1991807b33": "95105741219b42929d3c6799c724b75b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/b17a0c9bf5a80ed7553c7a5ed7b60bb6cd253a": "fc3e04d07076a0d229db593281964558",
".git/objects/54/c9d9755b8ae364a68b19325f50fdd631ffe00d": "f2b3d4f40c151abe7f32e32484c24977",
".git/objects/56/2b6367394cf2b80681799726b4277531a42323": "fddaf4272568b7582e800428258d7b6b",
".git/objects/5f/84940f76d9ca48835e36acde420190ddd9c456": "b2afb10f94a0405c5def90868f4fd6ea",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/9933fae6d7d247d0e7820098dc210e3b47d57b": "e1ef1b41433dc757e37c2aad50839cc7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/1f703b9d3692a2e1a93858efd95f0938169b26": "c88b0962dc5ae112231a646ad293e423",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/fa9f505f5a7e32cd9021099ea7b8b82d92b00c": "edaaf9b00221c2f2ad70a3aa8635c7d8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/9bfa6008cc53a389374be1ef3d6872bc12945c": "11750782e3339216b45adc76d88a3b2f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b74b75abf18a2d4213f3f3bb043eedb2e6145b": "ffc008a120b9eff6239d3f61a746d041",
".git/objects/8b/9073e67aab49b248432081b190bca0d871646a": "42d3432687524d9ad17278d8be0dba26",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/2ed728786eae26f55090b2c360d42a5cff51ef": "8d8a0e3ea0005c05261a848770afe512",
".git/objects/95/89551dcb3f50bc4dcf45c1585f3bd0fb157d43": "f3cfefccb7c7ecbf81a8ea4f273ad25b",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/a008f1059e48b82320d5eea005bf4c46702b69": "c83c5fc1ce4ae6853c0f35885ad58390",
".git/objects/99/9aeb1bff464da895713ab386061fd96ae773b8": "32354fdb038bd7c91696e9b5dba38657",
".git/objects/a2/f40b0ab18816a3b5b7a30afa33f098b7eda7a5": "f8a89554440a299e9fdfc6e5705997b8",
".git/objects/a8/0a21c3022634386a1d82bcd2319394dd2f3ffe": "a3889a2143d39a11b1be2bf5ef52558a",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/ab/8b866b43021f6926c77025cdb5d99131679394": "82557c140dfb364611dd93dd72468403",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/4a0e63f9b716b1cbc1f6d827c87873ccf2551b": "3010bce70e54a4dda72cb55eb5fd2b9a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a00f21442d083e47cfc9e0944c2ebfb47d2e59": "726ab16fdbe686944a7ab92454446f91",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/5cbab3b02658592807a5dbc0593b65ff01ce57": "991fac1b3fc5bced85757057dc473ee4",
".git/objects/bc/b173fcf7a08f0adc2a0b715df6f6dd3862675a": "001f9903595ec076c38218e11c8fc414",
".git/objects/bc/fdeb246097b97e40d4551c999f73d35b1453b4": "dc5d18c5f221d75f21b85358152ed70d",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/33e0306fd576d55b2b648747c3805f54848abd": "2115ade34dce11e814394d27f51c0c71",
".git/objects/cc/438533f1676817917af55cab892cc49e4a21f8": "196e158243de55dec99871d352869053",
".git/objects/d3/a72b87ce4a1efade709d7d9bb1d77e1b695fa1": "09a4b83cd1be503a7271f09ffb89ef46",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/671d1102c2495369cf9166a68dd4a26d6bacfd": "e30375c086ec1c9d4273d0c56901b9fc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/8ab2db44c2737530031b5c97028e3bd7b1d897": "c9ddd1529d8f9e62c8a4fd37df67c1cc",
".git/objects/da/cf723d04917c4001fc0873b78f375aca93efe7": "e469a6184c0b4258db094e3e00d52413",
".git/objects/e6/d0203d56c872c1bb0b67fdaa5e339d81cc5f4b": "477373081aa1f6389eb2150f23900332",
".git/objects/ea/84f64befef41833672febae2bc0ccf518fc137": "1b20808e59c195c083e36675606f275d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/6e272dfe46823c868b327788f28c4b244537d7": "a64a3d2f7e2f02b9ce9593a9d68f2b54",
".git/objects/fa/98d415d78cd03b24a68a4d2dab2b571fa16467": "31a72762a7e456f469c6135ab9f8181c",
".git/objects/fb/4bec9aa9b4249d4d8047b4c8b7a91f28f8c638": "458ace60fa9b88c58eefdd1779fe7543",
".git/objects/fd/788cd81b9b2a32da767ff627b8b79f07acc7e6": "794e20605d9a7c207e7ab0263b62d714",
".git/objects/fe/e60d71d32cabdcf80b79d103e2c92e8ad9c072": "450039ee137069d996c9468e32f37007",
".git/refs/heads/main": "c7000bbea0e8b680c980eeaacfbeeb3c",
".git/refs/remotes/origin/main": "c7000bbea0e8b680c980eeaacfbeeb3c",
"assets/AssetManifest.bin": "d1da34055c58b2aea60ae8ef88e5ae4e",
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
"assets/png/iphone.png": "9c159710b32ec2f94643769abfb427f6",
"assets/png/iphone_wall_1.png": "a802a1a0c482ff766ea8dd22274fcba4",
"assets/png/iphone_wall_2.png": "cad19d742b85aa83097ac36e2642b72e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/svgs/cameraS.svg": "31b1e73f06b42e8cc6c7c018a6381dc3",
"assets/svgs/empty.svg": "26f7174944a08f2955835df8bc5f031b",
"assets/svgs/EmptyCart.svg": "72c3e953ee3b5efdf1f2bb05b5930a7b",
"assets/svgs/icons/AppStore.svg": "6cc250a7dce4b87e394ab7298b02ff4a",
"assets/svgs/icons/books.svg": "a9ba844b18a1099780c5fa8ffac9a444",
"assets/svgs/icons/calculator.svg": "a4c4e5f06ec8c3a481c1ca42ffcbdbc5",
"assets/svgs/icons/call.svg": "c0410f608df64b74babaf513877587c5",
"assets/svgs/icons/camera.svg": "a3f2bc8cb6da0a2753e6b5601978ac85",
"assets/svgs/icons/email.svg": "fe68e526d54f9e0465cfc153e59eb89b",
"assets/svgs/icons/facetime.svg": "02eb61d4255f3be907552f828fd7733b",
"assets/svgs/icons/files.svg": "c22c5f7b7be3fa3195fb7415c2df3b08",
"assets/svgs/icons/github.svg": "6e849c0891b23c2feab79ae972a964c7",
"assets/svgs/icons/leetcode.svg": "4d66c64121a80b424e8ac8b341d75d7f",
"assets/svgs/icons/message.svg": "59623e59555a73b6517434cb51cfa1e7",
"assets/svgs/icons/my-shortcuts.svg": "a4ee44f4691cefb7257930c67b9b7320",
"assets/svgs/icons/notes.svg": "61eb8dd01015f46e75e9cba3cb23c80f",
"assets/svgs/icons/reminders.svg": "2e0264f73e69f44f0d1a6c26642f2703",
"assets/svgs/icons/settings.svg": "7089ccfe26611a2622c695f7d0df0ffc",
"assets/svgs/icons/wallet.svg": "3b4c156f8ffcab21cc6404784886c9b3",
"assets/svgs/iphone16.svg": "ca945e14554daf7261e4863da8bc821a",
"assets/svgs/low-battery.svg": "40537512567c6cf998d53f4d7a7277f9",
"assets/svgs/Me.svg": "b197bd1a0682ca01ea3f60c4db12918c",
"assets/svgs/network.svg": "347a5cc70a00a9656a732eb7e5397190",
"assets/svgs/skype.svg": "11148aa4c94e197696dc3a80c523ff46",
"assets/svgs/watch.svg": "5723ae42d7f713b753d1e7ecea1c9a6a",
"assets/svgs/wifi.svg": "44d01649f0b41e3f3ca27e03b36e7634",
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
"flutter_bootstrap.js": "5bc360114498bd6baa7dac5e8d688060",
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
