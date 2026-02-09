'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'scaleIn' | 'slideInLeft' | 'slideInRight'

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

const animationClasses: Record<AnimationType, string> = {
  fadeIn: 'animate-fadeIn',
  fadeInUp: 'animate-fadeInUp',
  fadeInDown: 'animate-fadeInDown',
  scaleIn: 'animate-scaleIn',
  slideInLeft: 'animate-slideInLeft',
  slideInRight: 'animate-slideInRight',
}

export default function AnimateOnScroll({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, once])

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClasses[animation] : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
