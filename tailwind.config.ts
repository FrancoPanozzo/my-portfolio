import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],

  darkMode: ['class'],

  theme: {
    fontFamily: {
      title: ['Poetsen One', 'sans-serif'],
      body: ['Ubuntu Sans', 'sans-serif']
    },

    extend: {
      colors: {
        background: '#fffcf2',
        foreground: '#252422',
        portfolio: '#ffa3af',
        experience: '#fee440',
        about: '#00af54'
      },
      boxShadow: {
        // Needs to be the same as the foreground color
        'button-hover': '-2px 4px 0px 0px #252422',
        'button-click': '-1px 2px 0px 0px #252422'
      }
    }
  }
}
