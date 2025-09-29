import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

const AdvisoryPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-black relative">
        {/* Background image with grayscale filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/tabernacle.jpg')",
            filter: 'grayscale(100%)'
          }}
        ></div>
        
        {/* Dark overlay for subtle background image */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4 sm:mb-8">
            <Image
              src="/logos/FR Advisory Logo.png?v=2"
              alt="FR Advisory Logo"
              width={400}
              height={200}
              className="max-w-sm w-full h-auto"
              priority
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-2">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              Founders Row Advisory partners with brands on a non-investment basis, embedding our team, systems, and founder perspective directly into their business. Through customized scopes of work, founders gain access to a fractional C-suite — strategy, finance, operations, development, brand, and marketing expertise — without having to build it in-house. Advisory is hands-on, practical, and built around the challenges founders actually face: opening the next location, raising capital, scaling leadership, and preparing for outside investment.
            </p>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
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
              What We Provide
            </h2>
            <div className="h-1 w-24 bg-neutral-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Fractional CFO */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white font-cinzel mb-4">
                  Fractional<br />CFO
                </h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text">
                Financial planning, budgeting, cash flow management, and investor relations to keep your business on solid ground.
              </p>
            </div>

            {/* Operational Expertise */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white font-cinzel mb-4">
                  Operational<br />Expertise
                </h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text">
                Systems, processes, and strategic guidance to scale efficiently from startup to growth stage.
              </p>
            </div>

            {/* Development Support */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 sm:p-8 text-center hover:bg-neutral-800/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white font-cinzel mb-4">
                  Development<br />Support
                </h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-montserrat leading-relaxed balanced-text">
                Technical guidance, product development, and digital infrastructure to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
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
              Our Approach
            </h2>
            <div className="h-1 w-24 bg-neutral-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                We embed directly into your business on a non-investment basis, bringing our complete team, systems, and founder perspective to your daily operations. This isn't consulting from the sidelines — it's true partnership.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                Through customized scopes of work, you gain access to fractional C-suite expertise across strategy, finance, operations, development, brand, and marketing — capabilities that would typically cost hundreds of thousands to build in-house.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-montserrat balanced-text">
                We focus on the real challenges founders face: opening the next location, raising capital, scaling leadership, and preparing for outside investment. Advisory serves as your operational foundation and potential pathway to FR Partners.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-cinzel mb-6">
                Founder-First Partnership
              </h3>
              <div className="space-y-4 text-left">
                <p className="text-neutral-300 font-montserrat leading-relaxed balanced-text">
                  <span className="font-semibold text-white">Selective Focus:</span> We work with only four companies at a time to ensure each founder gets the attention they deserve.
                </p>
                <p className="text-neutral-300 font-montserrat leading-relaxed balanced-text">
                  <span className="font-semibold text-white">Flexible Structure:</span> Choose between fee-based or equity-based partnerships based on what works best for your situation.
                </p>
                <p className="text-neutral-300 font-montserrat leading-relaxed balanced-text">
                  <span className="font-semibold text-white">Growth Path:</span> Advisory serves as an incubator that may lead to FR Partners for continued support and capital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-black relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cinzel mb-8 px-2">
            Ready for Operational Partnership?
          </h2>
          <div className="max-w-3xl mx-auto px-2 mb-8">
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-montserrat balanced-text">
              Get the structure, strategy, and creative execution you need in the early years with FR Advisory.
            </p>
          </div>
          <a 
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-black font-medium py-4 px-8 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black font-montserrat text-base sm:text-lg"
            aria-label="Navigate to Contact page to discuss Advisory partnership"
          >
            Work With Advisory
          </a>
        </div>
      </section>

      <Footer showLogo={false} />
    </div>
  )
}

export default AdvisoryPage
