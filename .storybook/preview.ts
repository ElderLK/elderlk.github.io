require('../src/app/globals.css')

import type { Preview } from '@storybook/react'

import { withThemeByDataAttribute } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: '',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-mode'
    }) as any
  ]
}

export default preview
