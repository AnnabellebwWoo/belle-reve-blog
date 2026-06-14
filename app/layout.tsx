import type { Metadata } from "next";
import { Antic_Didone, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import JumpToTop from "../components/JumpButton/JumpToTop";

const anticDidone = Antic_Didone({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-antic-didone",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Belle Reve - A Lifestyle Blog",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anticDidone.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <Header></Header>
        <main>{children}</main>
        <JumpToTop></JumpToTop>
        <Footer></Footer>
        <Analytics />
      </body>
    </html>
  );
}
