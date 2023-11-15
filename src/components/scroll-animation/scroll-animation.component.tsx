'use client'

import React from 'react'

type Props = {
  children: React.ReactNode
}

const ScrollAnimation = ({ children }: Props) => {
  React.useEffect(() => {
    const handleScroll = () => {
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
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return children
}

export default ScrollAnimation
