import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import StoreProvider from "./StoreProvider";
import { cn } from "@/lib/utils";
import { Header } from "./ui/header";
import Head from "next/head";
import { AdSense } from "./ui/adsense/adsense";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Responsive img",
  description: "Resize your images to multiple resolutions",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-adsense-account"
          content={`ca-pub-${process.env.GOOGLE_PID}`}
        />
        <AdSense />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background bg-slate-100 font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
