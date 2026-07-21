import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://portafolio-personal-zeta-mauve.vercel.app";
const title =
  "Javier Hermosilla | Desarrollador Full Stack / Backend Junior";
const description =
  "Portafolio de Javier Hermosilla, egresado de Ingeniería en Informática y desarrollador Full Stack / Backend Junior especializado en aplicaciones web y APIs.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: "Portafolio de Javier Hermosilla",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: "/jh-icon.png",
    shortcut: "/jh-icon.png",
    apple: "/jh-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
