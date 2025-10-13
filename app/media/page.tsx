import SiteHeader from '@/components/SiteHeader'
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'

export default function MediaPage() {
  return (
    <main className="relative bg-black">
      <SiteHeader />
      <BackHome />
      
      {/* Media Content Section */}
      <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-black relative overflow-hidden">
        
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
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white font-cinzel leading-tight tracking-wide mb-6">
                Founders Row Media
              </h1>
              
              {/* Elegant underline */}
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            
            {/* Overview Section */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-500 relative overflow-hidden">
              {/* Platform-style decorative elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16">
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-montserrat text-center mb-8">
                  Founders Row Media is the creative and growth engine of our platform.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed font-montserrat text-center">
                  Through an exclusive partnership with a world class marketing agency, we deliver best in class brand strategy, creative production, and performance marketing that most emerging brands could never access at their size.
                </p>
              </div>
            </div>
            
            {/* What We Do Section */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-500 relative overflow-hidden">
              {/* Platform-style decorative elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-cinzel text-center mb-8 md:mb-12">
                  What We Deliver
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                  {/* Brand Strategy */}
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto bg-white/5 border border-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-white font-cinzel mb-3">Brand Strategy</h3>
                    <p className="text-sm text-white/70 font-montserrat leading-relaxed">
                      Positioning, messaging, and brand architecture that sets you apart
                    </p>
                  </div>
                  
                  {/* Creative Production */}
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto bg-white/5 border border-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-white font-cinzel mb-3">Creative Production</h3>
                    <p className="text-sm text-white/70 font-montserrat leading-relaxed">
                      World-class content, design, and storytelling across all channels
                    </p>
                  </div>
                  
                  {/* Performance Marketing */}
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto bg-white/5 border border-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-white font-cinzel mb-3">Performance Marketing</h3>
                    <p className="text-sm text-white/70 font-montserrat leading-relaxed">
                      Data-driven campaigns that drive growth and maximize ROI
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* The Advantage Section */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-500 relative overflow-hidden">
              {/* Platform-style decorative elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-cinzel text-center mb-8 md:mb-12">
                  The Unfair Advantage
                </h2>
                
                <div className="space-y-6 text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed font-montserrat text-center">
                  <p>
                    FR Media levels the playing field — giving our companies the same caliber of storytelling, design, and demand generation as the biggest players in the industry.
                  </p>
                  
                  <p className="text-white font-medium">
                    From day one, every Founders Row brand has an unfair advantage: a dedicated marketing powerhouse built to scale their reach, sharpen their voice, and accelerate growth.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

