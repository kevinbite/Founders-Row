const ContactSection = () => {
  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 bg-black relative overflow-hidden scroll-mt-16">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/[0.02] to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(-45deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 80px 80px'
          }}></div>
        </div>
        
          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light font-cinzel leading-tight tracking-wide mb-2 text-white"
              style={{
                textShadow: '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.7), 0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.15), 0 0 160px rgba(255,255,255,0.08)'
              }}
            >
              Let's Connect
            </h2>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-6 text-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-300 leading-relaxed font-montserrat">
              We would love to hear your <span className="text-white font-medium">founder story</span>.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-300 leading-relaxed font-montserrat">
              Email us to do a Zoom with <span className="text-white font-medium">Jamie and the team</span>.
            </p>
          </div>
          
          <div className="relative inline-block">
            <a 
              href="mailto:founder@foundersrow.co"
              className="text-sm sm:text-lg font-cinzel font-light metallic-glow-text hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-md"
              aria-label="Email us at founder@foundersrow.co"
              style={{
                background: 'linear-gradient(135deg, #E8E8E8 0%, #FFFFFF 25%, #D1D1D1 50%, #FFFFFF 75%, #E8E8E8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3), 0 0 90px rgba(255,255,255,0.2)',
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4)) drop-shadow(0 0 40px rgba(255,255,255,0.2))'
              }}
            >
              founder@foundersrow.co
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection

