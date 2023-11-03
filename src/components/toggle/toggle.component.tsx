import React from 'react'
import { InputHTMLAttributes } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const toggleVariants = tv({
  base: "bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
  variants: {
    size: {
      sm: 'w-9 h-5 after:h-4 after:w-4 after:top-[2px] after:left-[2px]',
      md: 'w-11 h-6 after:h-5 after:w-5 after:top-[2px] after:left-[2px]',
      lg: 'w-14 h-7 after:h-6 after:w-6 after:top-0.5 after:left-[4px] '
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type ToggleVariants = VariantProps<typeof toggleVariants>

type Props = ToggleVariants & {
  label?: string
  onToggle?: (status: boolean) => void
  checked?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

const Toggle = React.forwardRef<HTMLInputElement, Props>(
  ({ label, onToggle, checked, size }: Props, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked)

    const onChange = () => {
      const status = !isChecked
      setIsChecked(status)

      !!onToggle && onToggle(status)
    }

    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          value=""
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only peer"
          ref={ref}
        />
        <div className={toggleVariants({ size })}></div>
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
