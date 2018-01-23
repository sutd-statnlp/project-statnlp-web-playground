importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "6f2c6888e9f517bf8389b3622a5fcea7"
  },
  {
    "url": "app/app-d932f9b0de.js",
    "revision": "e002ac5e8fb172009d791b300bcde36f"
  },
  {
    "url": "app/vendor-948a07e5af.js",
    "revision": "948a07e5afbc6ccab0f8b581cd1cdf63"
  },
  {
    "url": "content/css/main-846eaf7d15.css",
    "revision": "846eaf7d1562676fd276068347cdcd60"
  },
  {
    "url": "content/css/vendor-dc1ba62ced.css",
    "revision": "dc1ba62ced355fb95b9c5a63b5ff60da"
  },
  {
    "url": "content/data/nlu/nlu-sample.json",
    "revision": "3dc1d98c7f0a38e43034bc27aa3f3ec9"
  },
  {
    "url": "content/fonts/glyphicons-halflings-regular-8988968814.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "content/fonts/icon-github-ea8bb7f4b6.svg",
    "revision": "ea8bb7f4b65e7f8b2438d45463270d82"
  },
  {
    "url": "content/fonts/icon-gitlab-ab089c02c8.svg",
    "revision": "ab089c02c8a54a63a347b47190857329"
  },
  {
    "url": "content/fonts/icon-university-41cbbe6ece.svg",
    "revision": "41cbbe6ece25ddd78c82190d13f54af1"
  },
  {
    "url": "content/fonts/icon-web-c0b8848262.svg",
    "revision": "c0b88482626ef135027e4a94e7b973b1"
  },
  {
    "url": "content/icons/icon-github-ea8bb7f4b6.svg",
    "revision": "ea8bb7f4b65e7f8b2438d45463270d82"
  },
  {
    "url": "content/icons/icon-gitlab-ab089c02c8.svg",
    "revision": "ab089c02c8a54a63a347b47190857329"
  },
  {
    "url": "content/icons/icon-university-41cbbe6ece.svg",
    "revision": "41cbbe6ece25ddd78c82190d13f54af1"
  },
  {
    "url": "content/icons/icon-web-c0b8848262.svg",
    "revision": "c0b88482626ef135027e4a94e7b973b1"
  },
  {
    "url": "content/images/logo-statnlp-65df37362a.png",
    "revision": "65df37362a0da179a49b1058a66683f6"
  },
  {
    "url": "content/js/burrow.js",
    "revision": "4f358561d2a0ab9757ade4b544029fb0"
  },
  {
    "url": "content/js/d3.min.js",
    "revision": "4ba8713f36b57051eac6af4d312e6031"
  },
  {
    "url": "content/js/wordcloud.min.js",
    "revision": "d33c888b1dc77ad82b86541b0e5d8ef8"
  },
  {
    "url": "content/js/wordtree.min.js",
    "revision": "d0e59e0f42ae2119e8b842f89844a4f4"
  },
  {
    "url": "index.html",
    "revision": "22ee59ee41bc2e67c614c0dfef55d2df"
  },
  {
    "url": "wordtree.html",
    "revision": "5b79dcdb6c217da30756b7d32724785f"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
