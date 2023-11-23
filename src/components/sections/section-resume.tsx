/* eslint-disable @next/next/no-img-element */
'use client'

import { useTranslations } from 'next-intl'

import Heading from '@/components/heading/heading.component'

import SectionBase from './section-base'

const SectionResume = () => {
  const t = useTranslations('resumeSection')

  return (
    <SectionBase id="resume">
      <Heading lineLeft size="lg">
        {t('title')}
      </Heading>

      <div className="group flex flex-col items-center rounded-lg bg-slate-100 bg-opacity-80 p-4 dark:bg-slate-950 dark:bg-opacity-80 md:flex-row md:space-x-10 md:p-20">
        <img
          alt="My profile picture"
          src="/images/me.png"
          className="mb-2 h-72 w-60 rounded-lg blur-sm transition-all duration-300 group-hover:blur-none md:h-96 md:w-80"
        />
        <div className="z-10 text-lg font-semibold text-gray-900 dark:text-gray-100 lg:text-2xl">
          <h3 className="mb-2 md:mb-10">{t('aboutMe')}</h3>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div>
              <p>
                <b className="mr-2">{t('fullName')}:</b>Elder Lucas Kuss
              </p>
              <p>
                <b className="mr-2">{t('age')}:</b> {t('myAge', { age: 32 })}
              </p>
              <p>
                <b className="mr-2">{t('nationality')}:</b> {t('myNationality')}
              </p>
              <p>
                <b className="mr-2">{t('languages')}:</b> {t('myLanguages')}
              </p>
            </div>
            <div className="mt-10">
              <a href="docs/elder-resume.pdf" target="_blank">
                <button
                  type="button"
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:ml-10"
                >
                  {t('cvBt')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionBase>
  )
}

export default SectionResume
