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
    "revision": "2dcc04ba4be6e0a88103a20e00ef7fc2"
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
    "url": "assets/js/10.71da356d.js",
    "revision": "ea0bbfd6d4f7cd8b620969d5c334d7ae"
  },
  {
    "url": "assets/js/11.fbbdaa67.js",
    "revision": "794a7cce9f7e2051f4ac2440ff75de2d"
  },
  {
    "url": "assets/js/12.9ba464af.js",
    "revision": "0444928de76ec5efec245e6e8de14521"
  },
  {
    "url": "assets/js/13.7ba8fedb.js",
    "revision": "cb3353d9dab730f0ce36398073e0ce60"
  },
  {
    "url": "assets/js/14.7995f68e.js",
    "revision": "b92504736c1fd0cf5a2d6e7626b0bdd1"
  },
  {
    "url": "assets/js/15.e467d2cb.js",
    "revision": "8cc444d879cc2984998687c352c7164a"
  },
  {
    "url": "assets/js/16.0de03b42.js",
    "revision": "955814e2cab455057a5721d86ea380f3"
  },
  {
    "url": "assets/js/17.f56a907c.js",
    "revision": "5e241a85111db750cccd9abfc8743060"
  },
  {
    "url": "assets/js/18.ed8c72f5.js",
    "revision": "975d56296d2fa40dd1cfc424942cdce6"
  },
  {
    "url": "assets/js/19.310b7293.js",
    "revision": "19063488abcbe87c5649c7d0b1337c7b"
  },
  {
    "url": "assets/js/2.dc1e50cb.js",
    "revision": "e06b61d2ba6695846bdd81d065d7db3c"
  },
  {
    "url": "assets/js/20.52a56ae4.js",
    "revision": "873f5f6ebdd37854c3f51bb66ce323d4"
  },
  {
    "url": "assets/js/21.1ff258df.js",
    "revision": "575d1c681a0028fff754caf1869dcd32"
  },
  {
    "url": "assets/js/22.ee5746f8.js",
    "revision": "d4e9645e8e42ae1c5ef1a8b589ff2589"
  },
  {
    "url": "assets/js/23.3f0d9613.js",
    "revision": "03bee648da8e1f29e04f4aac95d02876"
  },
  {
    "url": "assets/js/3.d6dd8fbc.js",
    "revision": "d2f1d273129df8c88859a337caa4469a"
  },
  {
    "url": "assets/js/4.3ed1779c.js",
    "revision": "8cb4c53c155dcfe90dd87c102f1fce2c"
  },
  {
    "url": "assets/js/5.c71100a0.js",
    "revision": "bee5558d7c30bdb02a1f26b12d873c60"
  },
  {
    "url": "assets/js/6.bdb71d61.js",
    "revision": "a5118f54b4510021cb836fc17c10a4c3"
  },
  {
    "url": "assets/js/7.86c6b1cb.js",
    "revision": "bfb82afd075431c4bea7727408a3a575"
  },
  {
    "url": "assets/js/8.fdcd45a3.js",
    "revision": "291813eba0389d30e62620c191ff5987"
  },
  {
    "url": "assets/js/9.c1144577.js",
    "revision": "71c24148f229ea91b7371f253242ba65"
  },
  {
    "url": "assets/js/app.23acc1eb.js",
    "revision": "df5e7d82ff032568d00c563a9bbb897a"
  },
  {
    "url": "blog.html",
    "revision": "72723322aee3b159ebfc523d7112a3a0"
  },
  {
    "url": "countup.html",
    "revision": "27ccf72e2b957a668fd387d5fa6b6b39"
  },
  {
    "url": "css/a-css.html",
    "revision": "6a7b2173f596b892824a9c2242eb4ccc"
  },
  {
    "url": "css/b-css.html",
    "revision": "b106abe694726789e0a7a9f4069f57ae"
  },
  {
    "url": "css/c-css.html",
    "revision": "82bb480aedbb1f2a8047bc74d68431a4"
  },
  {
    "url": "css/index.css",
    "revision": "1b8c18e01eb1fa22fdc4841f310a66a7"
  },
  {
    "url": "css/index.html",
    "revision": "d453088a8def39ef8fcac1a4a2181c6d"
  },
  {
    "url": "http/http.html",
    "revision": "e3c41bec7fd48f01d62e43c0eaae289f"
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
    "revision": "4ff6073c98b48b5fca8223e3eec45569"
  },
  {
    "url": "interview/interview.html",
    "revision": "49c88d4ab2737735d893a934500546bd"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "e1f45c7d77647ac66446eb944efa3741"
  },
  {
    "url": "typescript/typescript.html",
    "revision": "3c89636ed8c8e219987285d4ebc12b8f"
  },
  {
    "url": "vue2/vue2.html",
    "revision": "6a2577a2b5770ca32ed0c7a3b81ae195"
  },
  {
    "url": "vue3/vue3.html",
    "revision": "e89bdb1daa873d3e685cfdf580fc707c"
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
