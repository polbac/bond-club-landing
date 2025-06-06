import type { Metadata } from "next";
import { headers } from "next/headers";

import { HeaderContextProvider } from "./context/HeaderContext";
/* import AnimatedCursor from "react-animated-cursor"; */

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
          <Header />

          {children}
        </HeaderContextProvider>

        {/* <AnimatedCursor
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".cursor",
          ]}
        /> */}
        <Footer />

        {/* <link rel="stylesheet" href="/assets/fonts/VCROSDMono.css" />
        <link rel="stylesheet" href="/assets/fonts/chaney/stylesheet.css" /> */}
        {/* <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700&display=swap"
          rel="stylesheet"
        ></link> */}
        <link
          rel="stylesheet"
          href="/assets/fonts/Alternate_Gothic/stylesheet.css"
        />
        <link rel="stylesheet" href="/assets/fonts/editorial/stylesheet.css" />
        <link rel="stylesheet" href="/assets/fonts/matter/stylesheet.css" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </body>
    </html>
  );
}
