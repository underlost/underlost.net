/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/templates/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    fontFamily: {
      sans: ['Mona Sans', `-apple-system`, `system-ui`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`, `sans-serif`],
      serif: [`calluna`, `-apple-system`, `system-ui`, `BlinkMacSystemFont`, `Segoe UI`, `serif`],
      mono: [`ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `Liberation Mono`, `Courier New`, `monospace`],
    },
    colors: {
      transparent: `transparent`,
      current: `currentColor`,
      black: `#04080F`,
      white: `#FBFBFB`,
      light: `#F5F5F5`,
      slate: `#63768D`,
      'slate-light': `#AAB8C2`,
      blue: `#00FFEE`,
      pink: `#FF00BB`,
      purple: `#9588FC`,
      yellow: `#FFF200`,
      green: `#C2FE0C`,
      aqua: `#29FCA5`,
      'purple-light': `#B3ACE3`,
      'purple-dark': `#1B1B24`,
      'purple-slate': `#333345`,
      red: `#FF0000`,
    },
    fontSize: {
      xs: ['.8rem', '1.4'],
      sm: ['1rem', '1.4'],
      base: ['1.25rem', '1.5'],
      lg: ['1.363rem', '1.2'],
      xl: ['1.663rem', '1.2'],
      '2xl': ['1.953rem', '1.2'],
      '3xl': ['2.441rem', '1.2'],
      '4xl': ['2.752rem', '1.2'],
      '5xl': ['3.815rem', '1.2'],
      '6xl': ['4.168rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
    },
    extend: {},
  },
  plugins: [require(`tailwindcss`), require(`precss`), require(`autoprefixer`)],
}