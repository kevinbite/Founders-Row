const Platform = () => {
  return (
    <>
      <section className="pt-40 sm:pt-48 md:pt-56 lg:pt-64 pb-8 sm:pb-20 bg-black relative z-10">
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

        {/* Partners Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24 relative">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
            <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16">
              {/* Title */}
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
                  Founders Row Partners
                </h3>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
              </div>
              
              {/* Content */}
              <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat platform-text text-center mb-8">
                  Founders Row Partners is where conviction meets capital. This is our investment arm — where we put our own capital alongside aligned partners to back founder-led brands with the potential to scale into institutional assets. Sometimes we're majority owners, sometimes minority investors, but always operator-partners with skin in the game. Founders Row Partners brings the full weight of our platform — Advisory expertise, Media engine, and founder-level execution — to take brands from proven concept to scaled exits.
                </p>
                
                {/* Learn More Button */}
                <div className="flex justify-center">
                  <a 
                    href="/partners"
                    className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label="Learn more about Founders Row Partners"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24 relative">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
            <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16">
              {/* Title */}
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
                  Founders Row Advisory
                </h3>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
              </div>
              
              {/* Content */}
              <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat platform-text text-center mb-8">
                  Founders Row Advisory partners with brands on a non-investment basis, embedding our team, systems, and founder perspective directly into their business. Through customized scopes of work, founders gain access to a fractional C-suite — strategy, finance, operations, development, brand, and marketing expertise — without having to build it in-house. Advisory is hands-on, practical, and built around the challenges founders actually face: opening the next location, raising capital, scaling leadership, and preparing for outside investment.
                </p>
                
                {/* Learn More Button */}
                <div className="flex justify-center">
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

        {/* Media Section */}
        <div className="mb-12 sm:mb-16 relative">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
            <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16">
              {/* Title */}
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
                  Founders Row Media
                </h3>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
              </div>
              
              {/* Content */}
              <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat platform-text text-center mb-8">
                  Founders Row Media is the creative and growth engine of our platform. Through an exclusive partnership with a world class marketing agency, we deliver best in class brand strategy, creative production, and performance marketing that most emerging brands could never access at their size. FR Media levels the playing field — giving our companies the same caliber of storytelling, design, and demand generation as the biggest players in the industry. From day one, every Founders Row brand has an unfair advantage: a dedicated marketing powerhouse built to scale their reach, sharpen their voice, and accelerate growth.
                </p>
                
                {/* Learn More Button */}
                <div className="flex justify-center">
                  <a 
                    href="/media"
                    className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label="Learn more about Founders Row Media"
                  >
                    Learn More
                  </a>
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