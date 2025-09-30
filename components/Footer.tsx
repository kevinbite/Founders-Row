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
    <>
      {/* Triangular Separator Above Footer */}
      <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden bg-black mt-0">
        {/* Complex layered triangular composition - Extended width */}
        <div className="absolute inset-0 -mx-8 sm:-mx-16 md:-mx-24">
          
          {/* Primary abstract triangle spanning beyond viewport */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120%] h-[140%] bg-black"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                background: `linear-gradient(180deg, 
                  rgba(140, 140, 140, 0.95) 0%, 
                  rgba(115, 115, 115, 0.8) 8%, 
                  rgba(96, 96, 96, 0.65) 18%, 
                  rgba(82, 82, 82, 0.5) 28%, 
                  rgba(70, 70, 70, 0.4) 38%, 
                  rgba(58, 58, 58, 0.3) 45%, 
                  rgba(45, 45, 45, 0.2) 50%, 
                  rgba(32, 32, 32, 0.12) 55%, 
                  rgba(20, 20, 20, 0.08) 60%, 
                  rgba(12, 12, 12, 0.05) 65%, 
                  rgba(6, 6, 6, 0.03) 70%, 
                  rgba(2, 2, 2, 0.01) 75%, 
                  rgba(0, 0, 0, 0) 80%, 
                  rgba(0, 0, 0, 0) 100%)`
              }}
            ></div>
          </div>
          
          {/* Secondary wide triangles */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-0 left-[25%] transform -translate-x-1/2 w-[100%] h-[140%] bg-black"
              style={{
                clipPath: 'polygon(50% 0%, 5% 100%, 95% 100%)',
                background: `linear-gradient(180deg, 
                  rgba(120, 120, 120, 0.85) 0%, 
                  rgba(96, 96, 96, 0.7) 10%, 
                  rgba(77, 77, 77, 0.55) 22%, 
                  rgba(61, 61, 61, 0.42) 35%, 
                  rgba(48, 48, 48, 0.3) 42%, 
                  rgba(35, 35, 35, 0.2) 48%, 
                  rgba(24, 24, 24, 0.12) 52%, 
                  rgba(15, 15, 15, 0.08) 56%, 
                  rgba(8, 8, 8, 0.04) 60%, 
                  rgba(3, 3, 3, 0.02) 65%, 
                  rgba(0, 0, 0, 0) 70%, 
                  rgba(0, 0, 0, 0) 100%)`
              }}
            ></div>
          </div>
          
          <div className="absolute inset-0">
            <div 
              className="absolute top-0 left-[75%] transform -translate-x-1/2 w-[100%] h-[140%] bg-black"
              style={{
                clipPath: 'polygon(50% 0%, 5% 100%, 95% 100%)',
                background: `linear-gradient(180deg, 
                  rgba(120, 120, 120, 0.85) 0%, 
                  rgba(96, 96, 96, 0.7) 10%, 
                  rgba(77, 77, 77, 0.55) 22%, 
                  rgba(61, 61, 61, 0.42) 35%, 
                  rgba(48, 48, 48, 0.3) 42%, 
                  rgba(35, 35, 35, 0.2) 48%, 
                  rgba(24, 24, 24, 0.12) 52%, 
                  rgba(15, 15, 15, 0.08) 56%, 
                  rgba(8, 8, 8, 0.04) 60%, 
                  rgba(3, 3, 3, 0.02) 65%, 
                  rgba(0, 0, 0, 0) 70%, 
                  rgba(0, 0, 0, 0) 100%)`
              }}
            ></div>
          </div>
          
          {/* Additional layered triangles for complexity */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-0 left-[15%] transform -translate-x-1/2 w-[90%] h-[140%] bg-black"
              style={{
                clipPath: 'polygon(50% 0%, 8% 100%, 92% 100%)',
                background: `linear-gradient(180deg, 
                  rgba(105, 105, 105, 0.75) 0%, 
                  rgba(84, 84, 84, 0.6) 12%, 
                  rgba(67, 67, 67, 0.48) 25%, 
                  rgba(52, 52, 52, 0.38) 38%, 
                  rgba(39, 39, 39, 0.28) 45%, 
                  rgba(28, 28, 28, 0.2) 50%, 
                  rgba(18, 18, 18, 0.12) 55%, 
                  rgba(10, 10, 10, 0.06) 60%, 
                  rgba(4, 4, 4, 0.03) 65%, 
                  rgba(0, 0, 0, 0) 70%, 
                  rgba(0, 0, 0, 0) 100%)`
              }}
            ></div>
          </div>
          
          <div className="absolute inset-0">
            <div 
              className="absolute top-0 left-[85%] transform -translate-x-1/2 w-[90%] h-[140%] bg-black"
              style={{
                clipPath: 'polygon(50% 0%, 8% 100%, 92% 100%)',
                background: `linear-gradient(180deg, 
                  rgba(105, 105, 105, 0.75) 0%, 
                  rgba(84, 84, 84, 0.6) 12%, 
                  rgba(67, 67, 67, 0.48) 25%, 
                  rgba(52, 52, 52, 0.38) 38%, 
                  rgba(39, 39, 39, 0.28) 45%, 
                  rgba(28, 28, 28, 0.2) 50%, 
                  rgba(18, 18, 18, 0.12) 55%, 
                  rgba(10, 10, 10, 0.06) 60%, 
                  rgba(4, 4, 4, 0.03) 65%, 
                  rgba(0, 0, 0, 0) 70%, 
                  rgba(0, 0, 0, 0) 100%)`
              }}
            ></div>
          </div>
          
          {/* Medium complexity triangles */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-0 left-[35%] transform -translate-x-1/2 w-[80%] h-[140%] bg-black"
              style={{
                clipPath: 'polygon(50% 0%, 12% 100%, 88% 100%)',
                background: `linear-gradient(180deg, 
                  rgba(92, 92, 92, 0.7) 0%, 
                  rgba(74, 74, 74, 0.55) 15%, 
                  rgba(58, 58, 58, 0.43) 30%, 
                  rgba(44, 44, 44, 0.33) 40%, 
                  rgba(32, 32, 32, 0.24) 48%, 
                  rgba(22, 22, 22, 0.16) 52%, 
                  rgba(13, 13, 13, 0.1) 56%, 
                  rgba(6, 6, 6, 0.05) 60%, 
                  rgba(0, 0, 0, 0) 65%, 
                  rgba(0, 0, 0, 0) 100%)`
              }}
            ></div>
          </div>
          
          <div className="absolute inset-0">
            <div 
              className="absolute top-0 left-[65%] transform -translate-x-1/2 w-[80%] h-[140%] bg-black"
              style={{
                clipPath: 'polygon(50% 0%, 12% 100%, 88% 100%)',
                background: `linear-gradient(180deg, 
                  rgba(92, 92, 92, 0.7) 0%, 
                  rgba(74, 74, 74, 0.55) 15%, 
                  rgba(58, 58, 58, 0.43) 30%, 
                  rgba(44, 44, 44, 0.33) 40%, 
                  rgba(32, 32, 32, 0.24) 48%, 
                  rgba(22, 22, 22, 0.16) 52%, 
                  rgba(13, 13, 13, 0.1) 56%, 
                  rgba(6, 6, 6, 0.05) 60%, 
                  rgba(0, 0, 0, 0) 65%, 
                  rgba(0, 0, 0, 0) 100%)`
              }}
            ></div>
          </div>
          
        </div>
        
        {/* Perfect seamless blending overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
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
    </>
  )
}

export default Footer
