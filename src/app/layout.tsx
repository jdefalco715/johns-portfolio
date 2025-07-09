import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John DeFalco",
  description: "Portfolio website of John DeFalco",
  icons: {
    icon: "/jd-logo.svg",
    apple: "/jd-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className="dark"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
