'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import Select from '../select/select.component'
import ClickAwayListener from '../click-away-listener/click-away-listener.component'

import { Linkedin, Github } from 'lucide-react'

import ThemeSwitch from './theme-switch'

const headerLinks: Array<{ translatedId: string; link: string }> = [
  {
    translatedId: 'link1',
    link: '#welcome'
  },
  {
    translatedId: 'link4',
    link: '#resume'
  },
  {
    translatedId: 'link3',
    link: '#tooling'
  },
  {
    translatedId: 'link2',
    link: '#timeline'
  },
  {
    translatedId: 'link5',
    link: '#contact'
  }
]

const Header = () => {
  const t = useTranslations('header')
  const [activeLink, setActiveLink] = React.useState('welcome')
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document?.querySelectorAll('section')

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (Math.ceil(window?.scrollY) >= sectionTop) {
          const activeSection = section.getAttribute('id')
          if (activeSection) {
            setActiveLink(activeSection)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    const hash = window?.location?.hash
    const section = hash?.substring(1)
    if (section) {
      setActiveLink(section)
    }
  }, [])

  return (
    <header className="fixed z-20 w-full">
      <nav className="border-gray-200 bg-white bg-opacity-90 px-4 py-2.5 dark:bg-gray-800 dark:bg-opacity-90  lg:px-6">
        <ClickAwayListener
          onClickAway={() => {
            setOpenMenuMobile(false)
          }}
        >
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <div className="flex w-36 space-x-2">
              <ThemeSwitch />

              <Select />
            </div>
            <div className="flex items-center justify-end lg:order-2 lg:w-36">
              <div className="flex space-x-4 dark:text-gray-100">
                <a
                  href="https://www.linkedin.com/in/elder-kuss"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/elderlk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </div>
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                aria-controls="mobile-menu"
                aria-expanded={openMenuMobile}
                onClick={() => {
                  setOpenMenuMobile(!openMenuMobile)
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`w-full items-center justify-between overflow-hidden transition-height duration-500 ease-in-out lg:order-1 lg:flex lg:w-auto ${
                !openMenuMobile ? 'max-[1024px]:h-0' : 'max-[1024px]:h-56'
              }`}
              id="mobile-menu"
              onClick={() => setOpenMenuMobile(false)}
            >
              <ul className="mt-4 flex flex-col items-center font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                {headerLinks.map((h) => (
                  <li key={h.translatedId}>
                    <Link
                      href={h.link}
                      className={`lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white ${
                        h.link?.substring(1) === activeLink
                          ? 'font-black'
                          : 'font-medium'
                      }`}
                    >
                      {t(h.translatedId)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ClickAwayListener>
      </nav>
    </header>
  )
}

export default Header
