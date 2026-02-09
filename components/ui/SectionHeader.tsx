'use client'

import AnimateOnScroll from './AnimateOnScroll'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  showLine?: boolean
  lineWidth?: 'sm' | 'md' | 'lg'
}

const alignClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
}

const lineWidths = {
  sm: 'w-16',
  md: 'w-24',
  lg: 'w-32',
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  showLine = true,
  lineWidth = 'md',
}: SectionHeaderProps) {
  return (
    <AnimateOnScroll animation="fadeInUp" className={`flex flex-col ${alignClasses[align]} ${className}`}>
      <div className="relative">
        <h2
          className={`
            text-3xl sm:text-4xl md:text-5xl 
            font-light text-white font-cinzel 
            tracking-wide leading-tight
            ${titleClassName}
          `}
        >
          {title}
        </h2>
        
        {showLine && (
          <div
            className={`
              ${lineWidths[lineWidth]} h-px mt-4 sm:mt-6
              bg-gradient-to-r from-transparent via-white/60 to-transparent
              ${align === 'center' ? 'mx-auto' : ''}
              ${align === 'right' ? 'ml-auto' : ''}
            `}
          />
        )}
      </div>
      
      {subtitle && (
        <p
          className={`
            mt-4 sm:mt-6
            text-base sm:text-lg md:text-xl
            text-neutral-400 font-montserrat
            max-w-2xl leading-relaxed
            ${align === 'center' ? 'mx-auto' : ''}
            ${subtitleClassName}
          `}
        >
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  )
}
