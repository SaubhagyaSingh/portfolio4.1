import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Navigation from "./components/Navigation"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Saubhagya Singh",
  description: "Portfolio website",
  image: "../public/pf.jpg",
  url: "https://saubhagyasingh.netlify.app/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Navigation/>
      </body>
    </html>
  )
}
