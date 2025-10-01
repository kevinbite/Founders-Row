const WhyWeExist = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32 z-40">
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
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
            Why Founders Row Exists
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8">
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat italic text-center">
            Behind every legendary album is a producer.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat text-center">
            The artist may write the songs, sing the lyrics, and carry the vision — but the producer shapes the sound, builds the structure, and pulls the very best out of the artist. They bring the right players into the room, make the hard calls in the studio, and turn raw talent into something timeless. Without them, the music might stay a demo. With them, it goes platinum.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat italic font-medium text-center pt-4">
            That's how we view founders.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat text-center">
            At Founders Row, the founder is the artist — the obsessed visionary with grit, fire, and a story that matters. We are the producer — the ones who sit behind the glass, amplifying your vision, sharpening your playbook, and bringing the right capital, creativity, and execution to the table.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat text-center">
            Because capital alone doesn't create greatness. Just like a studio without a producer won't make a hit record, a brand without the right partner won't reach its full potential.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-white font-medium leading-relaxed font-montserrat text-center pt-4">
            We exist to help founders scale their vision into something enduring.
          </p>
        </div>
      </div>

      {/* Skyline Reveal Section */}
      <div className="absolute -bottom-32 sm:-bottom-40 md:-bottom-48 lg:-bottom-56 left-0 right-0 h-64 sm:h-72 md:h-80 lg:h-96 z-50 overflow-hidden">
        {/* Skyline Image with Gradient Masks */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/towering-buildings-in-atlanta-ur1eglcel1q7op52.jpg')",
            backgroundPosition: 'center 30%'
          }}
        >
          {/* Top fade to black */}
          <div 
            className="absolute inset-x-0 top-0 h-32 sm:h-40 md:h-48"
            style={{ 
              background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 100%)'
            }}
          ></div>
          
          {/* Bottom fade to black */}
          <div 
            className="absolute inset-x-0 bottom-0 h-32 sm:h-40 md:h-48"
            style={{ 
              background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 100%)'
            }}
          ></div>
          
          {/* Left fade */}
          <div 
            className="absolute inset-y-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48"
            style={{ 
              background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 100%)'
            }}
          ></div>
          
          {/* Right fade */}
          <div 
            className="absolute inset-y-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48"
            style={{ 
              background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 100%)'
            }}
          ></div>
          
          {/* Overall darkening overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
    </section>
  )
}

export default WhyWeExist

