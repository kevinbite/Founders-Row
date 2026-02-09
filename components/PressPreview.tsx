'use client'

import Link from 'next/link'
import AnimateOnScroll from './ui/AnimateOnScroll'

const articles = [
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Partners with SculptHouse, Backing Founder Katherine Mason',
    date: 'Feb 5, 2026',
    url: 'https://www.prnewswire.com/news-releases/founders-row-partners-with-sculpthouse-backing-founder-katherine-mason-and-her-vision-of-growth-for-the-next-decade-302679864.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Announces Jess Yuan as Partner & Chief Operating Officer',
    date: 'Jan 27, 2026',
    url: 'https://www.prnewswire.com/news-releases/founders-row-announces-jess-yuan-as-partner--chief-operating-officer-strengthening-founder-first-platform-with-deep-consumer-and-operator-experience-302670567.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Backs Early-Stage AI Sports Analytics Platform Elite Picks',
    date: 'Jan 20, 2026',
    url: 'https://www.prnewswire.com/news-releases/founders-row-backs-early-stage-ai-sports-analytics-platform-elite-picks-302664864.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Launches The Baking Social With Sugar Shane\'s Founder Shane Quillin',
    date: 'Dec 23, 2025',
    url: 'https://www.prnewswire.com/news-releases/founders-row-launches-the-baking-social-with-sugar-shanes-founder-shane-quillin-302648382.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Founders Row Announces First Portfolio Investment, Backing Hot Box Pretzels',
    date: 'Dec 16, 2025',
    url: 'https://www.prnewswire.com/news-releases/founders-row-announces-first-portfolio-investment-backing-hot-box-pretzels-302642584.html',
  },
  {
    publication: 'PR Newswire',
    headline: 'Jamie Weeks Launches Founders Row to Redefine Early-Stage Private Equity',
    date: 'Sep 16, 2025',
    url: 'https://www.prnewswire.com/news-releases/jamie-weeks-launches-founders-row-to-redefine-early-stage-private-equity-302557094.html',
  },
]

export default function PressPreview() {
  return (
    <section className="bg-black py-16 sm:py-24 lg:pt-12 lg:pb-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll animation="fadeInUp">
          <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
            <div className="text-center sm:text-left">
              <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-2 sm:mb-3">Press</p>
              <h2 className="metallic-text text-2xl sm:text-3xl md:text-4xl">
                In the News
              </h2>
            </div>
            <Link 
              href="/press"
              className="hidden sm:flex items-center gap-2 font-body text-white/50 hover:text-white text-sm transition-colors"
            >
              All press
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="space-y-1">
          {articles.slice(0, 2).map((article, i) => (
            <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 75}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block py-4 sm:py-6 border-b border-white/5 group hover:bg-white/[0.02] -mx-4 px-4 transition-colors">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                      <span className="font-body text-white/60 text-[10px] sm:text-xs font-medium">{article.publication}</span>
                      <span className="text-white/20">·</span>
                      <span className="font-body text-white/30 text-[10px] sm:text-xs">{article.date}</span>
                    </div>
                    <h3 className="font-body text-white/80 group-hover:text-white text-sm sm:text-base md:text-lg transition-colors leading-snug">
                      {article.headline}
                    </h3>
                  </div>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/20 group-hover:text-white/50 flex-shrink-0 mt-0.5 sm:mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fadeInUp" delay={300} className="sm:hidden mt-8 text-center">
          <Link 
            href="/press"
            className="inline-flex items-center gap-2 font-body text-white/50 hover:text-white text-sm transition-colors"
          >
            View all press
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
