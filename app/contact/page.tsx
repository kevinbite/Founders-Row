'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import GlowButton from '@/components/ui/GlowButton'

const services = [
  { name: 'FR Advisory', desc: 'Operational partnerships for structure, strategy, and execution.' },
  { name: 'FR Partners', desc: 'Investment partnerships with hands-on support for scaling.' },
  { name: 'FR Media', desc: 'Creative partnerships for brand amplification.' },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-2 sm:mb-3">Contact</p>
            <h1 className="metallic-text text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Let&apos;s Connect</h1>
            <p className="font-body text-white/50 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-balance">
              We would love to hear your founder story.<br />
              Email us to do a Zoom with Jamie and the team.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <GlowButton href="mailto:founder@foundersrow.co">
              founder@foundersrow.co
            </GlowButton>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-20 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/30 text-xs tracking-widest uppercase mb-6 sm:mb-8 text-center">Our Services</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.name} animation="fadeInUp" delay={i * 75}>
                <div className="fr-card p-5 sm:p-6 text-center">
                  <h3 className="font-heading text-white text-sm font-medium mb-2 uppercase tracking-wide">{service.name}</h3>
                  <p className="font-body text-white/40 text-xs leading-relaxed text-balance">{service.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
