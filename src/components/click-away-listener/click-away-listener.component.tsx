import React from 'react'

type Props = {
  onClickAway: (event: MouseEvent) => void
  children: React.ReactElement
}

const ClickAwayListener = ({ children, onClickAway }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target instanceof HTMLElement &&
        !ref.current.contains(event.target)
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

  return React.cloneElement(children, { ref })
}

export default ClickAwayListener
