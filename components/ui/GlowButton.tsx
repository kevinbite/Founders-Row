'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

interface GlowButtonProps {
  children: ReactNode
  href?: string
  external?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function GlowButton({ 
  children, 
  href, 
  external = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}: GlowButtonProps) {
  const buttonContent = (
    <span className="relative z-10 px-8 py-4 block">
      {children}
    </span>
  )

  const buttonClasses = `
    relative inline-block
    text-white text-sm tracking-[0.15em] uppercase
    rounded-lg
    border border-white/30
    overflow-visible
    transition-all duration-300
    hover:border-white/50
    hover:scale-105
    group
    ${className}
  `

  const glowEffect = (
    <>
      {/* Outer glow - always visible */}
      <div 
        className="absolute -inset-4 rounded-2xl blur-xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }}
      />
      
      {/* Inner glow - always visible */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)',
        }}
      />
      
      {/* Border glow effect - always visible */}
      <div 
        className="absolute -inset-px rounded-lg blur-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.15) 100%)',
        }}
      />
      
      {/* Top edge highlight - always visible */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </>
  )

  if (href) {
    if (external || href.startsWith('mailto:')) {
      return (
        <a href={href} className={buttonClasses} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
          {glowEffect}
          {buttonContent}
        </a>
      )
    }
    return (
      <Link href={href} className={buttonClasses}>
        {glowEffect}
        {buttonContent}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${buttonClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {glowEffect}
      {buttonContent}
    </button>
  )
}
