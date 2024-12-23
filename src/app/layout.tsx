import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import "@fontsource/dm-sans";

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
    <html lang="en">
      <body
        className="antialiased"
        style={{
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
