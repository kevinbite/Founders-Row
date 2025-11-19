import Image from 'next/image'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-white"
    >
      {/* Main content - Logo centered */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <Image
          src="/logos/FR LOGO WITH SPADE (1).png"
          alt="Founders Row Logo"
          width={800}
          height={800}
          className="w-full max-w-2xl h-auto"
          priority
        />
      </div>
    </section>
  )
}

export default Hero
