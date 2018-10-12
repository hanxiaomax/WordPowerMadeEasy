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
    "revision": "48b5dbd2203e884ef49b31661b46849e"
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
    "url": "assets/css/styles.09e6b2ea.css",
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
    "url": "assets/js/16.cac60142.js",
    "revision": "c168d16c7e20ed23e22c06d2412139e1"
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
    "url": "assets/js/app.09e6b2ea.js",
    "revision": "1ddbe5030a3907478354719e4e7c9ee2"
  },
  {
    "url": "index.html",
    "revision": "829ca819a32a290a72e5b2e52701bc2a"
  },
  {
    "url": "wpme/How_to_flatter_your_friends.html",
    "revision": "5ea63c878c3597d8521e356b0e861fa0"
  },
  {
    "url": "wpme/How_to_insult_your_enemies.html",
    "revision": "56af38cd4a28b85917973ea56184be62"
  },
  {
    "url": "wpme/How_to_talk_about_a_variety_of_personal_characteristics.html",
    "revision": "9c18c6d5cea98cb9e40edd5428a810c5"
  },
  {
    "url": "wpme/How_to_talk_about_actions.html",
    "revision": "a975cbf7df50cba8bc932e1badfa4724"
  },
  {
    "url": "wpme/How_to_talk_about_common_phenomena_and_occurrences.html",
    "revision": "a70e385c52cbc82e7841b5189564c281"
  },
  {
    "url": "wpme/How_to_talk_about_doctors.html",
    "revision": "536bcc19de646d0304ead5e94184cdfe"
  },
  {
    "url": "wpme/How_to_talk_about_liars_and_lying.html",
    "revision": "4b45752fc565319f77368c5f467d9dcd"
  },
  {
    "url": "wpme/How_to_talk_about_personality.html",
    "revision": "6bb37d8240cc5ef1aec430dfdda16685"
  },
  {
    "url": "wpme/How_to_talk_about_science_and_scientist.html",
    "revision": "99a9eb01f1d12bc84a33d7a15aa08002"
  },
  {
    "url": "wpme/How_to_talk_about_various_practitioners.html",
    "revision": "6cfd0c6bacfc377d796eba31eda2e2ab"
  },
  {
    "url": "wpme/How_to_talk_about_various_speech_habits.html",
    "revision": "5315d5095b619a073de00b4c302f6a96"
  },
  {
    "url": "wpme/How_to_talk_about_what_goes_on.html",
    "revision": "d2965a52fd9b26a33501ced9941fd4bb"
  },
  {
    "url": "wpme/index.html",
    "revision": "ff481cd45942838ad67ad9271d5633d9"
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
