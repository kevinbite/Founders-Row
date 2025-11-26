'use client'

const AboutSection = () => {
  return (
    <section className="relative bg-black pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 md:pb-8 lg:pb-10 -mt-20 sm:-mt-40 md:-mt-32 lg:-mt-20 z-40 overflow-visible">
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
        <div className="relative" style={{ zIndex: 1 }}>
          {/* Spotlight beam emanating from tile top toward logo - seamless blend - extended on mobile */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none animate-flicker"
            style={{
              bottom: '100%',
              width: 'min(400px, 90vw)',
              height: '900px',
              background: `
                radial-gradient(ellipse 200px 900px at 50% 100%, 
                  rgba(255,255,255,0.55) 0%, 
                  rgba(250,250,250,0.5) 10%, 
                  rgba(245,245,245,0.45) 15%, 
                  rgba(240,240,240,0.42) 20%, 
                  rgba(220,220,220,0.38) 30%, 
                  rgba(180,180,180,0.3) 40%, 
                  rgba(140,140,140,0.22) 50%, 
                  rgba(100,100,100,0.14) 60%, 
                  rgba(60,60,60,0.08) 70%, 
                  rgba(30,30,30,0.04) 80%,
                  rgba(0,0,0,0) 90%)
              `,
              filter: 'blur(50px)',
              zIndex: -1
            }}
          />
          
          {/* Desktop spotlight - larger - hidden on mobile */}
          <div 
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 pointer-events-none animate-flicker"
            style={{
              bottom: '100%',
              width: 'min(750px, 90vw)',
              height: 'min(900px, 70vh)',
              background: `
                radial-gradient(ellipse 300px 900px at 50% 100%, 
                  rgba(250,250,250,0.5) 0%, 
                  rgba(245,245,245,0.48) 5%, 
                  rgba(240,240,240,0.45) 10%, 
                  rgba(230,230,230,0.42) 15%, 
                  rgba(220,220,220,0.38) 20%, 
                  rgba(200,200,200,0.34) 25%, 
                  rgba(180,180,180,0.3) 30%, 
                  rgba(160,160,160,0.25) 40%, 
                  rgba(140,140,140,0.2) 50%, 
                  rgba(100,100,100,0.14) 60%, 
                  rgba(60,60,60,0.08) 70%, 
                  rgba(30,30,30,0.04) 80%,
                  rgba(0,0,0,0) 90%)
              `,
              filter: 'blur(50px)',
              zIndex: -1
            }}
          />
          
          <div className="relative">
            {/* Top line where spotlight emanates */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            
            {/* Light source glow at top line */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 md:w-64 h-12 sm:h-14 md:h-16 -translate-y-1/2"
              style={{
                background: 'radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, rgba(250,250,250,0.55) 30%, rgba(240,240,240,0.35) 50%, rgba(220,220,220,0.2) 70%, transparent 90%)',
                filter: 'blur(20px)'
              }}
            />
            
            <div className="px-8 md:px-12 lg:px-16 pb-12 md:pb-16 text-center">
              <div className="absolute bottom-full left-0 right-0 px-8 md:px-12 lg:px-16 pb-2">
                <div>
                  <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat">
                    We're not spreadsheet CEOs, and we're not here to nod along to people who've never built anything. We're operators and builders who work at the intersection of capital, creativity, and execution. We're one of you - founders - and you deserve a partner who understands what it actually feels like to build something from nothing. So when you're sitting at "their" board table in "their" ivory tower, ask "them" what they've built with their own blood, sweat, and tears - not what they've engineered through models, leverage, or one-sided contracts. We're here for the rebels, the misunderstood, the ones obsessed with a vision others can't yet see. Those are our people. That's our work. That's Founders Row.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default AboutSection

