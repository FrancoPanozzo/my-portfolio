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
        primary: {
          // DEFAULT: '#ffce00'
        },
        secondary: '#ffcdab',
        // foreground: '#1b0044',
        background: '#f5eee6',
        foreground: '#062121'
      },
      boxShadow: {
        // Needs to be the same as the foreground color
        'button-hover': '0px 4px 0px 0px #062121',
        'button-click': '0px 2px 0px 0px #062121'
      }
    }
  }
}
