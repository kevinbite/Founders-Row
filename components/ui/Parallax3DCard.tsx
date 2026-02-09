'use client'

import { useState, useRef, ReactNode } from 'react'

interface Parallax3DCardProps {
  children: ReactNode
  className?: string
  glare?: boolean
  tiltAmount?: number
  scale?: number
}

export default function Parallax3DCard({
  children,
  className = '',
  glare = true,
  tiltAmount = 15,
  scale = 1.02,
}: Parallax3DCardProps) {
  const [transform, setTransform] = useState('')
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    const rotateX = (mouseY / (rect.height / 2)) * -tiltAmount
    const rotateY = (mouseX / (rect.width / 2)) * tiltAmount

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`)

    // Calculate glare position
    const glareX = ((e.clientX - rect.left) / rect.width) * 100
    const glareY = ((e.clientY - rect.top) / rect.height) * 100
    setGlarePosition({ x: glareX, y: glareY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
    setGlarePosition({ x: 50, y: 50 })
  }

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 ease-out ${className}`}
      style={{
        transform: isHovered ? transform : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transformStyle: 'preserve-3d',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.1)'
          : '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare effect */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
          opacity: isHovered ? 1 : 0.3,
        }}
      />

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}
