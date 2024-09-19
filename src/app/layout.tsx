import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "FinPro - Soluciones Financieras",
  description:
    "FinPro ofrece préstamos personales, tarjetas de crédito y cuentas de ahorro. Regístrate para obtener más información.",
  keywords:
    "préstamos personales, tarjetas de crédito, cuentas de ahorro, FinPro, servicios financieros",
  openGraph: {
    title: "FinPro - Soluciones Financieras",
    description:
      "Descubre cómo FinPro puede ayudarte con préstamos personales, tarjetas de crédito y cuentas de ahorro.",
    url: "https://finpro.example.com",
    images: "/images/finpro-og-image.jpg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
