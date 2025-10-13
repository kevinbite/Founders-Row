import Image from 'next/image'

interface FooterProps {
  showLogo?: boolean
}

const Footer = ({ showLogo = true }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { name: 'Our Mission', href: '/about' },
    { name: 'Partners', href: '/partners' },
    { name: 'Advisory', href: '/advisory' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Skyline Reveal Section - Above Footer */}
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden bg-black mt-0">
        {/* Atlanta Skyline Image with Gradient Masks */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/atlanta-skyline-at-dusk.jpg')",
            backgroundPosition: 'center center'
          }}
        >
          {/* Top fade to black */}
          <div 
            className="absolute inset-x-0 top-0 h-32 sm:h-40 md:h-48"
            style={{ 
              background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)'
            }}
          ></div>
          
          {/* Bottom fade to black */}
          <div 
            className="absolute inset-x-0 bottom-0 h-32 sm:h-40 md:h-48"
            style={{ 
              background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)'
            }}
          ></div>
          
          {/* Left fade */}
          <div 
            className="absolute inset-y-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48"
            style={{ 
              background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)'
            }}
          ></div>
          
          {/* Right fade */}
          <div 
            className="absolute inset-y-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48"
            style={{ 
              background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)'
            }}
          ></div>
        </div>
      </div>

      <footer id="contact" className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Company Info */}
          {showLogo && (
            <div>
              <div className="mb-6">
                <Image
                  src="/logos/Screenshot 2025-09-07 130347.png"
                  alt="Founders Row Logo"
                  width={300}
                  height={150}
                  className="max-w-xs w-full h-auto mx-auto"
                  priority
                />
              </div>
              <div className="text-white text-base sm:text-lg leading-relaxed max-w-2xl font-bold font-montserrat text-center">
                <div>Capital. Creativity. Execution.</div>
                <div>100% Founder-Obsessed.</div>
              </div>
            </div>
          )}
          
          {/* Navigation Links */}
          <div className="space-y-6">
            {/* First row - all nav items except Contact */}
            <div className="flex flex-wrap justify-center gap-8">
              {navItems.slice(0, -1).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:underline text-sm sm:text-lg font-medium font-cinzel"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </a>
              ))}
            </div>
            
            {/* Second row - Contact button centered */}
            <div className="flex justify-center">
              <a
                href="/contact"
                className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Contact us"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 pt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/foundersrow.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow us on Instagram"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/founders-row/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow us on LinkedIn"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white w-full">
            <p className="text-white text-sm font-montserrat">
              © {currentYear} Founders Row. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
