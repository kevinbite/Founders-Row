'use client'

import { useEffect, useState } from 'react'

interface HeroSectionProps {
  heroImageSrc?: string
  title?: string
  subtitle?: string
  panelTitle?: string
  panelCol1?: string
  panelCol2?: string
}

const HeroSection = ({
  heroImageSrc = '/images/photo-1634010727710-aeef03fa4cba.jpeg',
  title = 'Capital. Creativity. Execution.',
  subtitle = '',
  panelTitle = 'Founders Row is a next-generation brand builder.',
  panelCol1 = 'We bring the discipline of private equity, the empathy of founder-led advisory, and the firepower of a world-class creative studio. We exist for one reason: to help founders go further, faster.',
  panelCol2 = 'We are producers for founders the way Rick Rubin and Jimmy Iovine produced some of the greatest musicians of our time — shaping, amplifying, and pushing them to greatness. (And yes, those guys are our idols.)'
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      aria-label="Hero" 
      className="relative overflow-hidden bg-black"
    >
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <div 
          className="absolute inset-0 bg-no-repeat bg-black"
          style={{ 
            backgroundImage: `url('${heroImageSrc}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center top'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Hero Content Stack */}
      <div className="relative z-20 min-h-[80vh] md:min-h-[90vh] lg:min-h-[100vh] flex items-start justify-center pt-64 md:pt-72 lg:pt-80">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Main Statement */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed tracking-wide font-montserrat">
              This isn't another private equity firm.<br />
              <span className="font-medium">This is Founders Row.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Triangle Transition - Solid Black */}
      <div className="absolute bottom-[20vh] sm:bottom-[25vh] md:bottom-[30vh] left-0 right-0 h-48 sm:h-56 md:h-64 lg:h-72 z-30 pointer-events-none">
        <svg 
          className="absolute w-full h-full" 
          viewBox="0 0 1200 300" 
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          {/* Left triangle pointing down to center */}
          <polygon points="0,0 600,300 0,300" fill="#000000" opacity="1" />
          {/* Right triangle pointing down to center */}
          <polygon points="1200,0 600,300 1200,300" fill="#000000" opacity="1" />
        </svg>
      </div>

    </section>
  )
}

export default HeroSection
