'use client'

import Link from 'next/link'

const FounderLetterPreview = () => {
  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-black relative overflow-hidden">
      
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
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
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
        
        {/* Preview Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-500 relative overflow-hidden group">
            {/* Platform-style decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            
            <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16 space-y-8">
              
              {/* Preview Text */}
              <div className="space-y-6 text-base sm:text-lg lg:text-xl text-neutral-300 font-montserrat leading-relaxed text-center">
                <p>
                  I'm just a regular guy who's gotten more wrong than right. I've stumbled, failed, and asked for forgiveness more times than I can count. But after 30 years of building, one truth has become undeniable to me: <span className="text-white font-medium">founders are — and always will be — the engine of capitalism.</span>
                </p>
                
                <p className="text-neutral-400 italic">
                  Read the full letter to learn about the journey that led to Founders Row and why we exist to support visionary founders...
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-8 flex justify-center">
                <Link 
                  href="/founder-letter"
                  className="bg-transparent border-2 border-white/30 text-white px-6 py-2.5 text-base font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Read the full letter from Jamie Weeks"
                >
                  Read Full Letter
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default FounderLetterPreview

