// --- RootLayout.tsx ---
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Fixed import for the global data 
import { Globals } from "../data/globals"; // ✅ Fixed import

// DevTools is a component that displays tailwind breakpoints and the dark mode toggle and sets title to include Dev | ...
import { DevTools } from "@movie-recommendation/ui";
import Header from "@/components/appBody/Header";
import Main from "@/components/appBody/Main";
import Footer from "@/components/appBody/Footer";
import ModalDisplay from "@/components/appBody/ModalDisplay";

// Styles
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: Globals.APP_NAME,
  description: "Check out my movie recommendations",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="description" content={metadata.description ?? ""} />
        <meta name="theme-color" content="#4A148C" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen min-w-56`}>
        <DevTools
          // showColorBoxes
          // showHeaders
        />
        <ModalDisplay/>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
