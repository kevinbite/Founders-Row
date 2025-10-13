import SiteHeader from '@/components/SiteHeader'
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'
import Image from 'next/image'

const PartnersPage = () => {
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
            backgroundImage: "url('/images/lead Braves Truist Park offices.png')",
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
                src="/logos/FR Partners Logo.png?v=2"
                alt="FR Partners Logo"
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
              Founders Row Partners is where <span className="text-white font-medium">conviction meets capital</span>. This is our investment arm — where we put our own capital alongside aligned partners to back founder-led brands with the potential to scale into institutional assets. Sometimes we're majority owners, sometimes minority investors, but always <span className="text-white font-medium">operator-partners with skin in the game</span>. Founders Row Partners brings the full weight of our platform — Advisory expertise, Media engine, and founder-level execution — to take brands from proven concept to scaled exits.
            </p>
          </div>
        </div>
      </section>


      {/* Investment Approach Section */}
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
                Investment Approach
              </h2>
              
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                This is where <span className="text-white font-medium">conviction meets capital</span>. We put our own capital alongside aligned partners to back founder-led brands with the potential to scale into institutional assets. Every investment decision is driven by our belief in the founder and their vision.
              </p>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                Whether we're majority owners or minority investors, we're always <span className="text-white font-medium">operator-partners with skin in the game</span>. This isn't passive capital — it's active partnership with the full weight of our platform behind every brand.
              </p>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                We bring Advisory expertise, Media engine firepower, and founder-level execution to take brands from proven concept to scaled exits. Our goal is always institutional-quality growth with founder-led authenticity.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-6 sm:px-8 py-8 sm:py-12 text-center">
                <h3 className="text-xl sm:text-2xl font-light text-white font-cinzel mb-8 leading-tight tracking-wide">
                  FPV Structure
                </h3>
                <div className="space-y-6 text-left">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-neutral-300 font-montserrat balanced-text leading-relaxed">
                      <span className="font-medium text-white">Deal-by-Deal:</span> Each fund is structured through the Founder Partnership Vehicle (FPV) for maximum alignment.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-neutral-300 font-montserrat balanced-text leading-relaxed">
                      <span className="font-medium text-white">Flexible Capital:</span> Some funds include outside capital partners, others are built solely within Founders Row.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-neutral-300 font-montserrat balanced-text leading-relaxed">
                      <span className="font-medium text-white">Carry-Only:</span> No management fees - we only succeed when you succeed.
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
              Ready to Scale Your Brand?
            </h2>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              Partner with <span className="text-white font-medium">FR Partners</span> to scale your founder-led brand with aligned capital and hands-on support.
            </p>
          </div>
          
          <div className="relative inline-block">
            <a 
              href="/contact"
              className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Navigate to Contact page to discuss Partners investment"
            >
              Explore Partnership
            </a>
          </div>
        </div>
      </section>

      <Footer showLogo={false} />
    </div>
  )
}

export default PartnersPage
