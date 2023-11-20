import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

import { ThemeProvider } from '@/providers'

const inter = Inter({ subsets: ['latin'] })

const metaDescriptionOptions: Record<string, { description: string }> = {
  pt: {
    description: 'Site Portfolio de ElderLK.'
  },
  en: {
    description: 'The portfolio website of ElderLK.'
  },
  es: {
    description: 'Sitio web de la cartera ElderLK.'
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'Elder Kuss',
    description: metaDescriptionOptions[params.locale ?? 'en']?.description
  }
}
async function getMessages(locale: string) {
  try {
    return (await import(`../../locale/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  return ['en', 'pt', 'es'].map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale }
}: Props) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
