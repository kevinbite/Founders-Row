import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PortfolioCarousel from '@/components/PortfolioCarousel'
import PressPreview from '@/components/PressPreview'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioCarousel />
      <PressPreview />
      <ContactSection />
      <Footer />
    </main>
  )
}
