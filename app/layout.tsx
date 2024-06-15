import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Responsive img",
  description: "Resize your images to multiple resolutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
