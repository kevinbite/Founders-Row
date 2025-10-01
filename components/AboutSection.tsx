const AboutSection = () => {
  return (
    <section className="relative bg-black py-12 sm:py-16 md:py-20 lg:py-24 -mt-64 sm:-mt-80 md:-mt-96 lg:-mt-[28rem] z-40">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 md:space-y-8">
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat text-center">
            Founders Row was created by Jamie Weeks, a serial entrepreneur and investor who has spent the last two decades building, scaling, and exiting founder-led businesses. From launching and operating the world's largest Orangetheory Fitness franchise group to founding and growing Sweathouz into a national brand, Jamie has built his career on partnering with founders and proving what's possible when vision meets execution.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat italic text-center">
            Founders Row is the next chapter of that journey.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat text-center">
            We are a founder-first investment platform based in Atlanta, Georgia. We operate at the intersection of capital, creativity, and execution. Our model combines the discipline of private equity with the agility of a creative studio — giving founders the operational, financial, and brand-building support they need to scale quickly and sustainably.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat text-center">
            At our core, we believe great founders are the most important force in business. We exist to support them — to sharpen their playbooks, amplify their vision, and build companies that endure.
          </p>
        </div>
      </div>

    </section>
  )
}

export default AboutSection

