import React from 'react'
import { InputHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

const toggleVariants = tv({
  slots: {
    bar: 'peer relative rounded-full bg-gray-300 peer-checked:bg-blue-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800',
    button:
      'absolute flex items-center rounded-full border border-gray-300 bg-white text-gray-950 transition-all'
  },
  variants: {
    size: {
      sm: {
        bar: 'h-5 w-9',
        button: 'left-[2px] top-[2px] h-4 w-4'
      },
      md: {
        bar: 'h-6 w-11',
        button: 'left-[2px] top-[2px] h-5 w-5'
      },
      lg: {
        bar: 'h-5 w-9 sm:h-7 sm:w-14',
        button:
          'left-[2px] top-[2px] h-4 w-4 sm:left-[4px] sm:top-0.5 sm:h-6 sm:w-6'
      }
    },
    checked: {
      true: {
        button: 'translate-x-full'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type Props = {
  label?: string
  onToggle?: (status: boolean) => void
  checked?: boolean
  size?: 'md' | 'sm' | 'lg'
  icon?: React.ReactNode
  checkedIcon?: React.ReactNode
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

const Toggle = React.forwardRef<HTMLInputElement, Props>(
  ({ label, onToggle, checked, size, icon, checkedIcon }: Props, ref) => {
    const { bar, button } = toggleVariants()
    const [isChecked, setIsChecked] = React.useState(checked)

    const onChange = () => {
      const status = !isChecked
      setIsChecked(status)

      !!onToggle && onToggle(status)
    }

    return (
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          value=""
          type="checkbox"
          // checked={isChecked}
          // onChange={onChange}
          className="peer sr-only"
          ref={ref}
          {...(!ref && {
            checked: isChecked,
            onChange
          })}
        />
        <div className={bar({ size })}>
          <span className={button({ checked: isChecked, size })}>
            {isChecked ? icon : checkedIcon}
          </span>
        </div>
        <span
          className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          role="label"
        >
          {label}
        </span>
      </label>
    )
  }
)

Toggle.displayName = 'Toggle'

export default Toggle
