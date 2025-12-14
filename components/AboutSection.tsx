'use client'

const AboutSection = () => {
  return (
    <section className="relative bg-black pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 md:pb-8 lg:pb-10 mt-16 sm:mt-24 md:mt-20 lg:mt-16 z-40 overflow-visible">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 80px 80px',
          backgroundPosition: '0 0, 25px 25px'
        }}>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About content */}
        <div className="relative" style={{ zIndex: 1 }}>
          <div className="relative">
            <div className="px-8 md:px-12 lg:px-16 pb-12 md:pb-16 text-center">
              <div className="absolute bottom-full left-0 right-0 px-8 md:px-12 lg:px-16 pb-2">
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat">
                    Founded by entrepreneur and operator Jamie Weeks, Founders Row is a venture studio and platform partner built for founder-led consumer businesses. The firm partners with proven operators and early-stage concepts to help them scale thoughtfully—without sacrificing control, culture, or long-term&nbsp;value.
                  </p>
                  
                  <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat">
                    Founders Row operates through two complementary models: launching and incubating new brands from the ground up, and partnering with existing businesses to provide platform-level support across strategy, operations, capital planning, and growth. The firm is known for founder-first structures that preserve ownership while enabling disciplined expansion and clear paths to&nbsp;liquidity.
                  </p>
                  
                  <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat">
                    Headquartered in Atlanta, Founders Row is a founder-first alternative to traditional private equity, backing entrepreneurs with institutional support while allowing them to retain control and long-term&nbsp;upside.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutSection

