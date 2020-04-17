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
    "revision": "dbd5846c60eb0c8257dafe1344870395"
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
    "url": "assets/css/styles.a8d28374.css",
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
    "url": "assets/js/10.fcfcd4d1.js",
    "revision": "382dd8e532918b322f22e815d1759cb0"
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
    "url": "assets/js/app.a8d28374.js",
    "revision": "d3a07409c1278c324839cdde90245042"
  },
  {
    "url": "index.html",
    "revision": "0190f155745b43a69ae350975345f933"
  },
  {
    "url": "wpme/How_to_flatter_your_friends.html",
    "revision": "fde58c3f299ddc97f582817e38bf52e9"
  },
  {
    "url": "wpme/How_to_insult_your_enemies.html",
    "revision": "611ee77d37be4302c8fa47ca20044442"
  },
  {
    "url": "wpme/How_to_talk_about_a_variety_of_personal_characteristics.html",
    "revision": "4ae3335e5537a8dbf8b75222fd15c716"
  },
  {
    "url": "wpme/How_to_talk_about_actions.html",
    "revision": "d58c8cb22edd75fdbb9dbd910e03e9ca"
  },
  {
    "url": "wpme/How_to_talk_about_common_phenomena_and_occurrences.html",
    "revision": "11736957a99221e9983d7bb9b2af74d4"
  },
  {
    "url": "wpme/How_to_talk_about_doctors.html",
    "revision": "37d4925e2bce51230dba5644fa899b9c"
  },
  {
    "url": "wpme/How_to_talk_about_liars_and_lying.html",
    "revision": "1082c4246c62b77d212392c197f36508"
  },
  {
    "url": "wpme/How_to_talk_about_personality.html",
    "revision": "c848d478535a6eb71e76793b23c96ac6"
  },
  {
    "url": "wpme/How_to_talk_about_science_and_scientist.html",
    "revision": "b2de261f83ce7ba92e799ed242de9e63"
  },
  {
    "url": "wpme/How_to_talk_about_various_practitioners.html",
    "revision": "575f59f25be521f93c614cdbe941bad5"
  },
  {
    "url": "wpme/How_to_talk_about_various_speech_habits.html",
    "revision": "94ca2f76020c700957c7bfc57003db0d"
  },
  {
    "url": "wpme/How_to_talk_about_what_goes_on.html",
    "revision": "22b24d7c70c3855535e72341a42d36c3"
  },
  {
    "url": "wpme/index.html",
    "revision": "78fa9d7baecf3f98297d9ce29d579085"
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
