'use client'

import Image from 'next/image'

const HeroSection = () => {
  return (
    <section 
      aria-label="Hero" 
      className="relative h-screen flex justify-center -mt-20 bg-black"
    >
      {/* Flickering white gradient circle that seamlessly fades to black */}
      <div 
        className="absolute top-[42%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] md:w-[650px] md:h-[650px] rounded-full animate-flicker"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(250,250,250,0.95) 10%, rgba(245,245,245,0.88) 15%, rgba(240,240,240,0.82) 20%, rgba(220,220,220,0.68) 30%, rgba(180,180,180,0.48) 40%, rgba(140,140,140,0.32) 50%, rgba(100,100,100,0.18) 60%, rgba(60,60,60,0.09) 70%, rgba(30,30,30,0.04) 80%, rgba(0,0,0,0) 90%)',
          filter: 'blur(30px)'
        }}
      />

      {/* Main content - Logo centered and larger - positioned to match the glow */}
      <div className="absolute top-[42%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center px-2 sm:px-6 lg:px-8">
        <Image
          src="/logos/FR LOGO WITH SPADE (1).png"
          alt="Founders Row Logo"
          width={1200}
          height={1200}
          className="w-full max-w-6xl lg:max-w-7xl h-auto"
          priority
        />
      </div>

      <style jsx>{`
        @keyframes flicker {
          0%, 100% {
            opacity: 1;
          }
          2% {
            opacity: 0.92;
          }
          4% {
            opacity: 1;
          }
          8% {
            opacity: 0.88;
          }
          12% {
            opacity: 1;
          }
          18% {
            opacity: 0.95;
          }
          20% {
            opacity: 1;
          }
          32% {
            opacity: 0.9;
          }
          34% {
            opacity: 1;
          }
          42% {
            opacity: 0.93;
          }
          44% {
            opacity: 1;
          }
          56% {
            opacity: 0.91;
          }
          58% {
            opacity: 1;
          }
          72% {
            opacity: 0.94;
          }
          74% {
            opacity: 1;
          }
          88% {
            opacity: 0.89;
          }
          92% {
            opacity: 1;
          }
        }

        .animate-flicker {
          animation: flicker 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
