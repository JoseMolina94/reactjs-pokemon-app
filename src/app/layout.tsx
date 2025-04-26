import type { Metadata } from "next";
import QueryProvider from "@/providers/ReactQueryProvider";

import "./globals.css";
import "../index.css"
import PokemonSelectedContextProvider from "@/contexts/PokemonSelectedContext";

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "A Pokemon app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QueryProvider>
          <PokemonSelectedContextProvider>
            {children}
          </PokemonSelectedContextProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
