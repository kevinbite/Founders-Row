import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

const AdvisoryPage = () => {
  return (
    <div className="min-h-screen bg-blue-950 flex flex-col">
      <Navigation />
      
      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center space-y-8">
          <div className="flex justify-center">
            <Image
              src="/logos/FR Advisory Logo.png?v=2"
              alt="FR Advisory Logo"
              width={300}
              height={150}
              className="max-w-xs w-full h-auto"
              priority
            />
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-montserrat optimized-text">
            FR Advisory is the consulting and incubation arm of Founders Row. Dedicated to working with only four companies at a time, Advisory provides one-year, deep operational partnerships that can be structured as either fee-based or equity-based engagements. Advisory exists to give founders the structure, strategy, and creative execution they need in the early years — and serves as an incubator for brands that may ultimately graduate into FR Partners.
          </p>
        </div>
      </div>

      <Footer showLogo={false} />
    </div>
  )
}

export default AdvisoryPage
