'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

type CardVariant = 'default' | 'team' | 'portfolio' | 'press'

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  href?: string
  external?: boolean
  className?: string
  hoverEffect?: boolean
  onClick?: () => void
}

const variantClasses: Record<CardVariant, string> = {
  default: `
    bg-neutral-900/50 
    border border-neutral-800
    hover:border-neutral-700
  `,
  team: `
    bg-neutral-900/30 
    border border-neutral-800/50
    hover:border-neutral-700
    hover:bg-neutral-900/50
  `,
  portfolio: `
    bg-neutral-900/40 
    border border-neutral-800
    hover:border-neutral-600
    hover:bg-neutral-900/60
  `,
  press: `
    bg-transparent 
    border border-neutral-800/50
    hover:border-neutral-700
    hover:bg-neutral-900/30
  `,
}

export function Card({
  children,
  variant = 'default',
  href,
  external = false,
  className = '',
  hoverEffect = true,
  onClick,
}: CardProps) {
  const baseClasses = `
    relative
    rounded-xl
    backdrop-blur-sm
    overflow-hidden
    transition-all duration-500 ease-smooth
    ${hoverEffect ? 'hover:shadow-glow hover:-translate-y-1' : ''}
  `

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  // Inner glow effect on top
  const glowOverlay = (
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  )

  const content = (
    <>
      {glowOverlay}
      {children}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${combinedClasses} block`}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={`${combinedClasses} block`}>
        {content}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={`${combinedClasses} w-full text-left`}>
        {content}
      </button>
    )
  }

  return <div className={combinedClasses}>{content}</div>
}

// Card subcomponents for composition
export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pb-0 ${className}`}>{children}</div>
}

export function CardContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`px-6 pb-6 pt-0 border-t border-neutral-800/50 mt-4 ${className}`}>
      {children}
    </div>
  )
}
