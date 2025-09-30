const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url('/images/atlanta-skyline-at-dusk.jpg')"}}
    >
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 flex-1">
        {/* Main heading */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-wide font-cinzel">
            Capital. Creativity. Execution.
          </h1>
        </div>
        
        {/* Quote section */}
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-white">
            <p className="text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed mb-4 font-cinzel opacity-90">
              "Live in the future, then build what's missing."
            </p>
            <cite className="text-base sm:text-lg md:text-xl text-white/80 font-normal not-italic font-cinzel">
              – Paul Graham
            </cite>
          </blockquote>
        </div>
      </div>
      
      {/* Bottom dark overlay section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-32 sm:h-40"></div>
    </section>
  )
}

export default Hero
