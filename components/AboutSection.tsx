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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat text-center">
            We are a founder-first investment platform based in Atlanta, Georgia, operating at the intersection of capital, creativity, and execution. Our model combines private equity discipline with creative studio agility.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat text-center">
            We believe great founders are business's most powerful force. We exist to sharpen their playbooks, amplify their vision, and build companies that endure.
          </p>
        </div>
      </div>

    </section>
  )
}

export default AboutSection

