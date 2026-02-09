'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import GlowButton from '@/components/ui/GlowButton'
import Image from 'next/image'

const companies = [
  { name: 'SweatHouz', category: 'Recovery', logo: '/logos/portfolio/swthz_logo.png', logoSize: 'large' },
  { name: 'SculptHouse', category: 'Fitness', logo: '/logos/portfolio/Beige Rustic Bakery Bake House Logo copy.png', logoSize: 'large' },
  { name: 'Baking Social', category: 'Food & Beverage', logo: '/logos/portfolio/Beige Rustic Bakery Bake House Logo.png', logoSize: 'large' },
  { name: 'Hotbox Pretzels', category: 'DTC Food', logo: '/logos/portfolio/Oval HBP Sticker.png', logoSize: 'large' },
  { name: 'Elite Picks', category: 'Sports Analytics', logo: '/logos/portfolio/elite-picks.png', logoSize: 'small' },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-3">Portfolio</p>
            <h1 className="metallic-text text-4xl sm:text-5xl mb-8">Our Companies</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-20 sm:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 justify-items-center">
            {companies.map((company, i) => (
              <AnimateOnScroll key={company.name} animation="fadeInUp" delay={i * 50}>
                {/* Glow Card - same style as homepage carousel */}
                <div className="w-[150px] sm:w-[220px] h-[210px] sm:h-[300px] rounded-2xl relative overflow-visible">
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
                      {i + 2}
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
                      {i + 2}
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
                          ? "w-12 h-12 sm:w-24 sm:h-24 mb-1 sm:mb-2" 
                          : "w-16 h-16 sm:w-36 sm:h-36 -mb-1 sm:-mb-2" 
                        : "w-10 h-10 sm:w-20 sm:h-20 mb-2 sm:mb-4"
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
                    <h3 className="font-heading text-[11px] sm:text-lg font-semibold text-center text-black/80 tracking-wide uppercase">
                      {company.name}
                    </h3>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-20 sm:py-24 lg:pt-12 lg:pb-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-3">Contact</p>
            <h2 className="metallic-text text-3xl sm:text-4xl mb-6">Let&apos;s Connect</h2>
            <p className="font-body text-white/50 text-base sm:text-lg mb-10">
              We would love to hear your founder story.<br />
              Email us to do a Zoom with Jamie and the team.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <GlowButton href="mailto:founder@foundersrow.co">
              founder@foundersrow.co
            </GlowButton>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
