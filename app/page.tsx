import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FounderLetter from '@/components/FounderLetter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FounderLetter />
      <Footer />
    </main>
  )
}
