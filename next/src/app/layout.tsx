import type { Metadata } from "next";
// Usando uma fonte mais aconchegante para o nosso café
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cantinho do Café",
  description: "Descubra o nosso café especial do dia!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${sora.className} bg-zinc-900 text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
