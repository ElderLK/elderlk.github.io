'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

import { FlagByLangCode } from './country-flag.component'

type LocaleCode = 'en' | 'pt' | 'es'

const renderFlag = (code: LocaleCode) => {
  const Flag = FlagByLangCode?.[code]

  return (
    <div className="h-4 w-4 text-2xl sm:h-6 sm:w-6">
      <Flag />
    </div>
  )
}

const options: LocaleCode[] = ['en', 'pt', 'es']

const Select = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = pathname.slice(1, 3) as unknown as LocaleCode
  const t = useTranslations('locale')
  const [langCode, setLangCode] = React.useState<LocaleCode>(
    options.includes(locale) ? locale : 'en'
  )

  const [openOptions, setOpenOptions] = React.useState(false)

  return (
    <div className="relative">
      <button
        id="locales-button"
        data-dropdown-toggle="dropdown-locales"
        className="z-10 inline-flex flex-shrink-0 items-center rounded-md border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        type="button"
        onClick={() => {
          setOpenOptions(!openOptions)
        }}
      >
        {renderFlag(langCode)}
        <ChevronDown className="ml h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      <div
        id="dropdown-locales"
        className={`absolute top-0 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white  shadow ring-4 ring-gray-100 dark:bg-gray-700 dark:ring-gray-700 ${
          openOptions === false && 'hidden'
        }`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="locales-button"
        >
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  setOpenOptions(false)
                  setLangCode(opt)
                  router.push(`/${opt}`)
                }}
              >
                <div className="inline-flex items-center">
                  {renderFlag(opt)}
                  <span className="ml-2">{t(opt)}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Select
