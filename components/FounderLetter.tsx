import Image from 'next/image'

const FounderLetter = () => {
  return (
    <section id="about" className="py-8 sm:py-20 bg-black relative">
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
        {/* Tile Design */}
        <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-4xl font-bold text-white font-serif mb-3 sm:mb-4 px-2">
              <div>A Letter from Our Founder,</div>
              <div>Jamie Weeks</div>
            </h2>
            <div className="h-0.5 w-16 bg-neutral-400 mx-auto"></div>
          </div>
          
          <div className="space-y-5 sm:space-y-6 text-neutral-300 font-montserrat">
            <div className="text-base sm:text-xl font-bold text-white font-montserrat leading-snug sm:leading-relaxed text-center">
              <div>This isn't another private equity firm.</div>
              <div>This is Founders Row.</div>
            </div>
            
            <p className="text-sm sm:text-base platform-text">
              I'm just a regular guy who's gotten more wrong than right. I've stumbled, failed, and asked for forgiveness more times than I can count. But after 30 years of building, one truth has become undeniable to me: founders are — and always will be — the engine of capitalism.
            </p>
            
            <p className="text-sm sm:text-base platform-text">
              For years, private equity tried to change me to fit their box. I thought maybe that was the cost of playing the game. But the deeper I went, the clearer it became: I wasn't the problem. The system was the problem.
            </p>
            
            <p className="text-sm sm:text-base platform-text">
              The truth is, private equity was built to scale capital — not founders. It rewards fees, not obsession. And in that system, the founder's vision — the very thing that makes a business extraordinary — too often gets diluted or lost.
            </p>
            
            <p className="text-sm sm:text-base platform-text">
              This is why I started Founders Row. Not because I think I have it all figured out, but because I've lived enough of the founder's struggle to know what's missing. Money alone doesn't build brands. It takes empathy. It takes operators. It takes storytellers. It takes people willing to get in the trenches and build alongside you.
            </p>
            
            <p className="text-sm sm:text-base platform-text">
              At Founders Row, we back gritty, visionary founders who are willing to bet it all — and we bet it all with them. We keep it small, we keep it nimble, and we get our hands dirty in the earliest years when the support matters most. Because when founders win, everyone wins.
            </p>
            
            <div className="text-sm sm:text-base font-bold text-white font-montserrat platform-text">
              <div>This is my mission. This is our obsession.</div>
              <div>Welcome to Founders Row.</div>
            </div>
          </div>

          {/* Founder Signature */}
          <div className="pt-3 flex flex-col items-center justify-center space-y-1 sm:space-y-0 sm:flex-row sm:space-x-4">
            {/* Signature Image */}
            <div className="relative p-2">
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

          {/* Call to Action */}
          <div className="pt-8 space-y-4">
            <h4 className="text-base sm:text-xl font-semibold text-white font-cinzel">Ready to Share Your Founder Story?</h4>
            <p className="text-sm sm:text-base text-neutral-300 font-montserrat platform-text">
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
    </section>
  )
}

export default FounderLetter