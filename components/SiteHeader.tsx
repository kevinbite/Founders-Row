'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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
          {/* Desktop - Right-aligned Investor Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/investor-login"
              className="px-6 py-2.5 text-sm font-medium font-cinzel hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-md"
              aria-label="Investor Login"
              style={{
                background: 'linear-gradient(135deg, #E8E8E8 0%, #FFFFFF 25%, #D1D1D1 50%, #FFFFFF 75%, #E8E8E8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3), 0 0 90px rgba(255,255,255,0.2)',
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4)) drop-shadow(0 0 40px rgba(255,255,255,0.2))'
              }}
            >
              Investor Login
            </a>
          </div>

          {/* Mobile - Hamburger Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b-2 border-white/10 shadow-xl">
            <div className="px-6 py-6 space-y-4">
              <a
                href="/investor-login"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 text-sm font-medium font-cinzel hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 text-center rounded-md"
                aria-label="Investor Login"
                style={{
                  background: 'linear-gradient(135deg, #E8E8E8 0%, #FFFFFF 25%, #D1D1D1 50%, #FFFFFF 75%, #E8E8E8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3), 0 0 90px rgba(255,255,255,0.2)',
                  filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4)) drop-shadow(0 0 40px rgba(255,255,255,0.2))'
                }}
              >
                Investor Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default SiteHeader
