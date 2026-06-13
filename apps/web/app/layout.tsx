import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://super-wow-ui-design.vercel.app"),
  title: {
    default: "Super Wow UI Design",
    template: "%s | Super Wow UI Design",
  },
  description:
    "Directorio visual de recursos para diseñar páginas web y aplicaciones modernas.",
  openGraph: {
    title: "Super Wow UI Design",
    description:
      "Herramientas, componentes, animación e inspiración para diseño web y apps.",
    type: "website",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080d18" },
    { media: "(prefers-color-scheme: light)", color: "#f8f9fc" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
