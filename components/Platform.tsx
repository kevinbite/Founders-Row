const Platform = () => {
  return (
    <section className="py-20 bg-black relative">
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
              <p className="text-xs sm:text-sm md:text-base balanced-text">
                The advisory arm of Founders Row. We provide what most founders lack: a fractional CFO, operational expertise, development support, and direct access to Jamie Weeks. From opening new locations to raising capital to negotiating with private equity, we are your founder-first partner.
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
              <p className="text-xs sm:text-sm md:text-base balanced-text">
                The investment arm of Founders Row. We invest in founder-led brands - majority or minority - with a carry-only structure and no management fees. Each deal is designed with the right capital partners or at times, entirely with our own capital.
              </p>
            </div>
          </div>

          {/* Founders Row Media */}
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-cinzel mb-3 sm:mb-4 px-2">
                Founders Row<br />Media
              </h3>
              <div className="h-0.5 w-16 bg-neutral-400 mx-auto"></div>
            </div>
            
            <div className="text-neutral-300 font-montserrat leading-relaxed">
              <p className="text-xs sm:text-sm md:text-base balanced-text">
                The creative arm of Founders Row. We amplify founders and brands through influencer management, performance marketing, and brand storytelling.
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
