import { ReactNode } from 'react'

type BadgeVariant = 'default' | 'outline' | 'subtle'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: `
    bg-white/10 text-white
    border border-white/20
  `,
  outline: `
    bg-transparent text-neutral-300
    border border-neutral-700
  `,
  subtle: `
    bg-neutral-800/50 text-neutral-400
    border border-transparent
  `,
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        font-montserrat font-medium
        rounded-full
        tracking-wide
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
