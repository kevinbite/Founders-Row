'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full bg-black">
      {/* Hero background image - Mobile */}
      <div 
        className={`absolute inset-0 -top-64 sm:hidden transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src="/images/fr_website_hero_feb_update.jpeg"
          alt="Founders Row"
          fill
          className="object-contain object-center grayscale scale-[1.15]"
          priority
          quality={100}
          sizes="100vw"
          unoptimized
        />
        {/* Vignette overlay for mobile */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 100px 40px black',
          }}
        />
        {/* Bottom fade for mobile - positioned where image content ends */}
        <div 
          className="absolute left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            top: '70vh',
            background: 'linear-gradient(to top, black 0%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Hero background image - Desktop */}
      <div 
        className={`absolute inset-0 top-32 bottom-20 hidden sm:block transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src="/images/fr_website_hero_feb_update.jpeg"
          alt="Founders Row"
          fill
          className="object-contain object-center grayscale"
          priority
          quality={100}
          sizes="100vw"
          unoptimized
        />
        {/* Vignette overlay for desktop */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 200px 100px black',
          }}
        />
        {/* Extra right edge fade */}
        <div 
          className="absolute top-0 bottom-0 right-0 w-[30%] pointer-events-none"
          style={{
            background: 'linear-gradient(to left, black 0%, black 60%, transparent 100%)',
          }}
        />
        {/* Extra left edge fade */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-[30%] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, black 0%, black 60%, transparent 100%)',
          }}
        />
      </div>

    </section>
  )
}
