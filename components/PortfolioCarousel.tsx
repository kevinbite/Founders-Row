'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const companies = [
  { name: 'SweatHouz', category: 'Recovery', logo: '/logos/portfolio/swthz_logo.png', logoSize: 'large' },
  { name: 'SculptHouse', category: 'Fitness', logo: '/logos/portfolio/Beige Rustic Bakery Bake House Logo copy.png', logoSize: 'large' },
  { name: 'Baking Social', category: 'Food & Beverage', logo: '/logos/portfolio/Beige Rustic Bakery Bake House Logo.png', logoSize: 'large' },
  { name: 'Hotbox Pretzels', category: 'DTC Food', logo: '/logos/portfolio/Oval HBP Sticker.png', logoSize: 'large' },
  { name: 'Elite Picks', category: 'Sports Analytics', logo: '/logos/portfolio/elite-picks.png', logoSize: 'small' },
]

// Triple the array for seamless infinite loop
const extendedCompanies = [...companies, ...companies, ...companies]

export default function PortfolioCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)

  // Responsive card dimensions
  const cardWidth = isMobile ? 160 : 220
  const cardGap = isMobile ? 16 : 40
  const totalWidth = companies.length * (cardWidth + cardGap)
  const speed = 0.03 // pixels per millisecond

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime
      }
      
      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      setScrollPosition(prev => {
        let newPos = prev - speed * deltaTime
        // Reset position when we've scrolled one full set
        if (newPos <= -totalWidth) {
          newPos += totalWidth
        }
        return newPos
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [totalWidth, isMobile])

  return (
    <section className="bg-black py-12 sm:py-24 md:py-32 lg:pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-0 sm:mb-4 text-center">
        <p className="font-body text-white/40 text-xs tracking-widest uppercase">PORTFOLIO</p>
      </div>

      {/* Curved Horizontal Carousel */}
      <div 
        className="relative h-[300px] sm:h-[420px] select-none"
        style={{ perspective: '1000px' }}
      >
        {/* Left fade gradient */}
        <div 
          className="hidden lg:block absolute left-0 top-0 bottom-0 w-[600px] z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
          }}
        />
        
        {/* Right fade gradient */}
        <div 
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[600px] z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, black 0%, black 50%, transparent 100%)',
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          {extendedCompanies.map((company, index) => {
            // Calculate position relative to center
            const baseOffset = index * (cardWidth + cardGap)
            const centerOffset = scrollPosition + baseOffset - (extendedCompanies.length * (cardWidth + cardGap)) / 2 + (cardWidth + cardGap) / 2
            
            // Only render cards that are reasonably close to viewport
            if (Math.abs(centerOffset) > 900) return null

            // Calculate scale based on distance from center (center = bigger)
            const distanceFromCenter = Math.abs(centerOffset)
            const maxDistance = 500
            const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1)
            
            // Cards in center are bigger (1.15), cards at edges are smaller (0.85)
            const scale = 1.15 - (normalizedDistance * 0.3)
            
            // Z position - center cards are forward, edge cards are back
            const zPosition = normalizedDistance * -150
            
            // Y position - create the curved arc (edges are lower)
            const yPosition = normalizedDistance * normalizedDistance * -20
            
            // Slight rotation based on position
            const rotateY = (centerOffset / maxDistance) * 15

            return (
              <div
                key={`${company.name}-${index}`}
                className="absolute transition-transform duration-75 ease-linear"
                style={{
                  transform: `
                    translateX(${centerOffset}px) 
                    translateY(${yPosition}px)
                    translateZ(${zPosition}px) 
                    rotateY(${rotateY}deg)
                    scale(${scale})
                  `,
                  zIndex: Math.round((1 - normalizedDistance) * 10),
                }}
              >
                {/* Glow Card */}
                <div 
                  className="w-[160px] sm:w-[220px] h-[220px] sm:h-[300px] rounded-2xl relative overflow-visible"
                >
                  {/* Outer glow */}
                  <div 
                    className="absolute -inset-4 rounded-3xl blur-xl pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
                    }}
                  />
                  
                  {/* Glowing border outline */}
                  <div 
                    className="absolute -inset-[1px] rounded-2xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(200,200,200,0.3) 25%, rgba(255,255,255,0.5) 50%, rgba(200,200,200,0.3) 75%, rgba(255,255,255,0.6) 100%)',
                    }}
                  />
                  
                  {/* Inner white metallic background */}
                  <div 
                    className="absolute inset-[1px] rounded-2xl pointer-events-none"
                    style={{
                      background: `
                        linear-gradient(
                          145deg,
                          #f8f8f8 0%,
                          #e8e8e8 10%,
                          #ffffff 20%,
                          #f0f0f0 35%,
                          #d8d8d8 50%,
                          #f0f0f0 65%,
                          #ffffff 80%,
                          #e8e8e8 90%,
                          #f8f8f8 100%
                        )
                      `,
                    }}
                  />
                  
                  {/* Metallic shine overlay */}
                  <div 
                    className="absolute inset-[1px] rounded-2xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.4) 100%)',
                    }}
                  />
                  
                  {/* Border glow blur effect */}
                  <div 
                    className="absolute -inset-[2px] rounded-2xl blur-[3px] pointer-events-none opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%, rgba(255,255,255,0.7) 100%)',
                    }}
                  />
                  
                  {/* Top edge highlight */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white to-transparent z-10" />

                  {/* Top-left corner - number and spade */}
                  <div className="absolute top-2 left-2.5 sm:top-3 sm:left-4 flex flex-col items-center z-10">
                    <span className="text-[10px] sm:text-sm font-bold text-black/80">
                      {(index % companies.length) + 2}
                    </span>
                    <Image
                      src="/logos/FR LOGO WITH SPADE (1).png"
                      alt=""
                      width={32}
                      height={32}
                      className="w-3 h-3 sm:w-5 sm:h-5 opacity-80"
                    />
                  </div>

                  {/* Bottom-right corner - number and spade (rotated 180deg) */}
                  <div className="absolute bottom-2 right-2.5 sm:bottom-3 sm:right-4 flex flex-col items-center rotate-180 z-10">
                    <span className="text-[10px] sm:text-sm font-bold text-black/80">
                      {(index % companies.length) + 2}
                    </span>
                    <Image
                      src="/logos/FR LOGO WITH SPADE (1).png"
                      alt=""
                      width={32}
                      height={32}
                      className="w-3 h-3 sm:w-5 sm:h-5 opacity-80"
                    />
                  </div>

                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 z-10">
                    {/* Company logo */}
                    <div className={`flex items-center justify-center ${
                      company.logo 
                        ? company.logoSize === 'small' 
                          ? "w-14 h-14 sm:w-24 sm:h-24 mb-1 sm:mb-2" 
                          : "w-20 h-20 sm:w-36 sm:h-36 -mb-1 sm:-mb-2" 
                        : "w-12 h-12 sm:w-20 sm:h-20 mb-2 sm:mb-4"
                    }`}>
                      <Image
                        src={company.logo || "/logos/FR LOGO WITH SPADE (1).png"}
                        alt={company.name}
                        width={144}
                        height={144}
                        className={company.logo ? "w-full h-full object-contain mix-blend-multiply" : "w-6 h-6 sm:w-10 sm:h-10 opacity-60"}
                      />
                    </div>
                    
                    {/* Company name */}
                    <h3 className="font-heading text-xs sm:text-lg font-semibold text-center text-black/80 tracking-wide uppercase">
                      {company.name}
                    </h3>
                    
                    {/* Category */}
                    <p className="font-body text-black/50 text-[9px] sm:text-xs mt-1 sm:mt-2 tracking-wider uppercase">
                      {company.category}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* View all link */}
      <div className="text-center mt-0 sm:mt-8">
        <a 
          href="/portfolio"
          className="inline-flex items-center gap-2 font-body text-white/50 hover:text-white text-[11px] tracking-[0.2em] uppercase transition-colors"
        >
          View all companies
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
