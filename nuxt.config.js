const path = require('path')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fidelity Values',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }

    ],
    script: [
      {
        id: 'tawk',
        src: '/js/chatbot.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~/plugins/toastr.js', mode: 'client' },
    { src: '~/plugins/slider.js', mode: 'client' },
    '~/plugins/bootstrap-vue.client',
    { src: '@/plugins/aos', mode: 'client' }
  ],
  purgeCSS: {
    whitelist: ['aos-init', 'aos-animate', 'data-aos-delay', 'data-aos-duration', 'fade-up', 'zoom-in']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    '@nuxt/postcss8'
  ],
  loadingIndicator: {
    name: 'chasing-dots',
    color: 'purple',
    background: 'green'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'bootstrap-vue/nuxt',
    '@nuxtjs/color-mode',
    [
      'nuxt-sweetalert2',
      {
        confirmButtonColor: '#000000'
      }
    ]
  ],
  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
  },
  colorMode: {
    classSuffix: ''
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'My PWA',
      author: 'Me'
    },
    manifest: {
      name: 'Nuxt.js PWA Coffee Shop',
      short_name: 'Nuxt.js PWA',
      lang: 'en',
      display: 'standalone'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    },
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents')
      })
    }
  },
  bootstrapVue: {
    icons: true,
    bootstrapCSS: true, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: true, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: []// Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://cdn.snipcart.com/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  }
}
