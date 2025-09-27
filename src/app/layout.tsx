import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const belanosima = localFont({
  src: [
    {
      path: "./fonts/Belanosima-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Belanosima-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Belanosima-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-belanosima",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2HGANA - CÔNG TY TNHH GIÁO DỤC 2H GANA VIỆT NAM",
  description: "Phát triển năng lực cá nhân và kỹ năng sống toàn diện",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${belanosima.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
