import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-blue-950 flex flex-col">
      <Navigation />
      
      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-montserrat optimized-text">
            Founders Row is a new kind of investment platform built at the intersection of capital, creativity, and execution. Anchored by the Founder Partnership Vehicle (FPV), Founders Row was created to back gritty, visionary founders in their earliest and most difficult years. We believe money alone doesn't build brands — it takes operators, storytellers, and a structure that keeps GP, LP, and Founders on the same side of the table.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
