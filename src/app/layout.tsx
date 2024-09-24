"use client";
import { ThemeProvider } from "@material-tailwind/react";
import "./globals.css";
import "../../material-tailwind.d.ts";
import { themeProvider } from "./services/theme/themeProvider";
import { Footer } from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider value={themeProvider}>
      <html lang="fr">
        <body>
          {children} <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
