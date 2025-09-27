const Tagline = () => {
  return (
    <section className="py-16 sm:py-20 bg-black relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.02) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 50%),
                           linear-gradient(135deg, rgba(255,255,255,0.01) 25%, transparent 25%),
                           linear-gradient(-135deg, rgba(255,255,255,0.01) 25%, transparent 25%)`,
          backgroundSize: '80px 80px, 100px 100px, 30px 30px, 30px 30px'
        }}>
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Tagline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-cinzel mb-6 sm:mb-8 leading-tight px-2">
          Capital. Creativity. Execution.
        </h2>
        
        {/* Decorative line */}
        <div className="h-1 w-32 bg-neutral-400 mx-auto mb-8"></div>
        
        {/* Content paragraph */}
        <div className="text-neutral-300 font-montserrat leading-relaxed max-w-3xl mx-auto px-2">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 balanced-text">
            We are a new model for building brands. Founders Row combines the rigor of private equity, the insight of founder-led advisory, and the reach of a modern creative studio. Our mission is simple; back ambitious founders and help them scale enduring companies.
          </p>
          
          {/* CTA Button */}
          <div className="mt-6 sm:mt-8">
            <a 
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-black font-medium py-3 sm:py-4 px-6 sm:px-8 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black font-montserrat text-sm sm:text-base md:text-lg"
              aria-label="Navigate to Contact page to work with us"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tagline
