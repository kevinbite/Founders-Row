'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Newsletter } from '@/lib/supabase'

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
        <div className="text-white/90 font-montserrat text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px, 80px 80px',
            backgroundPosition: '0 0, 25px 25px',
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-6 flex-1 min-w-0">
              <Image
                src="/logos/Screenshot 2025-09-07 130347.png"
                alt="Founders Row Logo"
                width={200}
                height={50}
                className="h-8 sm:h-10 md:h-12 w-auto flex-shrink-0"
                priority
              />
              <h1 className="text-base sm:text-xl md:text-2xl font-light text-white font-cinzel hidden xs:block truncate">
                Investor Portal
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <span className="text-white/70 text-xs sm:text-sm font-montserrat hidden md:block truncate max-w-[150px] lg:max-w-none">
                {userEmail}
              </span>
              <button
                onClick={handleLogout}
                className="bg-transparent border border-white/30 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-white font-cinzel mb-4">
            INSIDE THE ROW
          </h2>
          <p className="text-white/70 font-montserrat text-base sm:text-lg">
            Exclusive insights from Jamie Weeks on portfolio updates, market perspectives, and what we're building at Founders Row.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
            <p className="text-red-400 font-montserrat">{error}</p>
          </div>
        )}

        {/* Newsletters Grid */}
        {newsletters.length === 0 ? (
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-12 text-center">
            <p className="text-white/70 font-montserrat text-lg">
              No editions available at this time.
            </p>
            <p className="text-white/50 font-montserrat text-sm mt-2">
              Check back soon for the latest from INSIDE THE ROW.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsletters.map((newsletter) => (
              <div
                key={newsletter.id}
                className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:bg-neutral-800/50 transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedNewsletter(newsletter)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-white font-cinzel mb-2 group-hover:text-white/90 transition-colors">
                        {newsletter.title}
                      </h3>
                      <p className="text-white/60 text-sm font-montserrat">
                        {formatDate(newsletter.published_date)}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/70 font-montserrat text-sm mb-4 line-clamp-3">
                    {newsletter.content.substring(0, 150)}...
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-white/50 text-xs font-montserrat">
                      {formatDate(newsletter.published_date)}
                    </span>
                    <button className="text-white/90 hover:text-white text-sm font-cinzel transition-colors">
                      Read More →
                    </button>
                  </div>

                  {newsletter.pdf_url && (
                    <a
                      href={newsletter.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block text-center bg-white/5 border border-white/20 text-white px-4 py-2 text-sm font-medium font-cinzel rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Newsletter Modal */}
      {selectedNewsletter && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedNewsletter(null)}
        >
          <div
            className="bg-neutral-900 border border-neutral-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-neutral-900 border-b border-white/10 p-6 flex items-start justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light text-white font-cinzel mb-2">
                  {selectedNewsletter.title}
                </h2>
                <p className="text-white/60 font-montserrat">
                  {formatDate(selectedNewsletter.published_date)}
                </p>
              </div>
              <button
                onClick={() => setSelectedNewsletter(null)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
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
                        <h3 className="text-xl sm:text-2xl font-medium text-white font-cinzel leading-tight">
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
                                    <li key={lIdx} className="text-white/90 font-montserrat text-base sm:text-lg leading-relaxed flex items-start">
                                      <span className="text-white/60 mr-3 mt-1 flex-shrink-0">•</span>
                                      <span className="flex-1 whitespace-pre-line">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              );
                            }
                            
                            // Regular paragraph
                            return paragraph.trim() && (
                              <p key={pIdx} className="text-white/90 font-montserrat text-base sm:text-lg leading-relaxed">
                                {paragraph.trim()}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Section Divider (not for last section) */}
                      {idx < selectedNewsletter.content.split('\n\n\n').length - 1 && (
                        <div className="mt-8 pt-8 border-t border-white/10" />
                      )}
                    </div>
                  );
                })}
              </div>

              {selectedNewsletter.pdf_url && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={selectedNewsletter.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black px-6 py-3 text-base font-medium font-cinzel rounded-lg hover:bg-white/90 transition-all duration-200"
                  >
                    Download Full PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

