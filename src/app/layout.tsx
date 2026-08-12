import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body-src",
});

const heading = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heading-src",
});

export const metadata: Metadata = {
  title: "John DeFalco",
  description: "Portfolio of John DeFalco, front end developer specializing in ecommerce interfaces.",
  icons: {
    icon: "/jd-logo.svg",
    apple: "/jd-logo.svg",
  },
};

const noFlashThemeScript = `
  (function(){try{
    var t = localStorage.getItem('jd-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = t;
  }catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body className="antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
