import Image from 'next/image'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url('/images/atlanta-skyline-at-dusk.jpg')"}}
    >
      {/* Dark overlay for subtle background image */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Centered Logo and Quote */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8">
        <Image
          src="/logos/Screenshot 2025-09-07 130347.png"
          alt="Founders Row Logo"
          width={600}
          height={300}
          className="max-w-lg w-full h-auto"
          priority
        />
        
        <div className="max-w-2xl px-4">
          <blockquote className="text-white">
            <p className="text-xl sm:text-2xl font-light italic leading-relaxed mb-4 font-cinzel">
              "Live in the future, then build what's missing."
            </p>
            <cite className="text-lg sm:text-xl text-neutral-300 font-normal not-italic font-cinzel">
              – Paul Graham
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Hero
