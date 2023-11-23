'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { IconsByName } from '@/utils/icons'
import Heading from '@/components/heading/heading.component'
import ScrollAnimation from '@/components/scroll-animation/scroll-animation.component'

import SectionBase from './section-base'

const renderIcon = (icon: LucideIcon) => {
  const Icon = icon
  return <Icon size={32} />
}

const SectionTimeline = () => {
  const t = useTranslations('timelineSection')

  const msgs = Array.from({ length: 9 }, (_, i) => i + 1)

  const timelines = msgs.map((msg) => ({
    date: t(`${msg}.date`),
    title: t(`${msg}.title`),
    description: t(`${msg}.description`),
    icon: t(`${msg}.icon`)
  }))

  const handleScroll = React.useCallback(() => {
    const boxes = document?.querySelectorAll('li')
    const triggerBottom = (window?.innerHeight / 5) * 4

    boxes.forEach((b, i) => {
      const odd = i % 2 === 1
      const boxTop = b.getBoundingClientRect().top

      if (boxTop < triggerBottom) {
        b.classList.remove(odd ? 'translate-x-[200%]' : '-translate-x-[200%]')
        b.classList.add('translate-x-0')
      } else {
        b.classList.add(odd ? 'translate-x-[200%]' : '-translate-x-[200%]')
        b.classList.remove('translate-x-0')
      }
    })
  }, [])

  return (
    <SectionBase id="timeline">
      <Heading lineLeft size="lg">
        {t('title')}
      </Heading>
      <ScrollAnimation handleScroll={handleScroll}>
        <ol className="relative mb-60 min-w-full overflow-x-hidden border-slate-200 dark:border-slate-700">
          {timelines.map((timeline, idx) => (
            <li
              className={`mb-2 flex w-full items-center justify-between transition-transform duration-500 ${
                idx % 2 === 1 && 'flex-row sm:flex-row-reverse'
              }`}
              key={timeline.title}
            >
              <div className="order-1 hidden w-5/12 sm:block"></div>

              <div className="order-1 mx-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-300 text-slate-800 dark:bg-slate-600 dark:text-slate-100">
                {renderIcon(IconsByName?.[timeline.icon])}
              </div>

              <div
                className={`order-1 w-[90%] rounded-lg border border-slate-600 bg-white p-4 px-6 py-4 shadow-inner dark:bg-gray-700 sm:w-5/12 ${
                  idx % 2 === 1 && 'flex-row-reverse'
                }`}
              >
                <div className="mb-3 flex-row-reverse items-center justify-between sm:flex">
                  <time className="mb-1 text-base font-semibold text-gray-400 sm:order-last sm:mb-0">
                    {timeline.date}
                  </time>
                  <h4 className="text-base font-bold text-gray-500 dark:text-gray-300">
                    {timeline.title}
                  </h4>
                </div>

                <p className="rounded-lg border border-slate-600 bg-gray-50 p-3 text-base font-normal italic text-gray-500 dark:bg-gray-600 dark:text-gray-300">
                  {timeline.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </ScrollAnimation>
    </SectionBase>
  )
}

export default SectionTimeline
