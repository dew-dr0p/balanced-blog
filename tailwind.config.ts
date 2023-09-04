import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9c27b0',
        secondary: '#383a3c',
        black: '#202020',
        gray: '#656565',
        border: '#eeeeee'
      },
    },
  },
  plugins: [],
}
export default config
