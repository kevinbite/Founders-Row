'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
    { name: 'About', href: '/about' },
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
      className={`lg:fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-1 transition-all duration-200"
              aria-label="Founders Row Home"
            >
              <Image
                src="/logos/Screenshot 2025-09-07 130347.png"
                alt="Founders Row Logo"
                width={400}
                height={100}
                className="h-20 w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.slice(0, -1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white px-4 py-2 text-base font-medium font-cinzel transition-all duration-200 hover:underline underline-offset-4 decoration-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-md"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <a
              href="/contact"
              className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Contact us"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-black z-40"
        >
          <div className="px-6 pt-8 pb-6 space-y-6">
            {navItems.slice(0, -1).map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/90 hover:text-white px-4 py-4 text-xl font-medium font-cinzel transition-all duration-200 hover:bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${item.name}`}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-6 border-t border-white/20">
              <a
                href="/contact"
                className="block w-full bg-transparent border-2 border-white/30 text-white text-center px-6 py-4 text-xl font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Contact us"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
