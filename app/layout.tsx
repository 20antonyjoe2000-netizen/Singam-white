import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SINGAM ACADEMY | Elite Performance Coaching",
  description:
    "A data-driven performance sanctuary designed for those who refuse to compromise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-on-surface antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
