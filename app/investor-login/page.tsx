'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
    <div className="min-h-screen bg-black flex flex-col">
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

      {/* Header with logo */}
      <div className="relative z-10 pt-12 pb-8 px-6">
        <div className="max-w-md mx-auto text-center">
          <Image
            src="/logos/Screenshot 2025-09-07 130347.png"
            alt="Founders Row Logo"
            width={300}
            height={75}
            className="h-16 w-auto mx-auto mb-8"
            priority
          />
          <h1 className="text-3xl sm:text-4xl font-light text-white font-cinzel mb-4">
            Investor Portal
          </h1>
          <p className="text-white/70 font-montserrat text-sm sm:text-base">
            Access quarterly newsletters and updates
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/90 font-montserrat mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 font-montserrat"
                  placeholder="investor@example.com"
                  disabled={isLoading}
                />
              </div>

              {/* Access Code Input */}
              <div>
                <label
                  htmlFor="accessCode"
                  className="block text-sm font-medium text-white/90 font-montserrat mb-2"
                >
                  Access Code
                </label>
                <input
                  type="password"
                  id="accessCode"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 font-montserrat"
                  placeholder="Enter your access code"
                  disabled={isLoading}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 text-sm font-montserrat text-center">
                    {error}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black px-6 py-3 text-base font-medium font-cinzel rounded-lg hover:bg-white/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Authenticating...' : 'Access Portal'}
              </button>
            </form>

            {/* Help Text */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/60 text-xs sm:text-sm font-montserrat text-center">
                If you need assistance accessing your account, please contact{' '}
                <a
                  href="/contact"
                  className="text-white/90 hover:text-white underline transition-colors duration-200"
                >
                  our team
                </a>
                .
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-white/70 hover:text-white text-sm font-montserrat transition-colors duration-200 inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

