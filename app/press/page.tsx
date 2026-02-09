'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import GlowButton from '@/components/ui/GlowButton'

const articles = [
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Partners with SculptHouse, Backing Founder Katherine Mason',
    date: 'February 5, 2026',
    excerpt: 'Founders Row has announced an investment in SculptHouse, marking the beginning of a long-term partnership designed to support the brand\'s expansion over the next several years.',
    featured: true,
    url: 'https://www.prnewswire.com/news-releases/founders-row-partners-with-sculpthouse-backing-founder-katherine-mason-and-her-vision-of-growth-for-the-next-decade-302679864.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Announces Jess Yuan as Partner & Chief Operating Officer',
    date: 'January 27, 2026',
    excerpt: 'Founders Row today announced that Jess Yuan has joined the firm as Partner and Chief Operating Officer, further strengthening Founders Row\'s mission to support early-stage founders.',
    featured: true,
    url: 'https://www.prnewswire.com/news-releases/founders-row-announces-jess-yuan-as-partner--chief-operating-officer-strengthening-founder-first-platform-with-deep-consumer-and-operator-experience-302670567.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Backs Early-Stage AI Sports Analytics Platform Elite Picks',
    date: 'January 20, 2026',
    excerpt: 'Founders Row announced today that it has backed Elite Picks, an early-stage AI-powered sports analytics platform founded by Michael Zakkour.',
    url: 'https://www.prnewswire.com/news-releases/founders-row-backs-early-stage-ai-sports-analytics-platform-elite-picks-302664864.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Launches The Baking Social With Sugar Shane\'s Founder Shane Quillin',
    date: 'December 23, 2025',
    excerpt: 'Founders Row, the newly launched venture studio focused on building and backing next-generation experiential consumer brands, announced today its second investment.',
    url: 'https://www.prnewswire.com/news-releases/founders-row-launches-the-baking-social-with-sugar-shanes-founder-shane-quillin-302648382.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Announces First Portfolio Investment, Backing Hot Box Pretzels',
    date: 'December 16, 2025',
    excerpt: 'Founders Row announced today its first minority investment, partnering with Hot Box Pretzels, a next-generation direct-to-consumer pretzel brand.',
    url: 'https://www.prnewswire.com/news-releases/founders-row-announces-first-portfolio-investment-backing-hot-box-pretzels-302642584.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Jamie Weeks Launches Founders Row to Redefine Early-Stage Private Equity',
    date: 'September 16, 2025',
    excerpt: 'Jamie Weeks, entrepreneur and investor, today announced the launch of Founders Row, a new investment platform anchored by the Founder Partnership Vehicle (FPV).',
    url: 'https://www.prnewswire.com/news-releases/jamie-weeks-launches-founders-row-to-redefine-early-stage-private-equity-302557094.html',
  },
]

export default function PressPage() {
  const featured = articles.filter(a => a.featured)
  const others = articles.filter(a => !a.featured)

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-2 sm:mb-3">Press</p>
            <h1 className="metallic-text text-3xl sm:text-4xl md:text-5xl">In the News</h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/30 text-xs tracking-widest uppercase mb-4 sm:mb-6">Featured</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {featured.map((article, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 75}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="fr-card p-5 sm:p-6 md:p-8 block h-full group">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="font-body text-white/60 text-[10px] sm:text-xs font-medium">{article.publication}</span>
                    <span className="text-white/20">·</span>
                    <span className="font-body text-white/30 text-[10px] sm:text-xs">{article.date}</span>
                  </div>
                  <h3 className="font-body text-white text-base sm:text-lg md:text-xl font-light mb-3 sm:mb-4 group-hover:text-white/80 transition-colors leading-snug">
                    {article.headline}
                  </h3>
                  <p className="font-body text-white/40 text-xs sm:text-sm text-balance">{article.excerpt}</p>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* All */}
      <section className="pb-20 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/30 text-xs tracking-widest uppercase mb-4 sm:mb-6">All Coverage</p>
          </AnimateOnScroll>
          
          <div className="space-y-1">
            {others.map((article, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 50}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="block py-4 sm:py-5 border-b border-white/5 group hover:bg-white/[0.02] -mx-4 px-4 transition-colors">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                        <span className="font-body text-white/60 text-[10px] sm:text-xs font-medium">{article.publication}</span>
                        <span className="text-white/20">·</span>
                        <span className="font-body text-white/30 text-[10px] sm:text-xs">{article.date}</span>
                      </div>
                      <h3 className="font-body text-white/80 group-hover:text-white text-sm sm:text-base transition-colors leading-snug">{article.headline}</h3>
                    </div>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/20 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-16 sm:py-24 lg:pt-12 lg:pb-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-2 sm:mb-3">Contact</p>
            <h2 className="metallic-text text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">Let&apos;s Connect</h2>
            <p className="font-body text-white/50 text-base sm:text-lg mb-10 text-balance">
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

      <Footer />
    </main>
  )
}
