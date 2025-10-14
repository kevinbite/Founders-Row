const AboutSection = () => {
  return (
    <section className="relative bg-black py-12 sm:py-16 md:py-20 lg:py-24 -mt-80 sm:-mt-80 md:-mt-64 lg:-mt-20 z-40">
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
        {/* About Tile - Matching Platform Styling */}
        <div className="relative">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
            <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center text-center">
              <div className="space-y-6 sm:space-y-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat">
                  We are a founder-first investment platform based in Atlanta, Georgia, operating at the intersection of capital, creativity, and execution. Our model combines private equity discipline with creative studio agility.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat">
                  We believe great founders are business's most powerful force. We exist to sharpen their playbooks, amplify their vision, and build companies that endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutSection

