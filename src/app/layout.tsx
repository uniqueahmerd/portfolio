import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "react-hot-toast"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Ahmad Usman - Software Developer",
    template: "%s | Ahmad"
  },
  description: "Portfolio of Ahmad Usman - Software Developer. I build web applications and solve problems with code.",
  keywords: ["Ahmad Usman", "Portfolio", "Software Developer", "Backend Developer", "Full Stack Developer", "Node.js", "React", "Next.js"],
  authors: [{ name: "Ahmad Usman" }],
  creator: "Ahmad Usman",
  // metadataBase: new URL(""),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Ahmad Usman - Software Developer",
    description: "Portfolio of Ahmad Usman - Software Developer. I build web applications and solve problems with code.",
    // url: "https://abdullahbozdag.com",
    siteName: "Ahmad Usman Portfolio",
    images: [
      {
        url: "/assets/Images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Usman - Software Developer"
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Usman - Software Developer",
    description: "Portfolio of Ahmad Usman - Software Developer.",
    images: ["/assets/Images/og-image.png"],
    creator: "",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
