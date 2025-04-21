import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saubhagya Singh",
  description: "Portfolio website",
  image: "/pf.jpg", // Correct path to the image
  url: "https://saubhagyasingh.netlify.app/",
  icons: {
    icon: "/favicon.png", // Set your favicon here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
