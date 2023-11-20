import { ReactNode } from 'react'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'

import { default as defaultLocale } from '@/locale/en.json'

import { ThemeProvider } from '@/providers'

const inter = Inter({ subsets: ['latin'] })

import './globals.css'
import { Metadata } from 'next'

type Props = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Elder Kuss',
  description: 'The portfolio website of ElderLK.',
  metadataBase: new URL('https://elderlk.github.io')
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <NextIntlClientProvider
            locale="en"
            messages={defaultLocale as unknown as AbstractIntlMessages}
          >
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
