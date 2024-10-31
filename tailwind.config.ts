import type {Config} from 'tailwindcss'

import plugin from 'tailwindcss/plugin'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xl: {max: '1536px'},
      lg: {max: '1280px'},
      // md: {max: '1024px'},
      sm: {max: '428px'},
    },
    colors: {
      background: '#ffffff',
      foreground: '#000000',
      gray: {
        DEFAULT: '#a9a9aa',
        light: '#ebecee',
        dark: '#676869',
      },
      red: '#da291c',
      blue: '#0033a0',
      transparent: 'transparent',
    },
    extend: {},
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
    tailwindcssAnimate,
  ],
}

export default config
