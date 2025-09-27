import Image from 'next/image'

const FounderLetter = () => {
  return (
    <section id="about" className="py-8 sm:py-20 bg-blue-950 relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 0%, transparent 50%),
                           linear-gradient(45deg, rgba(255,255,255,0.01) 25%, transparent 25%),
                           linear-gradient(-45deg, rgba(255,255,255,0.01) 25%, transparent 25%)`,
          backgroundSize: '60px 60px, 80px 80px, 20px 20px, 20px 20px'
        }}>
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Centered Letter Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-lg sm:text-4xl font-bold text-white font-serif">
                  A Letter from Our Founder
                </h2>
                <div className="h-1 w-24 bg-neutral-400"></div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div className="space-y-5 sm:space-y-6 text-neutral-300 font-montserrat">
                  <div className="text-base sm:text-xl font-bold text-white font-montserrat leading-snug sm:leading-relaxed text-center">
                    <div>This isn't another private equity firm.</div>
                    <div>This is Founders Row.</div>
                  </div>
                  
                  <p className="text-sm sm:text-base leading-relaxed sm:leading-loose optimized-text">
                    I'm just a regular guy who's gotten more wrong than right. I've stumbled, failed, and asked for forgiveness more times than I can count. But after 30 years of building, one truth has become undeniable to me: founders are — and always will be — the engine of capitalism.
                  </p>
                  
                  <p className="text-sm sm:text-base leading-relaxed sm:leading-loose optimized-text">
                    For years, private equity tried to change me to fit their box. I thought maybe that was the cost of playing the game. But the deeper I went, the clearer it became: I wasn't the problem. The system was the problem.
                  </p>
                  
                  <p className="text-sm sm:text-base leading-relaxed sm:leading-loose optimized-text">
                    The truth is, private equity was built to scale capital — not founders. It rewards fees, not obsession. And in that system, the founder's vision — the very thing that makes a business extraordinary — too often gets diluted or lost.
                  </p>
                  
                  <p className="text-sm sm:text-base leading-relaxed sm:leading-loose optimized-text">
                    This is why I started Founders Row. Not because I think I have it all figured out, but because I've lived enough of the founder's struggle to know what's missing. Money alone doesn't build brands. It takes empathy. It takes operators. It takes storytellers. It takes people willing to get in the trenches and build alongside you.
                  </p>
                  
                  <p className="text-sm sm:text-base leading-relaxed sm:leading-loose optimized-text">
                    At Founders Row, we back gritty, visionary founders who are willing to bet it all — and we bet it all with them. We keep it small, we keep it nimble, and we get our hands dirty in the earliest years when the support matters most. Because when founders win, everyone wins.
                  </p>
                  
                  <p className="text-base sm:text-xl font-bold text-white font-montserrat leading-snug sm:leading-relaxed">
                    This is my mission. This is our obsession. Welcome to Founders Row.
                  </p>
                </div>
                
                {/* Founder Signature */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  {/* Signature Image */}
                  <div className="relative bg-blue-950 p-2 rounded">
                    <Image
                      src="/images/ChatGPT Image Sep 15, 2025, 02_54_37 PM.png"
                      alt="Jamie Weeks Signature"
                      width={200}
                      height={80}
                      className="signature-white"
                      style={{
                        filter: 'brightness(0) invert(1)',
                        mixBlendMode: 'normal'
                      }}
                      priority
                    />
                  </div>
                  {/* Name and Title */}
                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel">Jamie Weeks</h3>
                    <p className="text-sm sm:text-base text-neutral-400 font-medium italic font-cinzel">Founder</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="pt-8 space-y-4">
              <h4 className="text-base sm:text-xl font-semibold text-white font-cinzel">Ready to Share Your Founder Story?</h4>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-montserrat text-center">
                We would love to hear your founder story. Email us to do a Zoom with Jamie and the team.
              </p>
              <div className="text-center">
                <a 
                  href="mailto:founder@foundersrow.co" 
                  className="text-white hover:text-gray-200 underline font-medium font-montserrat"
                  aria-label="Email us at founder@foundersrow.co"
                >
                  founder@foundersrow.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderLetter
