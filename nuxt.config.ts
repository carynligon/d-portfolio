// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  app: {
    head: {
      title: 'Derrick Ligon',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "I'm Derrick Ligon, a product designer in Atlanta, GA currently working at Google. My background includes brand, visual design, user experience design, and design systems."
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/waving-hand_1f44b.png'
        }
      ]
    }
  },

  css: ['~/assets/css/colors.css', '~/assets/css/font.css', '~/assets/css/grid.css'],

  modules: [],

  compatibilityDate: '2025-01-07'
})
