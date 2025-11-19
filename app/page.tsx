import SiteHeader from '@/components/SiteHeader'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
