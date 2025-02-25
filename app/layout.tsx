import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter} from "next/font/google"
import StarsCanvas from "@/components/main/Starbackground";
import Navbar from "@/components/main/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter =Inter({subsets : ['latin']})
export const metadata: Metadata = {
  title: "Bishal's Porfolio",
  description: "For mine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
