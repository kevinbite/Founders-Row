import SiteHeader from '@/components/SiteHeader'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import StatementSection from '@/components/StatementSection'
import WhyWeExist from '@/components/WhyWeExist'
import Platform from '@/components/Platform'
import FounderLetterPreview from '@/components/FounderLetterPreview'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <StatementSection />
      <WhyWeExist />
      <Platform />
      <FounderLetterPreview />
      <Footer />
    </main>
  )
}
