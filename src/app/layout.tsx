"use client";
import { ThemeProvider } from "@material-tailwind/react";
import "./globals.css";
import "../../material-tailwind.d.ts";
import { themeProvider } from "./services/theme/themeProvider";
import { Footer } from "./components/Footer";
import { StickyNavbar } from "./components/StickyNavbar";

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
      <meta
        name="title"
        content="Objectif Large - Des Professionnels en Services Nautiques"
      />
      <meta
        name="keywords"
        content="Nautisme, voilier, yacht à moteur, croisière, convoyage, régates, évènements nautiques"
      />
      <meta
        name="descritpion"
        content="Organisation d'évènements nautiques, Skippage, école de croisière, Convoyages toutes destinations, Prise en main personnalisée de votre voilier, de votre yacht à moteurs, Coaching d'équipage de voiliers et de yachts à moteurs, pour vos croisières familiales, vos régates entre amis, vos régates entreprises"
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
          <StickyNavbar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
