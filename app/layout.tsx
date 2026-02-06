import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// CONFIGURACIÓN DE METADATOS Y FAVICON PERSONALIZADO
export const metadata: Metadata = {
  title: "Javier Hermosilla | Software Developer",
  description:
    "Ingeniero en Informática especializado en desarrollo Fullstack con React y Node.js. Egresado de Duoc UC, Generación 2025.",
  icons: {
    // Apuntamos al archivo jh-icon.svg que tienes en la carpeta /public
    // Agregamos ?v=2 para forzar al navegador a actualizar el icono
    icon: [
      {
        url: "/jh-icon.png",
        href: "/jh-icon.png",
      },
    ],
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
