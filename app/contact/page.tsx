import SiteHeader from '@/components/SiteHeader'
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <BackHome />

      {/* CTA Section */}
      <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-black relative overflow-hidden">
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
              Ready to Connect?
            </h2>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              We would love to hear your <span className="text-white font-medium">founder story</span>. Email us to do a Zoom with <span className="text-white font-medium">Jamie and the team</span>.
            </p>
          </div>
          
          <div className="relative inline-block">
            <a 
              href="mailto:founder@foundersrow.co"
              className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Email us at founder@foundersrow.co"
            >
              founder@foundersrow.co
            </a>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Description */}
            <div className="text-center lg:text-left space-y-6 flex flex-col justify-center">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                Whether you're interested in <span className="text-white font-medium">Advisory</span>, <span className="text-white font-medium">Partners</span>, or <span className="text-white font-medium">Media</span> services, we're here to help you build something extraordinary.
              </p>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                Every conversation starts with understanding your vision, challenges, and goals. We work selectively with founders who are ready to scale with <span className="text-white font-medium">structure, capital, and creative execution</span>.
              </p>
            </div>

            {/* Right Column - Our Services */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-6 sm:px-8 py-8 sm:py-12 text-center">
                <h3 className="text-xl sm:text-2xl font-light text-white font-cinzel mb-8 leading-tight tracking-wide">
                  Our Services
                </h3>
                <div className="space-y-6 text-left">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-white font-cinzel mb-2 text-sm sm:text-base">FR Advisory</h4>
                      <p className="text-neutral-300 font-montserrat text-xs sm:text-sm balanced-text leading-relaxed">
                        Operational partnerships for structure, strategy, and creative execution in the early years.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-white font-cinzel mb-2 text-sm sm:text-base">FR Partners</h4>
                      <p className="text-neutral-300 font-montserrat text-xs sm:text-sm balanced-text leading-relaxed">
                        Investment partnerships with carry-only structure and hands-on support for scaling.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-white font-cinzel mb-2 text-sm sm:text-base">FR Media</h4>
                      <p className="text-neutral-300 font-montserrat text-xs sm:text-sm balanced-text leading-relaxed">
                        Creative partnerships for brand amplification through performance marketing and storytelling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
