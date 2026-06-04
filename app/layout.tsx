import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const siteUrl = "https://profilebiogenerator.site"

export const metadata: Metadata = {
  title: {
    default: "Profile Bio Generator – Create Unique Bios Instantly",
    template: "%s | Profile Bio Generator",
  },
  icons: {
    icon: "/brand/pbg-favicon.svg",
  },
  description:
    "Discover the best instagram bio ideas and generate stunning, high-converting bios in seconds. Free AI-powered tool for aesthetic, stylish, and professional profiles.",
  keywords: [
    "instagram bio ideas for boys",
    "cool instagram bio for boys",
    "attitude bio for boys instagram",
    "stylish instagram bio for boys",
    "instagram bio for girls",
    "aesthetic instagram bio",
    "best instagram bio 2026",
    "instagram bio generator",
    "profile bio generator",
    "tiktok bio generator"
  ],
  authors: [{ name: "Profile Bio Generator" }],
  creator: "Profile Bio Generator",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "Profile Bio Generator",
    title: "Profile Bio Generator – Create Unique Bios Instantly",
    description:
      "Discover the best social media bio ideas and generate stunning, high-converting bios in seconds. Free AI-powered tool for aesthetic, stylish, and professional profiles.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profile Bio Generator – Create Unique Bios Instantly",
    description:
      "Discover the best social media bio ideas and generate stunning, high-converting bios in seconds. Free AI-powered tool for aesthetic, stylish, and professional profiles.",
    creator: "@profilebiogen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "g4UN8qZBakpycCcAlG-QrqwigzDDGs3HvJZB3Su1iLA",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${playfair.variable}`}
    >
      <head />
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X2YJ572314"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X2YJ572314');
          `}
        </Script>
      </body>
    </html>
  )
}
