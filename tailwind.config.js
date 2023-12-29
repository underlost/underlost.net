/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/templates/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    fontFamily: {
      sans: ['Mona Sans', `-apple-system`, `system-ui`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`, `sans-serif`],
      mono: [`Space Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `Liberation Mono`, `Courier New`, `monospace`],
    },
    colors: {
      transparent: `transparent`,
      current: `currentColor`,
      black: `#04080F`,
      'almost-black': `#1e1f1c`,
      white: `#FBFBFB`,
      light: `#FAF6E9`,
      vanilla: `#F4EBCD`,
      slate: `#63768D`,
      'slate-dark': `#333`,
      'slate-light': `#AAB8C2`,
      blue: `#0FE`,
      'blue-light': `#c2dde6`,
      yellow: `#ffd866`,
      pink: `#ff6188`,
      purple: `#431c5D`,
      green: `#cdd422`,
      orange: `#e05915`,
    },
    fontSize: {
      xs: ['.8rem', '1.4'],
      sm: ['1rem', '1.4'],
      base: ['1.25rem', '1.5'],
      lg: ['1.363rem', '1.4'],
      xl: ['1.663rem', '1.4'],
      '2xl': ['1.953rem', '1.2'],
      '3xl': ['2.441rem', '1.2'],
      '4xl': ['2.752rem', '1.4'],
      '5xl': ['3.815rem', '1.2'],
      '6xl': ['4.168rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require(`tailwindcss`),
    require(`precss`),
    require(`autoprefixer`),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}