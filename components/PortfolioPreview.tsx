'use client'

import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from './ui/AnimateOnScroll'

const companies = [
  { name: 'SweatHouz', category: 'Recovery' },
  { name: 'SculptHouse', category: 'Fitness' },
  { name: 'Baking Social', category: 'Food & Beverage' },
  { name: 'Hotbox Pretzels', category: 'DTC Food' },
]

export default function PortfolioPreview() {
  return (
    <section className="bg-black py-32 sm:py-40 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll animation="fadeInUp">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl text-white font-light">Our Companies</h2>
            </div>
            <Link 
              href="/portfolio"
              className="hidden sm:flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {companies.map((company, i) => (
            <AnimateOnScroll key={company.name} animation="fadeInUp" delay={i * 75}>
              <div className="fr-card p-6 sm:p-8 text-center group cursor-pointer">
                {/* Logo placeholder */}
                <div className="h-12 sm:h-16 flex items-center justify-center mb-4">
                  <Image
                    src="/logos/FR LOGO WITH SPADE (1).png"
                    alt={company.name}
                    width={60}
                    height={60}
                    className="w-10 h-10 sm:w-12 sm:h-12 opacity-20 group-hover:opacity-30 transition-opacity"
                  />
                </div>
                <h3 className="text-white text-sm font-medium mb-1">{company.name}</h3>
                <p className="text-white/30 text-xs">{company.category}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fadeInUp" delay={400} className="sm:hidden mt-8 text-center">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            View all companies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
