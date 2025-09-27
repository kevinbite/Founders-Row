import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-black relative">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.02) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 50%),
                             linear-gradient(135deg, rgba(255,255,255,0.01) 25%, transparent 25%),
                             linear-gradient(-135deg, rgba(255,255,255,0.01) 25%, transparent 25%)`,
            backgroundSize: '80px 80px, 100px 100px, 30px 30px, 30px 30px'
          }}>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-cinzel mb-8 leading-tight px-2">
            Contact Founders Row
          </h1>
          <div className="h-1 w-32 bg-neutral-400 mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              Ready to share your founder story? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="pt-8 pb-16 sm:py-20 bg-black relative">
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
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contact Details */}
            <div className="text-center lg:text-left space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-cinzel mb-6">
                  Get In Touch
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                  Whether you're interested in Advisory, Partners, or Media services, we're here to help you build something extraordinary.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel mb-4">
                    Founder Stories
                  </h3>
                  <p className="text-neutral-300 font-montserrat mb-4 balanced-text">
                    Share your journey and explore how we can support your vision.
                  </p>
                  <a 
                    href="mailto:founder@foundersrow.co" 
                    className="text-white hover:text-gray-200 underline font-medium text-base sm:text-lg font-montserrat"
                    aria-label="Email us at founder@foundersrow.co"
                  >
                    founder@foundersrow.co
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-cinzel mb-4 sm:mb-6">
                Our Services
              </h3>
              <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                <div>
                  <h4 className="font-semibold text-white font-cinzel mb-1 sm:mb-2 text-sm sm:text-base">FR Advisory</h4>
                  <p className="text-neutral-300 font-montserrat text-xs sm:text-sm balanced-text">
                    Operational partnerships for structure, strategy, and creative execution in the early years.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white font-cinzel mb-1 sm:mb-2 text-sm sm:text-base">FR Partners</h4>
                  <p className="text-neutral-300 font-montserrat text-xs sm:text-sm balanced-text">
                    Investment partnerships with carry-only structure and hands-on support for scaling.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white font-cinzel mb-1 sm:mb-2 text-sm sm:text-base">FR Media</h4>
                  <p className="text-neutral-300 font-montserrat text-xs sm:text-sm balanced-text">
                    Creative partnerships for brand amplification through performance marketing and storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-black relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cinzel mb-8 px-2">
            Ready to Connect?
          </h2>
          <div className="max-w-3xl mx-auto px-2 mb-8">
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              We would love to hear your founder story. Email us to do a Zoom with Jamie and the team.
            </p>
          </div>
          <a 
            href="mailto:founder@foundersrow.co"
            className="inline-block bg-white hover:bg-gray-100 text-black font-medium py-4 px-8 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black font-montserrat text-base sm:text-lg"
            aria-label="Email us at founder@foundersrow.co"
          >
            Email Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
