'use client'

import React from 'react'

import Typewritter from '../typewritter/typewritter.component'

type Props = {
  title: string
  texts: string[]
}

type TerminalWriterProps = {
  phrase: string
  handleOnFinished: () => void
}

const TerminalWriter = React.memo(
  ({ handleOnFinished, phrase }: TerminalWriterProps) => {
    return (
      <p className="font-semibold leading-relaxed text-stone-900 dark:text-stone-50">
        <span className="mr-1 text-lime-600 dark:text-lime-400 ">
          {new Date().toLocaleTimeString('en', {
            hour: '2-digit',
            minute: '2-digit'
          })}
          <b className="ml-1">elder@PC</b>
        </span>
        :<span className="mx-1 text-violet-600">~/portfolio$</span>
        <Typewritter text={phrase} onFinished={handleOnFinished} delay={50} />
      </p>
    )
  }
)

TerminalWriter.displayName = 'TerminalWriter'

const Terminal = ({ title, texts }: Props) => {
  const [currentIndex, setCurrentIndex] = React.useState(1)

  const handleOnFinished = React.useCallback(() => {
    setCurrentIndex((c) => c + 1)
  }, [])

  return (
    <div className="h-full min-h-[400px] w-full overflow-hidden rounded border bg-slate-200 dark:border-slate-700 dark:bg-zinc-900">
      <div className="flex items-center bg-slate-300 dark:bg-zinc-800">
        <div className="flex gap-x-1 pl-2">
          <div className="h-4 w-4 rounded-full bg-red-600" />
          <div className="h-4 w-4 rounded-full bg-amber-500" />
          <div className="h-4 w-4 rounded-full bg-lime-600" />
        </div>
        <div className="mx-auto -translate-x-[35px] text-lg font-bold text-zinc-900 dark:text-slate-200">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="p-1 text-lg md:text-3xl ">
        {texts.slice(0, currentIndex).map((phrase, idx) => (
          <TerminalWriter
            key={idx}
            phrase={phrase}
            handleOnFinished={handleOnFinished}
          />
        ))}
      </div>
    </div>
  )
}

export default Terminal