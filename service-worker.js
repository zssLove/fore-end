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
    "revision": "ab9c4ba67ad04516f049be745715cfa0"
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
    "url": "assets/js/11.f6a8ea89.js",
    "revision": "d5d9a9740bbb2adbc50ab47a4bbc415a"
  },
  {
    "url": "assets/js/12.59492573.js",
    "revision": "c8c0411c9ca36e34b3a57d1475b0c74b"
  },
  {
    "url": "assets/js/13.a6baacdc.js",
    "revision": "d86c0aa6ff8d3aab61c13bca7e48bf22"
  },
  {
    "url": "assets/js/14.e824eafa.js",
    "revision": "f4f6388b8576da3cc80febd1f17a7359"
  },
  {
    "url": "assets/js/15.47bca7ee.js",
    "revision": "59436a8786e3117bcd37ba954d3e55d7"
  },
  {
    "url": "assets/js/16.8aafe5d0.js",
    "revision": "e45d013956823eb9a3e260080d6be930"
  },
  {
    "url": "assets/js/17.b89074c8.js",
    "revision": "ff87fa345be855d979e5ad2c7b472326"
  },
  {
    "url": "assets/js/18.404070db.js",
    "revision": "5ff245e75220282ffbfa748234dea026"
  },
  {
    "url": "assets/js/19.38ccce4e.js",
    "revision": "74feb4f6e7dcb9c5379805b086cbe8ad"
  },
  {
    "url": "assets/js/2.dc1e50cb.js",
    "revision": "e06b61d2ba6695846bdd81d065d7db3c"
  },
  {
    "url": "assets/js/20.98976093.js",
    "revision": "c6dee039e8aa8c520378e9e8e6f2242d"
  },
  {
    "url": "assets/js/21.2e7fc490.js",
    "revision": "60b86beb6474d0e6cd6e4d7d024f709f"
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
    "url": "assets/js/3.991ae02e.js",
    "revision": "81849869233e272d1e5e14403df8bb65"
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
    "url": "assets/js/app.fa15a17b.js",
    "revision": "5830bedf8f8705fdf664b5b3ff1031ad"
  },
  {
    "url": "blog.html",
    "revision": "2097256551847a21cbe60ed54b9f0736"
  },
  {
    "url": "countup.html",
    "revision": "8e303d904c16904fb94f4b0a8267777f"
  },
  {
    "url": "css/a-css.html",
    "revision": "63322829a40dd182b712bf3678de5130"
  },
  {
    "url": "css/b-css.html",
    "revision": "0b83cdac66a41e699453621b65cb3b27"
  },
  {
    "url": "css/c-css.html",
    "revision": "f427b427be058df2fae254ac2f56a8c8"
  },
  {
    "url": "css/index.css",
    "revision": "1b8c18e01eb1fa22fdc4841f310a66a7"
  },
  {
    "url": "css/index.html",
    "revision": "ec8a2818e2db027b4b00859e0f3867b5"
  },
  {
    "url": "http/http.html",
    "revision": "bd66ae18c7da1cbca4d767eac7f2d202"
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
    "revision": "2aea280c131dd781e20e151c27187b8b"
  },
  {
    "url": "interview/interview.html",
    "revision": "c9d11d214fd8247a7697648ff610219c"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "d92e763bacc76e6f999167f6b028e970"
  },
  {
    "url": "typescript/typescript.html",
    "revision": "1ac3e1bc1b9f4c3a44a1e6af33a78d6b"
  },
  {
    "url": "vue2/vue2.html",
    "revision": "a3c2ac2389c9e99b3f49aba2145d61fb"
  },
  {
    "url": "vue3/vue3.html",
    "revision": "3adb477ac354a539e4138f2873057c36"
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
