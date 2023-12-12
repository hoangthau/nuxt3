// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    '/intro': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/products/**': { swr: 5 },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' },
    // Add cors headers on API routes
    '/api/**': { cors: true },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss"
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  css: [
    '~/assets/css/main.css'
  ]
})
