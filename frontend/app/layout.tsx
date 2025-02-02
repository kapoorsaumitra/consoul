import type { Metadata } from "next";
import { Mulish } from "next/font/google"; 
import "./globals.css";
import { Navbar } from "./components/Navbar";


const mulishSans = Mulish({
  variable: "--font-mulish-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Consoul",
  description: "consumer | strategy | tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mulishSans.variable} antialiased`}
      ><Navbar />
        {children}
      </body>
    </html>
  );
}
