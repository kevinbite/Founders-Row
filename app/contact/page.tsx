import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-black relative overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/[0.02] to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-white/[0.015] to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(-45deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 80px 80px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-12">
            {/* Decorative top accent */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
              Contact Founders Row
            </h1>
            
            {/* Elegant underline */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              Ready to share your <span className="text-white font-medium">founder story</span>? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Triangular Separator */}
      <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden bg-transparent -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
        
        <div className="absolute inset-0 -mx-8 sm:-mx-16 md:-mx-24">
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
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      {/* Contact Information Section */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Details */}
            <div className="text-center lg:text-left space-y-8 sm:space-y-10">
              <div>
                <div className="relative inline-block mb-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
                    Get In Touch
                  </h2>
                  
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                </div>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                  Whether you're interested in <span className="text-white font-medium">Advisory</span>, <span className="text-white font-medium">Partners</span>, or <span className="text-white font-medium">Media</span> services, we're here to help you build something extraordinary.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  
                  <div className="px-6 sm:px-8 py-8 sm:py-10 text-center lg:text-left">
                    <h3 className="text-lg sm:text-xl font-light text-white font-cinzel mb-4 leading-tight tracking-wide">
                      Founder Stories
                    </h3>
                    <p className="text-neutral-300 font-montserrat mb-6 balanced-text leading-relaxed">
                      Share your journey and explore how we can support your vision.
                    </p>
                    <a 
                      href="mailto:founder@foundersrow.co" 
                      className="inline-flex items-center text-white hover:text-neutral-200 font-medium text-base sm:text-lg font-montserrat transition-all duration-300 group"
                      aria-label="Email us at founder@foundersrow.co"
                    >
                      <span className="mr-2">founder@foundersrow.co</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
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

      {/* Triangular Separator */}
      <div className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
        
        {/* Top Triangular Separator */}
        <div className="relative h-16 sm:h-20 md:h-24 lg:h-28 overflow-hidden bg-black mb-8 sm:mb-12">
          <div className="absolute inset-0 -mx-4 sm:-mx-8">
            
            {/* Inverted triangles pointing down */}
            <div className="absolute inset-0">
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] h-full bg-black"
                style={{
                  clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
                  background: `linear-gradient(0deg, 
                    rgba(120, 120, 120, 0.8) 0%, 
                    rgba(96, 96, 96, 0.65) 12%, 
                    rgba(77, 77, 77, 0.5) 25%, 
                    rgba(61, 61, 61, 0.38) 40%, 
                    rgba(45, 45, 45, 0.28) 50%, 
                    rgba(32, 32, 32, 0.18) 60%, 
                    rgba(20, 20, 20, 0.1) 70%, 
                    rgba(0, 0, 0, 0) 80%, 
                    rgba(0, 0, 0, 0) 100%)`
                }}
              ></div>
            </div>
            
            <div className="absolute inset-0">
              <div 
                className="absolute bottom-0 left-[30%] transform -translate-x-1/2 w-[80%] h-full bg-black"
                style={{
                  clipPath: 'polygon(50% 100%, 10% 0%, 90% 0%)',
                  background: `linear-gradient(0deg, 
                    rgba(105, 105, 105, 0.7) 0%, 
                    rgba(84, 84, 84, 0.55) 15%, 
                    rgba(67, 67, 67, 0.42) 30%, 
                    rgba(52, 52, 52, 0.32) 45%, 
                    rgba(39, 39, 39, 0.22) 55%, 
                    rgba(28, 28, 28, 0.14) 65%, 
                    rgba(18, 18, 18, 0.08) 75%, 
                    rgba(0, 0, 0, 0) 85%, 
                    rgba(0, 0, 0, 0) 100%)`
                }}
              ></div>
            </div>
            
            <div className="absolute inset-0">
              <div 
                className="absolute bottom-0 left-[70%] transform -translate-x-1/2 w-[80%] h-full bg-black"
                style={{
                  clipPath: 'polygon(50% 100%, 10% 0%, 90% 0%)',
                  background: `linear-gradient(0deg, 
                    rgba(105, 105, 105, 0.7) 0%, 
                    rgba(84, 84, 84, 0.55) 15%, 
                    rgba(67, 67, 67, 0.42) 30%, 
                    rgba(52, 52, 52, 0.32) 45%, 
                    rgba(39, 39, 39, 0.22) 55%, 
                    rgba(28, 28, 28, 0.14) 65%, 
                    rgba(18, 18, 18, 0.08) 75%, 
                    rgba(0, 0, 0, 0) 85%, 
                    rgba(0, 0, 0, 0) 100%)`
                }}
              ></div>
            </div>
            
          </div>
        </div>
      </div>

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
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-lg text-white hover:text-neutral-200 font-medium font-montserrat transition-all duration-300 group text-base sm:text-lg"
              aria-label="Email us at founder@foundersrow.co"
            >
              <span className="mr-2">Email Us</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
