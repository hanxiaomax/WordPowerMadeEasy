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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fc104c71838153ce4ae9c8d1aad438fa"
  },
  {
    "url": "assets/css/1.styles.3ac4ce2d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.bc97f1ff.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.d8d84ba6.css",
    "revision": "8789b38942cebba3353302492f619760"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3ac4ce2d.js",
    "revision": "aa0a3e3ca70cfb3cbf1c8c7dd2c544d9"
  },
  {
    "url": "assets/js/10.62ad0ebc.js",
    "revision": "e6581eff419aa92eea1261c45d5d167d"
  },
  {
    "url": "assets/js/11.91180315.js",
    "revision": "e594605063db41e2fd542f5a35278587"
  },
  {
    "url": "assets/js/12.492e9bf5.js",
    "revision": "101dd23bf72917ecbe56338e608e05ec"
  },
  {
    "url": "assets/js/13.c43d8650.js",
    "revision": "0a73dab0f35cf7bf02f7121936a6177f"
  },
  {
    "url": "assets/js/14.4b99c175.js",
    "revision": "53bd0d6aa492bdc157783237da22d93d"
  },
  {
    "url": "assets/js/15.dff774f8.js",
    "revision": "4a0da50b61eda585d494e8df6b6787d9"
  },
  {
    "url": "assets/js/16.512d67d4.js",
    "revision": "a1b6d41235755325d33572d60ae697b9"
  },
  {
    "url": "assets/js/2.bc97f1ff.js",
    "revision": "30916927b1c8a97bdaf6d7ce886144ee"
  },
  {
    "url": "assets/js/3.3c1d11fe.js",
    "revision": "dc3c2b6a84da81ad9832c0414de02734"
  },
  {
    "url": "assets/js/4.f3f069c9.js",
    "revision": "70e3f17b0118cc842884b95b926e7625"
  },
  {
    "url": "assets/js/5.7d9d9e6d.js",
    "revision": "46babb73133d9a5ea9aee2eb942f697f"
  },
  {
    "url": "assets/js/6.1ffa2589.js",
    "revision": "cd3c85bc46094c1e9d2aa9878636e40e"
  },
  {
    "url": "assets/js/7.1fd29088.js",
    "revision": "15738aada3df58dd15812a6b114730ec"
  },
  {
    "url": "assets/js/8.a0ada462.js",
    "revision": "73de766664bbed2d3f2f1ad61f032d5f"
  },
  {
    "url": "assets/js/9.52ef5dc4.js",
    "revision": "8863760cfc42c61931fcf9189d527601"
  },
  {
    "url": "assets/js/app.d8d84ba6.js",
    "revision": "8570ea6437388bdaf96d21cad9c57d8f"
  },
  {
    "url": "index.html",
    "revision": "ecf9982cbc58173a010236777ce22525"
  },
  {
    "url": "wpme/How_to_flatter_your_friends.html",
    "revision": "b5c4164213460b92bd23c17d6a3aa6ca"
  },
  {
    "url": "wpme/How_to_insult_your_enemies.html",
    "revision": "38c70058c32dd4aa39d99c1a6af86b57"
  },
  {
    "url": "wpme/How_to_talk_about_a_variety_of_personal_characteristics.html",
    "revision": "86e0bcd45db442d5c5eaa6328971a483"
  },
  {
    "url": "wpme/How_to_talk_about_actions.html",
    "revision": "5637d05f8a459419167b3b545df58883"
  },
  {
    "url": "wpme/How_to_talk_about_common_phenomena_and_occurrences.html",
    "revision": "93cf50d422fe206200342a821bf4d501"
  },
  {
    "url": "wpme/How_to_talk_about_doctors.html",
    "revision": "de196f4dbb1b35c362028a13c359b22b"
  },
  {
    "url": "wpme/How_to_talk_about_liars_and_lying.html",
    "revision": "d327b0f12f303a51b6573fea045bf67a"
  },
  {
    "url": "wpme/How_to_talk_about_personality.html",
    "revision": "2393b2a2148ba594ea195ed2725a7b29"
  },
  {
    "url": "wpme/How_to_talk_about_science_and_scientist.html",
    "revision": "3b1982fcc76b66a043e07db4315660f3"
  },
  {
    "url": "wpme/How_to_talk_about_various_practitioners.html",
    "revision": "cf2051fd7aeabe7ce78aea4945bb0e96"
  },
  {
    "url": "wpme/How_to_talk_about_various_speech_habits.html",
    "revision": "c93e670fe62d4bcc8f1c1094f01cb40b"
  },
  {
    "url": "wpme/How_to_talk_about_what_goes_on.html",
    "revision": "f9e246d9a482e7c7c1a4297f99cb9d91"
  },
  {
    "url": "wpme/index.html",
    "revision": "28afc455f9f64cfccc216166587a0639"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
