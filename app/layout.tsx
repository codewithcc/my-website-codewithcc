import type { Metadata } from "next"
import { Outfit, Ovo } from "next/font/google"
import "@/app/globals.css"
import { SessionProvider } from "next-auth/react"

const outfit = Outfit({
    subsets: ["latin"], weight: ["400", "500", "600", "700"]
})

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
})

export const metadata: Metadata = {
  title: "Portfolio Website - Code with Cc",
  description: "Welcome to the portfolio of Chanchal Roy (Code with Cc), a Software Developer. Explore my projects, read about my experience, and let's build something great together.",
}

export default function RootLayout({children }: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}> 
                {children}
            </body>
        </html>
    )
}
