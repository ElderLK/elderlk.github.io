import React from 'react'

type Props = {
  onClickAway: (event: MouseEvent) => void
  children: React.ReactNode
}

const ClickAwayListener = ({ children, onClickAway }: Props) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        event.target instanceof HTMLElement &&
        !wrapperRef.current.contains(event.target)
      ) {
        onClickAway(event)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClickAway])

  return <div ref={wrapperRef}>{children}</div>
}

export default ClickAwayListener
