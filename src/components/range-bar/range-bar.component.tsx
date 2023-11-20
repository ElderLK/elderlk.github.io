import React from 'react'

type Props = {
  complete: number
}

const RangeBar = ({ complete }: Props) => {
  const width = `${complete}%`
  const progressBarStyle = {
    '--percentage': width
  } as unknown as React.CSSProperties

  return (
    <div
      style={progressBarStyle}
      className={`block h-4 w-full overflow-hidden rounded-xl bg-slate-400 after:block after:h-4 after:animate-widthPercentage after:transition-all after:w-[${width}] after:bg-slate-900 after:content-[''] dark:bg-slate-300 after:dark:bg-slate-500`}
    />
  )
}

export default RangeBar
