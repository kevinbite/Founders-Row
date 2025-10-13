import SiteHeader from '@/components/SiteHeader'
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'
import Image from 'next/image'

const AdvisoryPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <BackHome />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 bg-black relative overflow-hidden">
        {/* Background image with grayscale filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/tabernacle.jpg')",
            filter: 'grayscale(100%)'
          }}
        ></div>
        
        {/* Enhanced dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
        
        {/* Sophisticated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/[0.02] to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-white/[0.015] to-transparent blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="relative">
              {/* Decorative top accent */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <Image
                src="/logos/FR Advisory Logo.png?v=2"
                alt="FR Advisory Logo"
                width={400}
                height={200}
                className="max-w-sm w-full h-auto"
                priority
              />
              
              {/* Elegant underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              Founders Row Advisory partners with brands on a non-investment basis, embedding our team, systems, and founder perspective directly into their business. Through customized scopes of work, founders gain access to a <span className="text-white font-medium">fractional C-suite</span> — strategy, finance, operations, development, brand, and marketing expertise — without having to build it in-house. Advisory is hands-on, practical, and built around the challenges founders actually face: opening the next location, raising capital, scaling leadership, and preparing for outside investment.
            </p>
          </div>
        </div>
      </section>


      {/* What We Provide Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-white/[0.02] to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/[0.015] to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(30deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(150deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '120px 120px, 80px 80px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="relative inline-block">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
                What We Provide
              </h2>
              
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Fractional CFO */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-6 sm:px-8 py-8 sm:py-12 text-center">
                <h3 className="text-lg sm:text-xl font-light text-white font-cinzel mb-6 leading-tight tracking-wide">
                  Fractional<br />CFO
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text">
                  Financial planning, budgeting, cash flow management, and investor relations to keep your business on solid ground.
                </p>
              </div>
            </div>

            {/* Operational Expertise */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-6 sm:px-8 py-8 sm:py-12 text-center">
                <h3 className="text-lg sm:text-xl font-light text-white font-cinzel mb-6 leading-tight tracking-wide">
                  Operational<br />Expertise
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text">
                  Systems, processes, and strategic guidance to scale efficiently from startup to growth stage.
                </p>
              </div>
            </div>

            {/* Development Support */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-6 sm:px-8 py-8 sm:py-12 text-center">
                <h3 className="text-lg sm:text-xl font-light text-white font-cinzel mb-6 leading-tight tracking-wide">
                  Development<br />Support
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text">
                  Technical guidance, product development, and digital infrastructure to bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-radial from-white/[0.015] to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-radial from-white/[0.02] to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px, 80px 80px',
            backgroundPosition: '0 0, 25px 25px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="relative inline-block">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
                Our Approach
              </h2>
              
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                We embed directly into your business on a non-investment basis, bringing our complete team, systems, and founder perspective to your daily operations. <span className="text-white font-medium">This isn't consulting from the sidelines — it's true partnership.</span>
              </p>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                Through customized scopes of work, you gain access to <span className="text-white font-medium">fractional C-suite expertise</span> across strategy, finance, operations, development, brand, and marketing — capabilities that would typically cost hundreds of thousands to build in-house.
              </p>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                We focus on the real challenges founders face: opening the next location, raising capital, scaling leadership, and preparing for outside investment. Advisory serves as your operational foundation and potential pathway to FR Partners.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-6 sm:px-8 py-8 sm:py-12 text-center">
                <h3 className="text-xl sm:text-2xl font-light text-white font-cinzel mb-8 leading-tight tracking-wide">
                  Founder-First Partnership
                </h3>
                <div className="space-y-6 text-left">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-neutral-300 font-montserrat balanced-text leading-relaxed">
                      <span className="font-medium text-white">Selective Focus:</span> We work with only four companies at a time to ensure each founder gets the attention they deserve.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-neutral-300 font-montserrat balanced-text leading-relaxed">
                      <span className="font-medium text-white">Flexible Structure:</span> Choose between fee-based or equity-based partnerships based on what works best for your situation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-neutral-300 font-montserrat balanced-text leading-relaxed">
                      <span className="font-medium text-white">Growth Path:</span> Advisory serves as an incubator that may lead to FR Partners for continued support and capital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 pb-16 sm:pb-20 lg:pb-24 bg-black relative overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/[0.02] to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(-45deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 80px 80px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-12">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
              Ready for Operational Partnership?
            </h2>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              Get the structure, strategy, and creative execution you need in the early years with <span className="text-white font-medium">FR Advisory</span>.
            </p>
          </div>
          
          <div className="relative inline-block">
            <a 
              href="/contact"
              className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Navigate to Contact page to discuss Advisory partnership"
            >
              Work With Advisory
            </a>
          </div>
        </div>
      </section>

      <Footer showLogo={false} />
    </div>
  )
}

export default AdvisoryPage
