import type { Metadata } from "next";
import { Syncopate, Montserrat } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "CR Estudio Odontológico",
  description: "Estudio odontológico de Carolina Rico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syncopate.variable} ${montserrat.variable}`}>
      <body className="font-body bg-cloud text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
