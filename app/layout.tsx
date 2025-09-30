import type { Metadata } from 'next'
import './globals.css'
import { Inter, Cinzel, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

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
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
