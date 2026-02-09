'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Press', href: '/press' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Desktop Nav - Left aligned */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-body text-[11px] tracking-[0.2em] uppercase transition-colors ${
                    isActive(item.href) 
                      ? 'text-white' 
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile - Empty spacer for left side */}
            <div className="lg:hidden" />

            {/* Investor Login - Right aligned */}
            <Link
              href="/investor-login"
              className="hidden lg:block font-body text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
            >
              Investor Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2"
              aria-label="Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-full h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-body text-sm tracking-[0.3em] uppercase transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${isActive(item.href) ? 'text-white' : 'text-white/50'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-8 pt-8 border-t border-white/10">
            <Link
              href="/investor-login"
              className={`font-body text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${navItems.length * 50}ms` }}
            >
              Investor Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
