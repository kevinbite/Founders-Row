const Platform = () => {
  return (
    <section className="py-8 sm:py-20 bg-black relative">
      {/* Subtle texture overlay */}
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-cinzel mb-4 sm:mb-6 px-2">
            Our Platform
          </h2>
          <div className="h-1 w-24 bg-neutral-400 mx-auto"></div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Founders Row Advisory */}
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-cinzel mb-3 sm:mb-4 px-2">
                Founders Row Advisory
              </h3>
              <div className="h-0.5 w-16 bg-neutral-400 mx-auto"></div>
            </div>
            
            <div className="text-neutral-300 font-montserrat leading-relaxed">
              <p className="text-xs sm:text-sm md:text-base platform-text">
                Founders Row Advisory partners with brands on a non-investment basis, embedding our team, systems, and founder perspective directly into their business. Through customized scopes of work, founders gain access to a fractional C-suite — strategy, finance, operations, development, brand, and marketing expertise — without having to build it in-house. Advisory is hands-on, practical, and built around the challenges founders actually face: opening the next location, raising capital, scaling leadership, and preparing for outside investment.
              </p>
            </div>
          </div>

          {/* Founders Row Partners */}
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-cinzel mb-3 sm:mb-4 px-2">
                Founders Row Partners
              </h3>
              <div className="h-0.5 w-16 bg-neutral-400 mx-auto"></div>
            </div>
            
            <div className="text-neutral-300 font-montserrat leading-relaxed">
              <p className="text-xs sm:text-sm md:text-base platform-text">
                Founders Row Partners is where conviction meets capital. This is our investment arm — where we put our own capital alongside aligned partners to back founder-led brands with the potential to scale into institutional assets. Sometimes we're majority owners, sometimes minority investors, but always operator-partners with skin in the game. Founders Row Partners brings the full weight of our platform — Advisory expertise, Media engine, and founder-level execution — to take brands from proven concept to scaled exits.
              </p>
            </div>
          </div>

          {/* Founders Row Media */}
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-cinzel mb-3 sm:mb-4 px-2">
                <div>Founders Row</div>
                <div>Media</div>
              </h3>
              <div className="h-0.5 w-16 bg-neutral-400 mx-auto"></div>
            </div>
            
            <div className="text-neutral-300 font-montserrat leading-relaxed">
              <p className="text-xs sm:text-sm md:text-base platform-text">
                Founders Row Media is the creative and growth engine of our platform. Through an exclusive partnership with a world class marketing agency, we deliver best in class brand strategy, creative production, and performance marketing that most emerging brands could never access at their size. FR Media levels the playing field — giving our companies the same caliber of storytelling, design, and demand generation as the biggest players in the industry. From day one, every Founders Row brand has an unfair advantage: a dedicated marketing powerhouse built to scale their reach, sharpen their voice, and accelerate growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center max-w-4xl mx-auto px-2">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 font-montserrat leading-relaxed balanced-text">
            We operate at the intersection of capital, creativity, and execution. Part investment firm. Part creative producer. 100% founder-obsessed.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Platform
