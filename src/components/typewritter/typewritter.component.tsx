import React from 'react'

type Props = {
  text: string
  delay?: number
  onFinished?: () => void
}

const Typewritter = ({ onFinished, text, delay = 200 }: Props) => {
  const textSize = text?.length ?? 0
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [stopTyping, setStopTyping] = React.useState(false)
  const typing = currentIndex < textSize

  React.useEffect(() => {
    if (stopTyping && !!onFinished) {
      onFinished()
    }
  }, [stopTyping, onFinished])

  React.useEffect(() => {
    setCurrentIndex(0)
    setStopTyping(false)
  }, [text, delay])

  React.useEffect(() => {
    if (typing) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => {
        clearTimeout(timeout)
      }
    } else {
      const timeout = setTimeout(() => {
        setStopTyping(true)
      }, 1000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [typing, currentIndex, delay])

  return (
    <span
      className={`after:ml-1 after:h-full after:animate-cursor after:border-r-2 after:border-stone-900 after:content-[''] dark:after:border-stone-50 ${
        stopTyping && 'after:hidden'
      }`}
    >
      {text.substring(0, currentIndex)}
    </span>
  )
}

export default React.memo(Typewritter)
