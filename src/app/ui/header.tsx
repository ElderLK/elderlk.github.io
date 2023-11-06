'use client'

import { Toggle } from '@/components'
import { useTheme } from '@/hooks'
import { Lightbulb, LightbulbOff } from 'lucide-react'

const Header = () => {
  const { theme, switchTheme } = useTheme()

  return (
    <Toggle
      size="lg"
      checked={theme === 'dark'}
      onToggle={switchTheme}
      icon={<Lightbulb />}
      checkedIcon={<LightbulbOff />}
    />
  )
}

export default Header
