import Image from 'next/image'

interface FooterProps {
  showLogo?: boolean
}

const Footer = ({ showLogo = true }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Advisory', href: '/advisory' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer id="contact" className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
          <div className="flex flex-wrap justify-center gap-8">
            {navItems.map((item) => (
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

          {/* Copyright */}
          <div className="pt-8 border-t border-white w-full">
            <p className="text-white text-sm font-montserrat">
              © {currentYear} Founders Row. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
