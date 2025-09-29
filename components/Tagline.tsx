const Tagline = () => {
  return (
    <section className="pt-4 pb-16 sm:pt-6 sm:pb-20 bg-black relative">
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
            Founders Row is a next-generation brand builder. We bring the discipline of private equity, the empathy of founder-led advisory, and the firepower of a world-class creative studio. We exist for one reason: to help founders go further, faster. We are producers for founders the way Rick Rubin and Jimmy Iovine produced some of the greatest musicians of our time — shaping, amplifying, and pushing them to greatness. (And yes, those guys are our idols.)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Tagline
