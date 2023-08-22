import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'nav-border':'#EBEAEA',
        'light-white': '#FAFAF8',
        'light-white-100': '#F1F4F5',
        'light-white-200': '#d7d7d7',
        'light-white-300': '#f3f3f4',
        'light-white-400': '#e2e5f1',
        'light-white-500': '#e4e4e4',
        gray: '#4d4a4a',
        'gray-100': '#3d3d4e',
        'black-100': '#252525',
        'primary-purple': '##9747ff',
        'gray-50': '#d9d9d9',
      },
      boxShadows: {
        menu: '0px 159px 95px rgba(13, 12, 34, 0.01), 0px 71px 71px rgba(13, 12, 34, 0.02), 0px 18px 39px rgba(13, 12, 34, 0.02), 0px 0px 0px rgba(13, 12, 34, 0.02)',
      },
      screens: {
        'xs': '400px',
      },
      maxWidth: {
        '10xl': '1680px',
      },
    },
  },
  plugins: [],
}
export default config
