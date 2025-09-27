import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Tagline from '@/components/Tagline'
import Platform from '@/components/Platform'
import FounderLetter from '@/components/FounderLetter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Tagline />
      <Platform />
      <FounderLetter />
      <Footer />
    </main>
  )
}
