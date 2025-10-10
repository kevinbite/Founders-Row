'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

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
      className="relative bg-black -mt-20"
      style={{ 
        height: '100vh',
        minHeight: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Full-bleed Background Video */}
      <div className="absolute z-0" style={{ top: '-80px', left: '0px', right: '0px', bottom: '0px' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ 
            width: '100%', 
            height: 'calc(100% + 80px)',
            objectPosition: 'center top'
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
        >
          <source src="/images/Animated_Video_with_Moving_Sky.mp4" type="video/mp4" />
          {/* Fallback background image if video fails to load */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              backgroundImage: `url('${heroImageSrc}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Hero Content Stack */}
      <div className="relative z-10 h-full flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-56 sm:pt-64 md:pt-72 lg:pt-80">
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

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center gap-5 sm:gap-6" role="group" aria-label="Primary actions">
              <Link
                href="/about"
                aria-label="Learn about our mission"
                className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Our Mission
              </Link>
              <Link
                href="/contact"
                aria-label="Get in touch with Founders Row"
                className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
