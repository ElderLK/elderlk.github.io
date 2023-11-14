require('../src/app/globals.css')

import React from 'react'

import type { Preview } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

import { default as defaultLocale } from '../src/locale/en.json'

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
    (Story) => (
      <NextIntlClientProvider locale="en" messages={defaultLocale}>
        <Story />
      </NextIntlClientProvider>
    ),
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
