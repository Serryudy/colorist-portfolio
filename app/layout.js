import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Color Grading Portfolio | Luminora PowerGrades",
  description: "Professional color grading, Luminora PowerGrades, LUTs, and footage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script src="https://www.2checkout.com/static/checkout/javascript/direct.min.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

