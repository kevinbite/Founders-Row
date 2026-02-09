'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Newsletter } from '@/lib/supabase'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import Footer from '@/components/Footer'

export default function InvestorDashboardPage() {
  const router = useRouter()
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      // Check if user is authenticated
      const authResponse = await fetch('/api/investor-auth')
      const authData = await authResponse.json()

      if (!authData.authenticated) {
        router.push('/investor-login')
        return
      }

      setUserEmail(authData.email)

      // Fetch newsletters
      const newslettersResponse = await fetch('/api/newsletters')
      const newslettersData = await newslettersResponse.json()

      if (!newslettersResponse.ok) {
        setError(newslettersData.error || 'Failed to load newsletters')
        setIsLoading(false)
        return
      }

      setNewsletters(newslettersData.newsletters || [])
      setIsLoading(false)
    } catch (err) {
      setError('An error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/investor-auth', { method: 'DELETE' })
      router.push('/investor-login')
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/60 text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/">
                <Image
                  src="/logos/Screenshot 2025-09-07 130347.png"
                  alt="Founders Row Logo"
                  width={200}
                  height={50}
                  className="h-8 sm:h-10 w-auto"
                  priority
                />
              </Link>
              <span className="hidden sm:block text-white/30 text-xs tracking-widest uppercase">
                Investor Portal
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-xs hidden md:block">
                {userEmail}
              </span>
              <button
                onClick={handleLogout}
                className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll animation="fadeInUp">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Newsletter</p>
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage: `
                  linear-gradient(
                    180deg,
                    #888888 0%,
                    #c0c0c0 15%,
                    #ffffff 30%,
                    #e0e0e0 45%,
                    #909090 55%,
                    #e0e0e0 65%,
                    #ffffff 80%,
                    #c0c0c0 90%,
                    #888888 100%
                  )
                `,
                backgroundSize: '100% 200%',
                backgroundPosition: 'center',
              }}
            >Inside the Row</h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl">
              Exclusive insights from Jamie Weeks on portfolio updates, market perspectives, and what we&apos;re building at Founders Row.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6">
          {/* Error Message */}
          {error && (
            <AnimateOnScroll animation="fadeInUp">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                <p className="text-red-400">{error}</p>
              </div>
            </AnimateOnScroll>
          )}

          {/* Newsletters Grid */}
          {newsletters.length === 0 ? (
            <AnimateOnScroll animation="fadeInUp">
              <div className="fr-card p-12 text-center">
                <p className="text-white/60 text-lg">
                  No editions available at this time.
                </p>
                <p className="text-white/40 text-sm mt-2">
                  Check back soon for the latest from Inside the Row.
                </p>
              </div>
            </AnimateOnScroll>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsletters.map((newsletter, i) => (
                <AnimateOnScroll key={newsletter.id} animation="fadeInUp" delay={i * 50}>
                  <div
                    className="fr-card p-6 h-full flex flex-col cursor-pointer hover:bg-white/[0.03] transition-colors"
                    onClick={() => setSelectedNewsletter(newsletter)}
                  >
                    <div className="flex-1">
                      <p className="text-white/30 text-xs tracking-widest uppercase mb-3">
                        {formatDate(newsletter.published_date)}
                      </p>
                      <h3 className="text-white text-lg font-medium mb-3">
                        {newsletter.title}
                      </h3>
                      <p className="text-white/50 text-sm line-clamp-3">
                        {newsletter.content.substring(0, 150)}...
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
                      <span className="text-white/60 hover:text-white text-sm transition-colors">
                        Read More →
                      </span>
                      {newsletter.pdf_url && (
                        <a
                          href={newsletter.pdf_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-white text-xs transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          PDF ↓
                        </a>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Newsletter Modal */}
      {selectedNewsletter && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedNewsletter(null)}
        >
          <div
            className="bg-black border border-white/10 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-black border-b border-white/5 p-6 flex items-start justify-between">
              <div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
                  {formatDate(selectedNewsletter.published_date)}
                </p>
                <h2 
                  className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        180deg,
                        #888888 0%,
                        #c0c0c0 15%,
                        #ffffff 30%,
                        #e0e0e0 45%,
                        #909090 55%,
                        #e0e0e0 65%,
                        #ffffff 80%,
                        #c0c0c0 90%,
                        #888888 100%
                      )
                    `,
                    backgroundSize: '100% 200%',
                    backgroundPosition: 'center',
                  }}
                >
                  {selectedNewsletter.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedNewsletter(null)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="max-w-none space-y-10">
                {selectedNewsletter.content.split('\n\n\n').map((section, idx) => {
                  const lines = section.trim().split('\n');
                  const heading = lines[0];
                  const content = lines.slice(1).join('\n');
                  
                  return (
                    <div key={idx}>
                      <div className="space-y-4">
                        {/* Section Heading */}
                        <h3 className="text-xl sm:text-2xl font-medium text-white leading-tight">
                          {heading}
                        </h3>
                        
                        {/* Section Content */}
                        <div className="space-y-4">
                          {content.split('\n\n').map((paragraph, pIdx) => {
                            // Check if it's a bullet list
                            if (paragraph.trim().startsWith('•')) {
                              // Group lines into bullet items
                              const lines = paragraph.split('\n');
                              const bulletItems: string[] = [];
                              let currentItem = '';
                              
                              lines.forEach((line) => {
                                if (line.trim().startsWith('•')) {
                                  if (currentItem) {
                                    bulletItems.push(currentItem);
                                  }
                                  currentItem = line.trim().substring(1).trim();
                                } else if (line.trim()) {
                                  currentItem += '\n' + line.trim();
                                }
                              });
                              
                              if (currentItem) {
                                bulletItems.push(currentItem);
                              }
                              
                              return (
                                <ul key={pIdx} className="space-y-4 pl-0">
                                  {bulletItems.map((item, lIdx) => (
                                    <li key={lIdx} className="text-white/70 text-base sm:text-lg leading-relaxed flex items-start">
                                      <span className="text-white/40 mr-3 mt-1 flex-shrink-0">•</span>
                                      <span className="flex-1 whitespace-pre-line">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              );
                            }
                            
                            // Regular paragraph
                            return paragraph.trim() && (
                              <p key={pIdx} className="text-white/70 text-base sm:text-lg leading-relaxed">
                                {paragraph.trim()}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Section Divider (not for last section) */}
                      {idx < selectedNewsletter.content.split('\n\n\n').length - 1 && (
                        <div className="mt-8 pt-8 border-t border-white/5" />
                      )}
                    </div>
                  );
                })}
              </div>

              {selectedNewsletter.pdf_url && (
                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href={selectedNewsletter.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Download Full PDF
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

