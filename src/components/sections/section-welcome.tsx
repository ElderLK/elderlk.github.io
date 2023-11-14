'use client'

import Terminal from '@/components/terminal/terminal.component'

import SectionBase from './section-base'
import { useTranslations } from 'next-intl'

const SectionWelcome = () => {
  const t = useTranslations('welcomeSection')

  const msgs = ['terminal.ms1', 'terminal.ms2', 'terminal.ms3', 'terminal.ms4']

  const welcomePhrases = msgs.map((msg) => t(msg))

  return (
    <SectionBase id="welcome">
      <Terminal title={t('title')} texts={welcomePhrases} />
    </SectionBase>
  )
}

export default SectionWelcome
