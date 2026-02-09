'use client'

import AnimateOnScroll from './ui/AnimateOnScroll'
import GlowButton from './ui/GlowButton'

export default function ContactSection() {
  return (
    <section className="bg-black py-16 sm:py-24 lg:pt-12 lg:pb-24 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <AnimateOnScroll animation="fadeInUp">
          <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-3">Contact</p>
          <h2 className="metallic-text text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
            Let&apos;s Connect
          </h2>
          <p className="font-body text-white/50 text-base sm:text-lg mb-10 text-balance">
            We&apos;d love to hear your founder story.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay={100}>
          <GlowButton href="mailto:founder@foundersrow.co">
            founder@foundersrow.co
          </GlowButton>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
