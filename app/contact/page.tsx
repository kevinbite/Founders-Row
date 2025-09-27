import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      
      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center space-y-6">
          <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-montserrat">
            Ready to share your founder story? We'd love to hear from you.
          </p>
          <div>
            <a 
              href="mailto:founder@foundersrow.co" 
              className="text-white hover:text-gray-200 underline font-medium text-base sm:text-lg font-montserrat"
              aria-label="Email us at founder@foundersrow.co"
            >
              Email us at founder@foundersrow.co
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
