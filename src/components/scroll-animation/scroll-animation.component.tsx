'use client'

import React from 'react'

type Props = {
  children: React.ReactNode
}

const ScrollAnimation = ({ children }: Props) => {
  React.useEffect(() => {
    const handleKeyUp = () => {
      const boxes = document?.querySelectorAll('li')
      const triggerBottom = (window?.innerHeight / 5) * 4

      boxes.forEach((b, i) => {
        const even = i % 2 === 0
        const boxTop = b.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
          b.classList.remove(
            even ? 'translate-x-[200%]' : '-translate-x-[200%]'
          )
          b.classList.add('translate-x-0')
        } else {
          b.classList.add(even ? 'translate-x-[200%]' : '-translate-x-[200%]')
          b.classList.remove('translate-x-0')
        }
      })
    }

    window.addEventListener('scroll', handleKeyUp)
    return () => window.removeEventListener('scroll', handleKeyUp)
  }, [])

  return children
}

export default ScrollAnimation
