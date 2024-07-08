import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timbu Cloud shop",
  description: "A Mini Online Store!",
};

const jakarta = localFont({
  src: [
    {
      path: "../font/PlusJakartaSans-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../font/PlusJakartaSans-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} font-sans`}
        suppressHydrationWarning={true}
      >
        <NavBar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
