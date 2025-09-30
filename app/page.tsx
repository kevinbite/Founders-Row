import SiteHeader from '@/components/SiteHeader'
import HeroSection from '@/components/HeroSection'
import Platform from '@/components/Platform'
import FounderLetter from '@/components/FounderLetter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <Platform />
      <FounderLetter />
      <Footer />
    </main>
  )
}
