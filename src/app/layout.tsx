import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import "@fontsource/dm-sans";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "RheumaConnect",
  description: "Navbar Integration Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
