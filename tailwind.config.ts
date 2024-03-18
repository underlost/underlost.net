import type { Config } from "tailwindcss"

const plugin = require(`tailwindcss/plugin`)

const config: Config = {
  content: [
    `./src/pages/**/*.{js,ts,jsx,tsx,mdx}`,
    `./src/components/**/*.{js,ts,jsx,tsx,mdx}`,
    `./src/app/**/*.{js,ts,jsx,tsx,mdx}`,
  ],
  theme: {
    fontFamily: {
      sans: [`Mona Sans`, `-apple-system`, `system-ui`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`, `sans-serif`],
      mono: [`Space Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `Liberation Mono`, `Courier New`, `monospace`],
      script : [`Shantell Sans`, `Space Mono`, `Courier New`, `monospace`],
    },
    fontSize: {
      xs: [`.8rem`, `1.4`],
      sm: [`1rem`, `1.4`],
      base: [`1.25rem`, `1.5`],
      lg: [`1.363rem`, `1.4`],
      xl: [`1.663rem`, `1.4`],
      '2xl': [`1.953rem`, `1.4`],
      '3xl': [`2.441rem`, `1.4`],
      '4xl': [`2.752rem`, `1.4`],
      '5xl': [`3.815rem`, `1.2`],
      '6xl': [`4.168rem`, `1.2`],
      '7xl': [`4.5rem`, `1.2`],
      '8xl': [`5.65rem`, `1.2`],
      '9xl': [`6.75rem`, `1.2`],
      '10xl': [`7.5rem`, `1.2`],
    },
    extend: {
      aspectRatio: {
        sd: `4 / 3`,
      },
      textShadow: {
        sm: `0 1px 2px var(--tw-shadow-color)`,
        DEFAULT: `0 2px 4px var(--tw-shadow-color)`,
        lg: `0 8px 16px var(--tw-shadow-color)`,
      },
      colors: {
        'violet-blue': `#621EF3`,
        'pink': `#FD2D78`,
        'green': `#E9EF31`,
        'aqua': `#3CFFD0`,
        'blue': `#00FFEE`,
        'orange': `#e05915`,
      },
    },
  },
  darkMode: `class`,
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        '.container': {
          width: '100%',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },
    require(`tailwindcss`), require(`precss`), require(`autoprefixer`),
    plugin(function ({ matchUtilities, theme }: { matchUtilities: any, theme: any }) {
      matchUtilities(
        { 'text-shadow': (value: any) => {return { textShadow: value }} },
        { values: theme(`textShadow`) }
      )
    }),
  ],
}
export default config
