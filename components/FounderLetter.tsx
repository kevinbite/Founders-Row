import Image from 'next/image'

const FounderLetter = () => {
  return (
    <section id="about" className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-black relative overflow-hidden">
      
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle radial gradients for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/[0.02] to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-white/[0.015] to-transparent blur-3xl"></div>
        
        {/* Elegant geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(30deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(150deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '120px 120px, 80px 80px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elegant Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="relative inline-block">
            {/* Decorative top accent */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
              <div>A Letter from Our Founder,</div>
              <div className="text-neutral-300">Jamie Weeks</div>
            </h2>
            
            {/* Elegant underline */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Letter Content */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            
            {/* Opening Statement */}
            <div className="relative">
              {/* Elegant geometric accent - top left */}
              <div className="absolute -left-6 top-0 w-8 h-8">
                <div className="absolute inset-0 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
                <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-white/20 rounded-tl-sm"></div>
                <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/40 rounded-full"></div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-light text-white font-montserrat leading-relaxed pl-8 sm:pl-12">
                <div className="mb-2 sm:mb-2">
                  <span>This isn't another private equity firm. </span>
                  <span className="text-neutral-300 font-medium sm:block">This is Founders Row.</span>
                </div>
              </div>
            </div>
            
            {/* Letter Paragraphs */}
            <div className="space-y-6 sm:space-y-8 text-sm text-center sm:text-base sm:text-left lg:text-lg text-neutral-300 font-montserrat leading-relaxed">
              <p className="balanced-text">
                I'm just a regular guy who's gotten more wrong than right. I've stumbled, failed, and asked for forgiveness more times than I can count. But after 30 years of building, one truth has become undeniable to me: <span className="text-white font-medium">founders are — and always will be — the engine of capitalism.</span>
              </p>
              
              <p className="balanced-text">
                For years, private equity tried to change me to fit their box. I thought maybe that was the cost of playing the game. But the deeper I went, the clearer it became: I wasn't the problem. <span className="text-white font-medium">The system was the problem.</span>
              </p>
              
              <p className="balanced-text">
                The truth is, private equity was built to scale capital — not founders. It rewards fees, not obsession. And in that system, the founder's vision — the very thing that makes a business extraordinary — too often gets diluted or lost.
              </p>
              
              <p className="balanced-text">
                This is why I started Founders Row. Not because I think I have it all figured out, but because I've lived enough of the founder's struggle to know what's missing. <span className="text-white font-medium">Money alone doesn't build brands.</span> It takes empathy. It takes operators. It takes storytellers. It takes people willing to get in the trenches and build alongside you.
              </p>
              
              <p className="balanced-text">
                At Founders Row, we back gritty, visionary founders who are willing to bet it all — and we bet it all with them. We keep it small, we keep it nimble, and we get our hands dirty in the earliest years when the support matters most. <span className="text-white font-medium">Because when founders win, everyone wins.</span>
              </p>
            </div>
            
            {/* Closing Statement */}
            <div className="relative pt-6 sm:pt-8">
              <div className="text-lg sm:text-xl md:text-2xl font-medium text-white font-montserrat leading-relaxed text-center lg:text-left">
                <div className="mb-2">This is my mission. This is our obsession.</div>
                <div className="text-neutral-300 font-light">Welcome to Founders Row.</div>
              </div>
              {/* Elegant geometric accent - bottom right */}
              <div className="absolute -right-6 bottom-0 w-8 h-8">
                <div className="absolute inset-0 border-r-2 border-b-2 border-white/30 rounded-br-lg"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-white/20 rounded-br-sm"></div>
                <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-white/40 rounded-full"></div>
              </div>
            </div>
            
          </div>
          
          {/* Sidebar with Signature and CTA */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Signature Section */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
              {/* Platform-style decorative elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-6 sm:px-8 py-8 sm:py-12 space-y-6 text-center">
                {/* Signature Image */}
                <div className="flex justify-center">
                  <Image
                    src="/images/ChatGPT Image Sep 15, 2025, 02_54_37 PM.png"
                    alt="Jamie Weeks Signature"
                    width={180}
                    height={70}
                    className="signature-white"
                    style={{
                      filter: 'brightness(0) invert(1)',
                      mixBlendMode: 'normal'
                    }}
                    priority
                  />
                </div>
                
                {/* Name and Title */}
                <div className="space-y-2 text-center">
                  <h3 className="text-xl sm:text-2xl font-light text-white font-cinzel text-center">Jamie Weeks</h3>
                  <p className="text-sm text-neutral-400 font-medium font-cinzel tracking-wide text-center">FOUNDER</p>
                </div>
              </div>
            </div>
            
            {/* Call to Action Section */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 relative overflow-hidden">
              {/* Platform-style decorative elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-6 sm:px-8 py-8 sm:py-12 space-y-6 text-center">
                <h4 className="text-lg sm:text-xl font-light text-white font-cinzel leading-tight text-center">
                  Ready to Share Your Founder Story?
                </h4>
                
                <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text text-center">
                  We would love to hear your founder story. Email us to do a Zoom with Jamie and the team.
                </p>
                
                <div className="pt-2 text-center">
                  <a 
                    href="mailto:founder@foundersrow.co" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-lg text-white hover:text-neutral-200 font-medium font-montserrat transition-all duration-300 group"
                    aria-label="Email us at founder@foundersrow.co"
                  >
                    <span className="mr-2">Email Us</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                
                <div className="text-xs text-neutral-500 font-montserrat text-center">
                  founder@foundersrow.co
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default FounderLetter