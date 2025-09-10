import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: "Sabrina Silva Ferreira de Lima | Especialista em Redes de Computadores",
  description:
    "Portfólio profissional de Sabrina Silva Ferreira de Lima, especialista em redes de computadores, configuração, manutenção e segurança de redes, com experiência em desenvolvimento web e infraestrutura de TI.",
  keywords: [
    "redes de computadores",
    "infraestrutura de TI",
    "desenvolvimento web",
    "segurança de redes",
    "configuração de redes",
    "manutenção de redes",
    "Cisco",
    "TCP/IP",
    "VLAN",
    "firewall",
    "VPN",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "portfólio profissional"
  ],
  authors: [{ name: "Sabrina Silva Ferreira de Lima" }],
  creator: "Sabrina Silva Ferreira de Lima",
  publisher: "Sabrina Silva Ferreira de Lima",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wi3li.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sabrina Silva Ferreira de Lima | Especialista em Redes de Computadores",
    description:
      "Portfólio profissional de Sabrina Silva Ferreira de Lima, especialista em redes de computadores, configuração, manutenção e segurança de redes, com experiência em desenvolvimento web e infraestrutura de TI.",
    url: "https://wi3li.site",
    siteName: "Portfólio Sabrina Silva",
    images: [
      {
        url: "/banner.png",
        width: 1280,
        height: 720,
        alt: "Sabrina Silva Ferreira de Lima - Especialista em Redes de Computadores",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabrina Silva Ferreira de Lima | Especialista em Redes de Computadores",
    description:
      "Portfólio profissional de Sabrina Silva Ferreira de Lima, especialista em redes de computadores, configuração, manutenção e segurança de redes, com experiência em desenvolvimento web e infraestrutura de TI.",
    images: ["/banner.png"],
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
    google: "google-site-verification-code", // Substitua pelo código real quando disponível
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html { scroll-behavior: smooth; }
            body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
            * { box-sizing: border-box; }
          `
        }} />
        <link rel="preload" href="/image/profile.png" as="image" type="image/png" />
        <link rel="preload" href="/banner.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
