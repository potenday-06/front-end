if (!self.define) {
  let e,
    s = {}
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (i, n) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[t]) return
    let c = {}
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: c, require: r }
    s[t] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (n(...e), c))
  }
}
define(['./workbox-4754cb34'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: 'fefb8a1d406fbab28405b5a8dd8b5a40',
        },
        {
          url: '/_next/static/BXVMFrlbGdmit-v09aanq/_buildManifest.js',
          revision: '106179f2896b4692604baed88571d39e',
        },
        {
          url: '/_next/static/BXVMFrlbGdmit-v09aanq/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/173-f44ebe6126571a01.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/223-3bc6b22f3a86c1e9.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/306-c1cc08e23511dc76.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/4bd1b696-91d06fbecf1f3b58.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/517-8084f4cecdea2b41.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/970-29545d3ece216cc3.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-3334702513a749aa.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/api/completions/route-a458142031db454c.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/api/keywords/route-d29fdeac9ad87840.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/api/summary/route-eb01fbf14910fff2.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/auth/%5B...slug%5D/page-1a5076828ab8e2fa.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/chat/onboarding/page-2a1f36de73b934a7.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/chat/page-97e72a61e7340931.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/layout-99ef4a1f353fd400.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/loading-3eaf4ca373c5b52f.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/login/layout-bd7264ca26b813c2.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/login/page-7d8d3d4a0487a5f5.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/onboarding/page-3ff3b8fa735e1ab8.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/page-2845ca1e6cf2de6c.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/save-chat/%5Bid%5D/page-612bc570b89761e7.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/save-chat/page-a8154d9cbcd825ca.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/app/setting/page-c4599d538f0c9f45.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/dc112a36-71532d1a8690bd02.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/framework-6b27c2b7aa38af2d.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/main-249e72b286680da8.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/main-app-77e1d0ecaee8049c.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/pages/_app-d23763e3e6c904ff.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-7aed6e7a5e76c409.js',
          revision: 'BXVMFrlbGdmit-v09aanq',
        },
        {
          url: '/_next/static/css/cdbc3802442cb068.css',
          revision: 'cdbc3802442cb068',
        },
        {
          url: '/_next/static/media/b471035bc347e80a-s.p.woff2',
          revision: '13b67eadd6bbeabc6e9a65501dafe1ae',
        },
        {
          url: '/assets/animation/chat-end.json',
          revision: '9d91ee82274245cdbdd5c806a364fe81',
        },
        {
          url: '/assets/animation/splash-screen.json',
          revision: '6159122ea83c89555f85a4b7b30af03e',
        },
        {
          url: '/assets/favicon.ico',
          revision: '5b13b14f5cbef2e58c3a12d0a341998a',
        },
        {
          url: '/assets/icons/button-next-purple.svg',
          revision: 'c3fc9bc6b5a5b4f86431aec262e0aca8',
        },
        {
          url: '/assets/icons/button-next.svg',
          revision: '04dc7d3765ea945f9f8898f92390a5b6',
        },
        {
          url: '/assets/icons/button-prev-gray.svg',
          revision: '07c880fee82331a91092facf7087d832',
        },
        {
          url: '/assets/icons/button-prev-purple.svg',
          revision: 'a83109eb2fb6860f6f33798b1f646c30',
        },
        {
          url: '/assets/icons/button-previous.svg',
          revision: 'b6e9fa1f5b3021e933169a847df9e5c2',
        },
        {
          url: '/assets/icons/exit.svg',
          revision: 'c2adb9409d32d3ddb591c6dff5926392',
        },
        {
          url: '/assets/icons/header-chat-end.svg',
          revision: '81272a6fa659134176e696ad998652b6',
        },
        {
          url: '/assets/icons/header-save-chat.svg',
          revision: 'a1a97cabdf3906926436d2c56adb778f',
        },
        {
          url: '/assets/icons/header-summary.svg',
          revision: 'b3d61174c13bb0c06914798f0f571cf5',
        },
        {
          url: '/assets/icons/home.svg',
          revision: '53ced8f02fd161459840e42c2c64df47',
        },
        {
          url: '/assets/icons/kakao-logo.svg',
          revision: '8eb4400eed13027b43b57112ba3d92a3',
        },
        {
          url: '/assets/icons/loading-text.svg',
          revision: 'ca2ae601a964a31718185c2903224f28',
        },
        {
          url: '/assets/icons/loading.svg',
          revision: '1d403dc6b442d5c93e1532398c395335',
        },
        {
          url: '/assets/icons/login-text-logo.svg',
          revision: '0146001ae514ed2422e3c52468456de8',
        },
        {
          url: '/assets/icons/logo-text.svg',
          revision: '0987642b6085e1d9d37a4ba6356fb6bb',
        },
        {
          url: '/assets/icons/naver-logo.svg',
          revision: 'cc95f7238a790d5dfc5462cbd84dabbf',
        },
        {
          url: '/assets/icons/progress-bar-1.svg',
          revision: '4f617b1bd609de64323fd0c36b4a0934',
        },
        {
          url: '/assets/icons/progress-bar-2.svg',
          revision: '3fa598df8e753287b1a219362f7d5ba3',
        },
        {
          url: '/assets/icons/progress-bar-3.svg',
          revision: 'a5db5dfe225c02d32febfe2d6d7df1f0',
        },
        {
          url: '/assets/icons/setting-header.svg',
          revision: '52f6b2d84f6e28514284e72fe3783739',
        },
        {
          url: '/assets/icons/setting.svg',
          revision: 'd676d00cdd95a87af681b75d23766b01',
        },
        {
          url: '/assets/icons/star-with-ring.svg',
          revision: '18f27a1ce3916ddc97748a8c38469737',
        },
        {
          url: '/assets/icons/star.svg',
          revision: '8d7f863cba2bb5e339d0abbcdbae008a',
        },
        {
          url: '/assets/icons/tori-cute.svg',
          revision: '362ceec00cc2f3ce018546a7f0d1c272',
        },
        {
          url: '/assets/icons/tori-face.svg',
          revision: '99658247fc304d0156eb7c440273797d',
        },
        {
          url: '/assets/icons/tori-footer.svg',
          revision: '23334dfa9e24dd42a0db93205239c871',
        },
        {
          url: '/assets/icons/tori-hug-star.svg',
          revision: '868059e2e7a58c33dd349314db245883',
        },
        {
          url: '/assets/icons/tori-login.svg',
          revision: 'cb7a2f9b4d2f1315719f14171993555a',
        },
        {
          url: '/assets/icons/tori-main.svg',
          revision: 'c47f8d252054a341beb3f13bd952795d',
        },
        {
          url: '/assets/images/cloud-case1.png',
          revision: '2da460bb63bd7dae637c311a84ab2b6d',
        },
        {
          url: '/assets/images/cloud-case2.png',
          revision: 'a97d27e1b2fb8038c81ca7f9f78db845',
        },
        {
          url: '/assets/images/cloud-main.png',
          revision: 'b6ffa04f2562725f5583dd93125402bd',
        },
        {
          url: '/assets/images/cloud-onb-page-2.png',
          revision: '42ea2c7415c02c2fa7100f0ae662c089',
        },
        {
          url: '/assets/images/cloud-onb-page-3.png',
          revision: '4ba27b8272e7e4908e1246938aac877e',
        },
        {
          url: '/assets/pwa/192.png',
          revision: '0f8374c1ea48cc04579983406e0f71cf',
        },
        {
          url: '/assets/pwa/256.png',
          revision: '162f29ce1565fe725f9b26a263529d39',
        },
        {
          url: '/assets/pwa/512.png',
          revision: '7b6569bf5941f1a0417f1a3d8da0454a',
        },
        { url: '/manifest.json', revision: '82047b06eddcd0cb894fe8aa0bdf30ab' },
        {
          url: '/opengraph-image.png',
          revision: 'd283dcc62d4f778c8b608f28187edb4e',
        },
        {
          url: '/readme/image1.png',
          revision: 'c8581151859e7cd401855b3d34e9fc71',
        },
        {
          url: '/readme/image2.png',
          revision: '207c652ff72ce4fc87b6bc9f2eaa84d1',
        },
        {
          url: '/readme/image3.png',
          revision: 'df3d9ef2a26f06e5bff05d6b04b50cfb',
        },
        {
          url: '/readme/login.png',
          revision: '75608ef95d23fa62221017113e37abaf',
        },
        {
          url: '/readme/main.png',
          revision: 'bc651c058cae22adb7982633148539cb',
        },
        {
          url: '/readme/profile1.png',
          revision: 'a08362032d60bd698486bb31e82875cf',
        },
        {
          url: '/readme/profile2.png',
          revision: '46e9094003a4ac902c74358d65225c88',
        },
        {
          url: '/twitter-image.png',
          revision: 'd283dcc62d4f778c8b608f28187edb4e',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    )
})
