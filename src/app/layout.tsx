import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desafio Drena 21 — Dani Estética",
  description:
    "Descubra como desinchar e modelar seu corpo em 21 dias com automassagem profissional em casa. Método de esteticista com 15+ anos e mais de 5.000 sessões.",
  openGraph: {
    title: "Desafio Drena 21 — Dani Estética",
    description:
      "Desinche e modele seu corpo em 21 dias com apenas 19 minutos de automassagem profissional por dia.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta Pixel — inserir código aqui */}
      </head>
      <body className={`${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
