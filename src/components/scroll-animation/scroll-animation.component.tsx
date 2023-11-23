'use client'

import React from 'react'

type Props = {
  children: React.ReactNode
  handleScroll: () => void
}

const ScrollAnimation = ({ children, handleScroll }: Props) => {
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return children
}

export default ScrollAnimation
