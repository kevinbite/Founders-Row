import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-black relative">
        {/* Background image with grayscale filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/lead Braves Truist Park offices.png')",
            filter: 'grayscale(100%)'
          }}
        ></div>
        
        {/* Dark overlay for subtle background image */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logos/FR Partners Logo.png?v=2"
              alt="FR Partners Logo"
              width={400}
              height={200}
              className="max-w-sm w-full h-auto"
              priority
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-2">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              FR Partners is the investment arm of Founders Row. Each fund is structured deal-by-deal through the FPV, allowing maximum alignment between founders, capital partners, and the Founders Row team.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Approach Section */}
      <section className="py-16 sm:py-20 bg-black relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 0%, transparent 50%),
                             linear-gradient(45deg, rgba(255,255,255,0.01) 25%, transparent 25%),
                             linear-gradient(-45deg, rgba(255,255,255,0.01) 25%, transparent 25%)`,
            backgroundSize: '60px 60px, 80px 80px, 20px 20px, 20px 20px'
          }}>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cinzel mb-6 px-2">
              Investment Approach
            </h2>
            <div className="h-1 w-24 bg-neutral-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                We invest in founder-led brands - majority or minority - with a carry-only structure and no management fees.
              </p>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                Each deal is designed with the right capital partners or at times, entirely with our own capital.
              </p>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                The goal is always the same: to scale founder-led brands with hands-on support in finance, development, operations, and marketing.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-cinzel mb-6">
                FPV Structure
              </h3>
              <div className="space-y-4 text-left">
                <p className="text-neutral-300 font-montserrat leading-relaxed balanced-text">
                  <span className="font-semibold text-white">Deal-by-Deal:</span> Each fund is structured through the Founder Partnership Vehicle (FPV) for maximum alignment.
                </p>
                <p className="text-neutral-300 font-montserrat leading-relaxed balanced-text">
                  <span className="font-semibold text-white">Flexible Capital:</span> Some funds include outside capital partners, others are built solely within Founders Row.
                </p>
                <p className="text-neutral-300 font-montserrat leading-relaxed balanced-text">
                  <span className="font-semibold text-white">Carry-Only:</span> No management fees - we only succeed when you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-black relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cinzel mb-8 px-2">
            Ready to Scale Your Brand?
          </h2>
          <div className="max-w-3xl mx-auto px-2 mb-8">
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              Partner with FR Partners to scale your founder-led brand with aligned capital and hands-on support.
            </p>
          </div>
          <a 
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-black font-medium py-4 px-8 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black font-montserrat text-base sm:text-lg"
            aria-label="Navigate to Contact page to discuss Partners investment"
          >
            Explore Partnership
          </a>
        </div>
      </section>

      <Footer showLogo={false} />
    </div>
  )
}

export default PartnersPage
