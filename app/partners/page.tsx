import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-blue-950 flex flex-col">
      <Navigation />
      
      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center space-y-8">
          <div className="flex justify-center">
            <Image
              src="/logos/FR Partners Logo.png?v=2"
              alt="FR Partners Logo"
              width={300}
              height={150}
              className="max-w-xs w-full h-auto"
              priority
            />
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-montserrat optimized-text">
            FR Partners is the investment arm of Founders Row. Each fund is structured deal-by-deal through the FPV, allowing maximum alignment between founders, capital partners, and the Founders Row team. Some funds may include outside capital partners, while others may be built solely within Founders Row. The goal is always the same: to scale founder-led brands with hands-on support in finance, development, operations, and marketing.
          </p>
        </div>
      </div>

      <Footer showLogo={false} />
    </div>
  )
}

export default PartnersPage
