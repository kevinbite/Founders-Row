'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navItems = [
    { name: 'Our Mission', href: '/about' },
    { name: 'Partners', href: '/partners' },
    { name: 'Advisory', href: '/advisory' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isMenuOpen
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b-2 border-white/10'
          : isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b-2 border-white/10' 
            : '!bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="max-w-7xl mx-auto px-6 lg:px-8 !bg-transparent">
        <div className="flex justify-between items-center h-20 relative">
          {/* Left-aligned hamburger menu button (all screen sizes) */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          
          {/* Right-aligned Contact & Investor Login Buttons */}
          <div className="hidden lg:flex ml-auto items-center space-x-4">
            <a
              href="/contact"
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

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b-2 border-white/10 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navItems.slice(0, -1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/90 hover:text-white px-4 py-3 text-lg font-medium font-cinzel transition-all duration-200 hover:bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </a>
            ))}

            {/* Contact button for mobile only */}
            <a
              href="/contact"
              className="lg:hidden block bg-transparent border-2 border-white/30 text-white text-center px-6 py-3 text-lg font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Contact us"
            >
              Contact
            </a>

            {/* Investor Login button for mobile only */}
            <a
              href="/investor-login"
              className="lg:hidden block bg-transparent border-2 border-white/30 text-white text-center px-6 py-3 text-lg font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Investor Login"
            >
              Investor Login
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
