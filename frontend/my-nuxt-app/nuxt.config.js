export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "my-nuxt-app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",

        href: "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap",
      },
      {
        rel: "stylesheet",

        href: "/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",

        href: "/css/custom.css",
      },
    ],
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],
  proxy: {
    "/my-api/": {
      target: "https://myapidomain.com/api",
      pathRewrite: { "http://localhost:8000/signup": "" },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  generate: { fallback: "404.html" },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
