"use client";
import { ThemeProvider } from "@material-tailwind/react";
import "./globals.css";
import "../../material-tailwind.d.ts";
import { themeProvider } from "./services/theme/themeProvider";
import { Footer } from "./components/Footer";

const HeadHtml = () => {
  return (
    <head>
      <link
        rel="icon"
        type="image/svg+xml"
        href="/logo_objectifLarge.svg"
        sizes="any"
      />
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <title>Objectif Large</title>
    </head>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider value={themeProvider}>
      <html lang="fr">
        <HeadHtml />
        <body>
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
