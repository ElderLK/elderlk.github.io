import React from 'react'
import { tv } from 'tailwind-variants'

const toggleVariants = tv({
  slots: {
    heading: 'mb-10 font-bold uppercase text-slate-800 dark:text-slate-200'
  },
  variants: {
    size: {
      sm: {
        heading: 'text-xl'
      },
      md: {
        heading: 'text-2xl'
      },
      lg: {
        heading: 'text-3xl '
      }
    },
    lineLeft: {
      true: {
        heading: 'border-l-4 border-slate-800 pl-4 dark:border-slate-200'
      }
    }
  },
  defaultVariants: {
    size: 'lg'
  }
})

type Props = {
  children: React.ReactNode
  size?: 'md' | 'sm' | 'lg'
  lineLeft?: boolean
}

const Heading = ({ children, lineLeft, size }: Props) => {
  const { heading } = toggleVariants()
  return <h1 className={heading({ size, lineLeft })}>{children}</h1>
}

export default Heading
