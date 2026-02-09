'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import GlowButton from '@/components/ui/GlowButton'

export default function InvestorLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [accessCode, setAccessCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/investor-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          accessCode: accessCode.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Authentication failed')
        setIsLoading(false)
        return
      }

      // Redirect to investor dashboard
      router.push('/investor-dashboard')
    } catch (err) {
      setError('An error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeInUp">
            <div className="text-center mb-8 sm:mb-10">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-2 sm:mb-3">Investors</p>
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
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
              >Investor Portal</h1>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="fr-card p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all duration-200"
                    placeholder="investor@example.com"
                    disabled={isLoading}
                  />
                </div>

                {/* Access Code Input */}
                <div>
                  <label
                    htmlFor="accessCode"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Access Code
                  </label>
                  <input
                    type="password"
                    id="accessCode"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all duration-200"
                    placeholder="Enter your access code"
                    disabled={isLoading}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 text-sm text-center">
                      {error}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <GlowButton
                  type="submit"
                  disabled={isLoading}
                  className="w-full justify-center"
                >
                  {isLoading ? 'Authenticating...' : 'Access Portal'}
                </GlowButton>
              </form>

              {/* Help Text */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-white/40 text-xs sm:text-sm text-center text-balance">
                  If you need assistance accessing your account, please contact{' '}
                  <a
                    href="/contact"
                    className="text-white/60 hover:text-white underline transition-colors duration-200"
                  >
                    our team
                  </a>
                  .
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}

