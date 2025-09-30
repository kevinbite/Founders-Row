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
  heroImageSrc = '/images/atlanta-skyline-at-dusk.jpg',
  title = 'Capital. Creativity. Execution.',
  subtitle = 'A NEW PERSPECTIVE ON INVESTING',
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
      className="relative overflow-hidden bg-[#050609]"
    >
      {/* Hero Content Stack */}
      <div className="relative z-20">
        {/* Headline and Subhead */}
        <div className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 text-center px-4 sm:px-6 lg:px-8">
          <div 
            className={`transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Subhead */}
            <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.12em] font-medium text-[#C9CDD4] mb-6 md:mb-8 font-montserrat">
              {subtitle}
            </p>
            
            {/* Main Headline */}
            <h1 
              className="text-[clamp(2rem,8vw,5.25rem)] leading-[1.1] tracking-tight font-light text-[#F5F7FA] font-cinzel"
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 5.25rem)',
                lineHeight: '1.15'
              }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Full-bleed Image Band */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full -mt-24 md:-mt-40 lg:-mt-56">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroImageSrc}')` }}
        />
        
        {/* No overlay - Full Atlanta skyline visibility */}
        
      </div>

      {/* Seamless Connector Section */}
      <div className="relative z-30 bg-gradient-to-b from-transparent via-black/20 to-black">
        {/* Overlapping Content Panel */}
        <div className="-mt-32 md:-mt-48 lg:-mt-64 px-4 sm:px-6 lg:px-8 pt-0 pb-20 md:pb-24 lg:pb-32">
          <div 
            className={`max-w-5xl mx-auto transition-all duration-500 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Enhanced connector tile with better integration */}
            <div className="bg-black/80 backdrop-blur-xl border-t border-white/20 border-x border-white/10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
                {/* Centered title with enhanced styling */}
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
                    {panelTitle}
                  </h2>
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                </div>
                
                {/* Enhanced two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                  <div className="space-y-6">
                    <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat platform-text">
                      {panelCol1}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat platform-text">
                      {panelCol2}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom fade to connect with next section */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black/40"></div>
            </div>
          </div>
        </div>
        
        {/* Transition zone to Our Platform */}
        <div className="h-16 md:h-20 lg:h-24 bg-gradient-to-b from-black/60 to-black"></div>
      </div>
    </section>
  )
}

export default HeroSection
