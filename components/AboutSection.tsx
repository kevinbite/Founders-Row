'use client'

import AnimateOnScroll from './ui/AnimateOnScroll'

export default function AboutSection() {
  return (
    <section id="about" className="bg-black -mt-72 pt-0 pb-16 sm:-mt-20 sm:pt-0 sm:pb-24 lg:-mt-16 lg:pt-0 lg:pb-16 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main statement */}
        <AnimateOnScroll animation="fadeInUp">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 lg:mb-28">
            <h2 className="metallic-text text-lg sm:text-xl md:text-2xl leading-relaxed text-balance">
              We partner with operators and early-stage founders to help them 
              scale thoughtfully—without sacrificing control, culture, or long-term value.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          
          {/* Left column - How We Work */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="text-center">
              <p className="font-body text-white/30 text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6">How We Work</p>
              <h3 className="metallic-text text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 leading-snug">
                Two models.<br />One mission.
              </h3>
              <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-balance">
                We build new brands from scratch. We partner with existing businesses to 
                provide support across strategy, operations, and growth.
              </p>
              <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed text-balance">
                Our structures preserve ownership—and we only partner where we can 
                genuinely add value beyond capital.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right column - Why We're Different */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div className="text-center">
              <p className="font-body text-white/30 text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6">Why We&apos;re Different</p>
              <h3 className="metallic-text text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 leading-snug">
                A founder-first alternative.
              </h3>
              <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-balance">
                Traditional PE takes control. We don&apos;t. We back entrepreneurs with 
                institutional support while allowing them to retain control and long-term upside.
              </p>
              <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed text-balance">
                We&apos;re operators who&apos;ve built, scaled, and exited—bringing real 
                experience to every partnership, not just a check.
              </p>
            </div>
          </AnimateOnScroll>
        </div>


      </div>
    </section>
  )
}
