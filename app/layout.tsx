import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "KK's WAR ROOM | AI-Powered Leadership Battlefield",
  description: "Enter the ultimate AI-powered live business simulation. 60 minutes of high-intensity leadership training that reveals how you think, decide, and take ownership under pressure.",
  keywords: ["leadership training", "AI simulation", "business battlefield", "executive training", "war room", "leadership development"],
  authors: [{ name: "KK's War Room" }],
  creator: "KK's War Room",
  openGraph: {
    title: "KK's WAR ROOM | AI-Powered Leadership Battlefield",
    description: "Enter the ultimate AI-powered live business simulation. 60 minutes that will transform how you lead.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KK's WAR ROOM | AI-Powered Leadership Battlefield",
    description: "Enter the ultimate AI-powered live business simulation.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
