import components from "./config/components"
import css from "./config/css"

target: 'static'

let description =
  "👋 Hello, I'm AdemCan, 17 years old and I am a high school student. it is also A passionate Front End Developer 🚀"

export default {
  css,
  buildModules: [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/color-mode',
  'nuxt-responsive-loader'
],
  head: {
    title: 'AdemCan Certel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#2C2F33' },
      {
        name: 'og:site_name',
        hid: 'og:site_name',
        content: 'ademcan.xyz',
      },
      {
        name: 'description',
        hid: 'description',
        content: description,
      },
      {
        name: 'og:description',
        hid: 'og:description',
        content: description,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap',
        href: 'https://www.w3schools.com/w3css/4/w3.css',
        href: 'https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css',
        media: 'all',
      },
    ],
  },
  loading: { color: '#7289DA' },
  css: [
    '~/assets/css/style.css',
    '~/assets/css/style.css'
  ],
  components: true,
  vWave: {
    color: 'green',
    duration: 0.2,
    finalOpacity: 0.2
  },
  build: {},
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  }
}