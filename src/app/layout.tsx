import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Beetech World - Digital Commerce & Entrepreneurship Platform",
    template: "%s | Beetech World",
  },
  description:
    "Beetech World is a complete digital commerce and entrepreneurship platform designed to empower shoppers, shop owners, and investors under one trusted ecosystem.",
  keywords: [
    "Beetech",
    "Beetech World",
    "digital commerce",
    "entrepreneurship",
    "Bangladesh",
    "Beetech Super Shop",
    "Beetech Communication",
  ],
  authors: [{ name: "Beetech Communication OPC" }],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    siteName: "Beetech World",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
