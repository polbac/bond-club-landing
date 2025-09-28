import type { Metadata } from "next";
import { headers } from "next/headers";

import { HeaderContextProvider } from "./context/HeaderContext";
import SmoothScroll from "./components/SmoothScroll";

import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "B.O.N.D. CLUB",
  description: "estamos haciendo una multitud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const isIndex = pathname === "/" || pathname === "";

  return (
    <html lang="en">
      <body>
        <HeaderContextProvider>
          <SmoothScroll>
            <Header />
            {children}
          </SmoothScroll>
        </HeaderContextProvider>

        <Footer />


        <link rel="stylesheet" href="/assets/fonts/stylesheet.css" />
        <link rel="stylesheet" href="/assets/fonts/pp-editorial/stylesheet.css" />

        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </body>
    </html>
  );
}
