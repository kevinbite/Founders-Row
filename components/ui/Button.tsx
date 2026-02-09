import { ReactNode, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-white text-black 
    hover:bg-neutral-100 
    border border-white
    shadow-glow-sm hover:shadow-glow
  `,
  secondary: `
    bg-transparent text-white 
    border border-white/30 
    hover:bg-white/10 hover:border-white/50
  `,
  ghost: `
    bg-transparent text-white 
    hover:bg-white/5
    border border-transparent
  `,
  outline: `
    bg-transparent text-white 
    border border-white/20 
    hover:border-white/40 hover:bg-white/5
  `,
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-cinzel font-medium tracking-wide
    rounded-lg
    transition-all duration-300 ease-smooth
    focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  )
}
