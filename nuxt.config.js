import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Viva Decora Engenharia | Desenvolvimento de software Backend Frontend DevOps',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Viva Decora Engenharia'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'pt_BR'
      }
    ],
    link: [
      {
        rel: 'wlwmanifest',
        type: 'application/wlwmanifest+xml',
        href: 'https://www.vivadecora.com.br/pro/wp-includes/wlwmanifest.xml'
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/apple-icon-57x57.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/apple-icon-60x60.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/apple-icon-72x72.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/apple-icon-76x76.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/apple-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/apple-icon-180x180.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/favicon-16x16.png",
        type: "image/png"
      },
      {
        rel: "icon",
        sizes: "96x96",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/favicon-96x96.png",
        type: "image/png"
      },
      {
        rel: "icon",
        sizes: "32x32",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/favicon-32x32.png",
        type: "image/png"
      },
      {
        rel: "icon",
        sizes: "192x192",
        href: "https://cdn.vivadecora.com.br/static/img/favicons/android-icon-192x192.png",
        type: "image/png"
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://content.nuxtjs.org/
    '@nuxt/content'
  ],
  googleAnalytics: {
    id: 'UA-84590614-1',
    checkDuplicatedScript: true,
    dev: process.env.NODE_ENV === 'development'
  },
  // https://nuxtjs.org/docs/2.x/features/file-system-routing
  router: {
    trailingSlash: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Alias Configuration
  alias: {
    decore: resolve(__dirname, './decore')
  },
  //https://content.nuxtjs.org/configuration
  content: {
  }
  // Enable lint check on save (NOT LINT FIX). Uncomment to use the feature.
  // typescript: {
  //   typeCheck: {
  //     eslint: {
  //       files: './**/*.{ts,js,vue}'
  //     }
  //   }
  // }
}
