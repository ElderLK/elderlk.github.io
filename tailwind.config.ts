import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        blink: 'cursor 1s linear 5 backwards'
      },
      keyframes: {
        cursor: {
          '0%, 40%': { opacity: '1' },
          '60%, 100%': { opacity: '0' }
        }
      },
      transitionProperty: {
        height: 'height'
      },
      colors: {
        test: '#c542f5'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
