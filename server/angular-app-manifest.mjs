
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about-me"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12864, hash: 'e780c1aac7b5d2b1523205d724c170e7ae2a75937f4f3717921b8a9aac0ff5a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3683, hash: '01e45af353be4d71ea1dbc3d6c2978764038d65ac77e0e3eb5924b6c1f0256c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15245, hash: 'dc403034ea1b09a4dd0dd15417875e28d8feb295056862729e3867b224e22710', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 15247, hash: 'e1e9ad8fd2dcb282c514e8b30e109b53c5905406bdbcf04fa77c5df549c56289', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-FGVEQUSU.css': {size: 13088, hash: 'cwRKFzxfpro', text: () => import('./assets-chunks/styles-FGVEQUSU_css.mjs').then(m => m.default)}
  },
};
