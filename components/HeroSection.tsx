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
      className="relative bg-black"
      style={{ 
        height: '100vh',
        minHeight: '800px',
        overflow: 'visible' 
      }}
    >
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `url('${heroImageSrc}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Hero Content Stack */}
      <div className="relative z-10 h-full flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 lg:pt-56">
        <div className="text-center max-w-4xl mx-auto w-full">
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Main Statement */}
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-relaxed tracking-wide font-montserrat">
              We aren't another private equity firm.<br />
              <span className="font-medium">We are Founders Row.</span>
            </h1>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
