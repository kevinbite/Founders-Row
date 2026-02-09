import type { Metadata } from 'next'
import './globals.css'
import { Cinzel, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const cinzel = Cinzel({ 
  subsets: ['latin'], 
  variable: '--font-cinzel',
  weight: ['400', '600', '700', '900']
})
const lato = Lato({ 
  subsets: ['latin'], 
  variable: '--font-lato',
  weight: ['300', '400', '700']
})

export const metadata: Metadata = {
  title: 'Founders Row',
  description: 'A leading private equity firm focused on growth-stage investments and strategic partnerships.',
  keywords: 'private equity, investment, venture capital, growth capital, strategic partnerships',
  icons: {
    icon: '/icons/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black overflow-x-hidden">
      <body className={`${cinzel.variable} ${lato.variable} antialiased bg-black overflow-x-hidden`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
