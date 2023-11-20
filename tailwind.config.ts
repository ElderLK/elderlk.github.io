import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    'after:w-[60%]',
    'after:w-[65%]',
    'after:w-[70%]',
    'after:w-[80%]',
    'after:w-[85%]',
    'after:w-[90%]'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        translateX: 'translateX 5s linear 1s backwards',
        blink: 'cursor 1s linear 5 backwards',
        widthPercentage: 'widthPercentage 2s ease-in'
      },
      keyframes: {
        cursor: {
          '0%, 40%': { opacity: '1' },
          '60%, 100%': { opacity: '0' }
        },
        translateX: {
          '0%, 50%': { translate: '45% 0' },
          '50%, 100%': { translate: '0 0' }
        },
        widthPercentage: {
          from: {
            width: '0%'
          },
          to: {
            width: 'var(--percentage)'
          }
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
