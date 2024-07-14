import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const nunito = Nunito({ subsets: ["latin"], style: "normal", weight: ['400', '500'] });

export const metadata: Metadata = {
  title: {
    template: "%s | Lony",
    default: "Lony - Ladies of New York"
  },
  description: "Embrião de marca de moda do Brasil. Garotas iniciantes no ramo da moda que visam criar a sua própria marca com seus próprios produtos.",
  icons: {
    icon: '/icon.ico'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={nunito.className}>
        <NextTopLoader color="#111" />
        {children}
      </body>
    </html>
  );
}
