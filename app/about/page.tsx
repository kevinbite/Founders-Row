import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-black relative">
        {/* Background image with grayscale filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Ponce_City_Market_1.jpeg')",
            filter: 'grayscale(100%)'
          }}
        ></div>
        
        {/* Dark overlay for subtle background image */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-cinzel mb-8 leading-tight px-2">
            About Founders Row
          </h1>
          <div className="h-1 w-32 bg-neutral-400 mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto px-2">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-montserrat balanced-text mx-auto mb-6">
              Founders Row is a new kind of investment platform built at the intersection of capital, creativity, and execution. Anchored by the Founder Partnership Vehicle (FPV), Founders Row was created to back gritty, visionary founders in their earliest and most difficult years.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed font-montserrat balanced-text mx-auto">
              Based in Atlanta, we are rooted in a city that understands entrepreneurship and the founder journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-black relative">
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
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cinzel mb-6 px-2">
              Our Mission
            </h2>
            <div className="h-1 w-24 bg-neutral-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                We believe money alone doesn't build brands — it takes operators, storytellers, and a structure that keeps GP, LP, and Founders on the same side of the table.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                Our approach combines the rigor of private equity with the insight of founder-led advisory and the reach of a modern creative studio. We're not just investors; we're partners in the truest sense.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                Every founder we work with gets access to our full ecosystem: strategic capital, operational expertise, creative resources, and a network built specifically for scaling founder-led brands.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-cinzel mb-6">
                Our Values
              </h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300 font-montserrat balanced-text">
                    <span className="font-semibold text-white">Founder-First:</span> Every decision prioritizes the founder's vision and long-term success.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300 font-montserrat balanced-text">
                    <span className="font-semibold text-white">Hands-On:</span> We roll up our sleeves and work alongside you, not from the sidelines.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300 font-montserrat balanced-text">
                    <span className="font-semibold text-white">Long-Term:</span> We're building enduring companies, not quick exits.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300 font-montserrat balanced-text">
                    <span className="font-semibold text-white">Transparent:</span> Clear communication and aligned incentives from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 sm:py-20 bg-black relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.02) 0%, transparent 50%),
                             radial-gradient(circle at 70% 30%, rgba(255,255,255,0.02) 0%, transparent 50%)`,
            backgroundSize: '100px 100px, 120px 120px'
          }}>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cinzel mb-6 px-2">
              What Makes Us Different
            </h2>
            <div className="h-1 w-24 bg-neutral-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FPV Structure */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel mb-4">
                  Founder Partnership Vehicle
                </h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text">
                Our unique structure ensures founders maintain control while accessing the capital and resources they need to scale. No traditional fund constraints, just aligned partnerships.
              </p>
            </div>

            {/* Integrated Approach */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel mb-4">
                  Integrated Ecosystem
                </h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text">
                Advisory, investment, and creative services under one roof. No need to coordinate between multiple partners — we handle it all seamlessly.
              </p>
            </div>

            {/* Founder Experience */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel mb-4">
                  Founder<br />Experience
                </h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text">
                Led by founders who've been in your shoes. We understand the challenges because we've lived them, and we know what it takes to build something lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-black relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cinzel mb-8 px-2">
            Ready to Build Something Extraordinary?
          </h2>
          <div className="max-w-3xl mx-auto px-2 mb-8">
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              Join the founders who are building the future with Founders Row as their partner.
            </p>
          </div>
          <a 
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-black font-medium py-4 px-8 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black font-montserrat text-base sm:text-lg"
            aria-label="Navigate to Contact page to get started"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
