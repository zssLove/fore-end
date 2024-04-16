/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e078fc2f56ae92fce9752f7742983f29"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "242acf62de16f0a38ae9ff21501f0f13"
  },
  {
    "url": "assets/css/0.styles.2e89327f.css",
    "revision": "c23ace5065d8d59ef857dcd86aba4705"
  },
  {
    "url": "assets/img/1.8e900971.png",
    "revision": "8e9009718aca35b40dd7255489a7ab6d"
  },
  {
    "url": "assets/img/1.cc0159bd.png",
    "revision": "cc0159bdd3c354d51d1e1180777dfac7"
  },
  {
    "url": "assets/img/2.47ebd230.png",
    "revision": "47ebd23017956e67353ccf07cff30a44"
  },
  {
    "url": "assets/img/4.4650ffdb.png",
    "revision": "4650ffdbb8ef9807b7ecd3c67aad1e10"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2dd1c5d1.js",
    "revision": "22da8cb57636905a3e976f71db1a64fb"
  },
  {
    "url": "assets/js/11.8a13e25d.js",
    "revision": "33aff4f37fc655180e3104286562b904"
  },
  {
    "url": "assets/js/12.6a841008.js",
    "revision": "a7afdae61b9febc26f884a5e4b9a001a"
  },
  {
    "url": "assets/js/13.872a3575.js",
    "revision": "4ca9a27bb33ecba857192d18eaaf943e"
  },
  {
    "url": "assets/js/14.cda2a71c.js",
    "revision": "347a8fd6f73ed98a78b943a8d0d76464"
  },
  {
    "url": "assets/js/15.aabc73b0.js",
    "revision": "8ef813f454c9bb3be5642146728db9ce"
  },
  {
    "url": "assets/js/16.75c7aab1.js",
    "revision": "d64fdeed96e269b63b17d56d40883f94"
  },
  {
    "url": "assets/js/17.acc54276.js",
    "revision": "94194c64a8531497dfab669a2563fc90"
  },
  {
    "url": "assets/js/18.46fd83ff.js",
    "revision": "362b915405825976e064fcd503581607"
  },
  {
    "url": "assets/js/19.facd1ceb.js",
    "revision": "dc872d25e69e56b16ae2e02e830cc939"
  },
  {
    "url": "assets/js/2.92c7faf7.js",
    "revision": "c54ed632a949d82b588377d68e6fc30b"
  },
  {
    "url": "assets/js/20.29029d69.js",
    "revision": "bcd68d193d42afd69f37a0b7285647c8"
  },
  {
    "url": "assets/js/21.da09a14f.js",
    "revision": "5a4db5feaa3192d5e1db25deacee70d5"
  },
  {
    "url": "assets/js/22.f80cc904.js",
    "revision": "415d593ae86c6272c38d3befbc22f0fb"
  },
  {
    "url": "assets/js/23.09ac2fd1.js",
    "revision": "52d090a90d9a1d3e8bf91660524e3939"
  },
  {
    "url": "assets/js/3.706ac026.js",
    "revision": "6a16796624c2d7650d705deddd1b6f36"
  },
  {
    "url": "assets/js/4.ae680f51.js",
    "revision": "99d3f7395e201aa18616496f0be47b64"
  },
  {
    "url": "assets/js/5.3fc39cd4.js",
    "revision": "49b85e29cb1df4754af3a1420be2785a"
  },
  {
    "url": "assets/js/6.270df3de.js",
    "revision": "f664060f3be5694118e7cffab1cd2797"
  },
  {
    "url": "assets/js/7.c5a79b7a.js",
    "revision": "ecd7662946ef82b7fcd88c2bcbc89ba0"
  },
  {
    "url": "assets/js/8.9b4ac27a.js",
    "revision": "821deb2eb7279151808cad54ace7a494"
  },
  {
    "url": "assets/js/9.843c4e54.js",
    "revision": "8d91692690ded47574e282bd1dcb3fbb"
  },
  {
    "url": "assets/js/app.beefb468.js",
    "revision": "befad9e7ee262d635078eecd72b7ded2"
  },
  {
    "url": "blog.html",
    "revision": "1901ef69e2ada918aaf69c1c1fc1e92c"
  },
  {
    "url": "countup.html",
    "revision": "969151f91e2abdf839b8df1343fed03f"
  },
  {
    "url": "css/a-css.html",
    "revision": "84cf27f0d3f8f11c98aef425d6910e63"
  },
  {
    "url": "css/b-css.html",
    "revision": "af5af82e04b8a4c2c418fa0c84deb855"
  },
  {
    "url": "css/c-css.html",
    "revision": "fa981435c2fbde47392510a3c514b7c9"
  },
  {
    "url": "css/index.css",
    "revision": "1b8c18e01eb1fa22fdc4841f310a66a7"
  },
  {
    "url": "css/index.html",
    "revision": "dd7130ee3c689b54dab629f7e0244735"
  },
  {
    "url": "http/http.html",
    "revision": "b85b1d0207bb4215255e6518e63cbfbb"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "index.html",
    "revision": "3e6c66e195ad4f827362f5e958287425"
  },
  {
    "url": "interview/interview.html",
    "revision": "cea6f44eb6d5c5c7cd247e381a3a1ce9"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "9cb206656f7c1eedd07d60d9afbe0208"
  },
  {
    "url": "typescript/typescript.html",
    "revision": "ce6d347cd8bc9f5b1485a830cc9d27f2"
  },
  {
    "url": "vue2/vue2.html",
    "revision": "ee2949fd867b1d6602d425c11dc23d11"
  },
  {
    "url": "vue3/vue3.html",
    "revision": "b9633b9ceffb21e66452e7740d6d8b86"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
