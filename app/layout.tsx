import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "scarz.lol — claim your name",
  description: "One page for everything you are. Animated names, badges, music, and more.",
  themeColor: "#07060c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
