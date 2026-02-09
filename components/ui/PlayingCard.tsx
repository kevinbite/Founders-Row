'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import SpadeIcon from './SpadeIcon'

interface PlayingCardProps {
  children: ReactNode
  href?: string
  external?: boolean
  className?: string
  variant?: 'default' | 'featured' | 'minimal'
  showDeckEffect?: boolean
  onClick?: () => void
}

export function PlayingCard({
  children,
  href,
  external = false,
  className = '',
  variant = 'default',
  showDeckEffect = false,
  onClick,
}: PlayingCardProps) {
  const baseClasses = `
    playing-card
    ${showDeckEffect ? 'deck-stack' : ''}
    ${className}
  `

  const content = (
    <>
      {/* Top glow line */}
      <div className="card-glow-line" />
      
      {/* Corner spades */}
      <SpadeIcon className="spade-corner spade-corner-tl text-white" size={16} />
      <SpadeIcon className="spade-corner spade-corner-br text-white" size={16} />
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} block`}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={`${baseClasses} block`}>
        {content}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={`${baseClasses} w-full text-left`}>
        {content}
      </button>
    )
  }

  return <div className={baseClasses}>{content}</div>
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 sm:p-8 ${className}`}>{children}</div>
}
