import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

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
      title: ['Roboto', 'sans-serif'],
      body: ['Lato', 'sans-serif']
    },

    extend: {
      colors: {
        primary: {
          ...colors.red,
          DEFAULT: colors.red['600']
        }
      }
    }
  }
}
