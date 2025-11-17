'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b-2 border-white/10' 
          : '!bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="max-w-7xl mx-auto px-6 lg:px-8 !bg-transparent">
        <div className="flex justify-end items-center h-20 relative">
          {/* Right-aligned Contact & Investor Login Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/#contact"
              className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Contact us"
            >
              Contact
            </a>
            <a
              href="/investor-login"
              className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Investor Login"
            >
              Investor Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
