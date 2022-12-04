/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/templates/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    fontFamily: {
      sans: [`rubik`, `-apple-system`, `system-ui`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`, `sans-serif`],
      serif: [`calluna`, `serif`],
    },
    colors: {
      transparent: `transparent`,
      current: `currentColor`,
      black: `#03080F`,
      white: `#FFFFFF`,
      slate: `#63768D`,
      slatelight: `#A7B1C2`,
      snow: `#F9F1F1`,
      platinum: `#ede4e4`,
      purple: `#470063`,
      pink: `#F92A82`,
      darkblue: `#35C5CF`,
      blue: `#99E2E7`,
      green: `#119DA4`,
      saphire: `#19647E`,
      yellow: `#EFEA5A`,
      orange: `#F36A2B`,

      // Darkmode
      GoblinGreen: `#B3FC38`,
      Nightshade: `#20202A`,

      secondary: `#F92A82`,
    },
    fontSize: {
      xs: ['.8rem', '1.4'],
      sm: ['1rem', '1.4'],
      base: ['1.25rem', '1.4'],
      lg: ['1.363rem', '1.5'],
      xl: ['1.663rem', '1.4'],
      '2xl': ['1.953rem', '1.4'],
      '3xl': ['2.441rem', '1.4'],
      '4xl': ['3.052rem', '1.4'],
      '5xl': ['3.815rem', '1.2'],
      '6xl': ['4.168rem', '1'],
    },
    extend: {},
  },
  plugins: [require(`tailwindcss`), require(`precss`), require(`autoprefixer`)],
}