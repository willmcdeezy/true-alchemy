// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/eslint'],
  css: ['./app.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'True Alchemy Coaching - Transform Your Life | Mind, Body & Soul Coaching',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Transform your life with True Alchemy Coaching. Mind, body, and soul coaching for the modern woman. Discover your true potential and create lasting positive habits. Book your free 1:1 call today.'
        },
        {
          name: 'keywords',
          content: 'life coaching, mindset coaching, personal development, women coaching, wellness coaching, self-improvement, transformation, True Alchemy Coaching, mindset shifts, self-empowerment'
        },
        { name: 'author', content: 'Melanie - True Alchemy Coaching' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'True Alchemy Coaching - Transform Your Life' },
        {
          property: 'og:description',
          content: 'Transform your life with True Alchemy Coaching. Mind, body, and soul coaching for the modern woman. Discover your true potential and create lasting positive habits.'
        },
        { property: 'og:image', content: '/alchemy-logo-icon.png' },
        { property: 'og:url', content: 'https://truealchemycoaching.com' },
        { property: 'og:site_name', content: 'True Alchemy Coaching' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'True Alchemy Coaching - Transform Your Life' },
        {
          name: 'twitter:description',
          content: 'Transform your life with True Alchemy Coaching. Mind, body, and soul coaching for the modern woman. Discover your true potential and create lasting positive habits.'
        },
        { name: 'twitter:image', content: '/alchemy-logo-icon.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/alchemy-logo-icon.png' },
        { rel: 'apple-touch-icon', href: '/alchemy-logo-icon.png' },
      ],
    },
  },
})