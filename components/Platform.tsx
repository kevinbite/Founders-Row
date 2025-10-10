const Platform = () => {
  return (
    <>
      <section className="pt-48 sm:pt-56 md:pt-64 lg:pt-72 pb-8 sm:pb-20 bg-black relative z-10">
      {/* Simple but elegant background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 80px 80px',
          backgroundPosition: '0 0, 25px 25px'
        }}>
        </div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white font-cinzel mb-6 leading-tight tracking-wide">
            Our Platform
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
        </div>

        {/* Partners Section - Text Left, Image Right */}
        <div className="mb-16 sm:mb-20 lg:mb-24 relative">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Mobile: Image at top, Desktop: Text Content */}
              <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-cinzel leading-tight tracking-wide mb-6 text-center lg:text-left">
                  Founders Row Partners
                </h3>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mb-8 mx-auto lg:mx-0"></div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat mb-8 text-center lg:text-left">
                  Founders Row Partners is where conviction meets capital. We invest our own capital alongside aligned partners to back founder-led brands with institutional potential. Whether majority or minority, we're always operator-partners with skin in the game, bringing our full platform to scale brands from concept to exit.
                </p>
                
                <div className="flex justify-center lg:justify-start">
                  <a 
                    href="/partners"
                    className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label="Learn more about Founders Row Partners"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              
              {/* Mobile: Image at top, Desktop: Image */}
              <div className="relative h-64 lg:h-auto min-h-[400px] order-1 lg:order-2">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('/images/lead Braves Truist Park offices.png')",
                    filter: 'grayscale(100%)'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Section - Image Left, Text Right */}
        <div className="mb-16 sm:mb-20 lg:mb-24 relative">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Mobile: Image at top, Desktop: Image Left */}
              <div className="relative h-64 lg:h-auto min-h-[400px] order-1 lg:order-1">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('/images/tabernacle.jpg')",
                    filter: 'grayscale(100%)'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
              
              {/* Mobile: Text below image, Desktop: Text Right */}
              <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center order-2 lg:order-2 text-center lg:text-right">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
                  Founders Row Advisory
                </h3>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mb-8 mx-auto"></div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat mb-8">
                  Founders Row Advisory partners with brands on a non-investment basis, embedding our team and systems directly into their business. Founders gain access to fractional C-suite expertise—strategy, finance, operations, brand, and marketing—built around real challenges like scaling, raising capital, and preparing for investment.
                </p>
                
                <div className="flex justify-center lg:justify-end">
                  <a 
                    href="/advisory"
                    className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label="Learn more about Founders Row Advisory"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media Section - Text Left, Image Right */}
        <div className="mb-12 sm:mb-16 relative">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Mobile: Image at top, Desktop: Text Content */}
              <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-cinzel leading-tight tracking-wide mb-6 text-center lg:text-left">
                  Founders Row Media
                </h3>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mb-8 mx-auto lg:mx-0"></div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat mb-8 text-center lg:text-left">
                  Founders Row Media is the creative and growth engine of our platform. Through an exclusive partnership with a world-class marketing agency, we deliver enterprise-level brand strategy, creative production, and performance marketing that emerging brands typically can't access. From day one, every Founders Row brand has an unfair advantage.
                </p>
                
                <div className="flex justify-center lg:justify-start">
                  <a 
                    href="/media"
                    className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label="Learn more about Founders Row Media"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              
              {/* Mobile: Image at top, Desktop: Image */}
              <div className="relative h-64 lg:h-auto min-h-[400px] order-1 lg:order-2">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('/images/Ponce_City_Market_1.jpeg')",
                    filter: 'grayscale(100%)'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Platform