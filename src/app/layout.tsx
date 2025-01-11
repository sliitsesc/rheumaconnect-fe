// import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import "@fontsource/dm-sans";
import { API_ENDPOINTS } from "@/config/endpoints";
import { API_URL } from "@/config";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

// export const metadata: Metadata = {
//   title: "RheumaConnect",
//   description: "",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetch(
    `${API_URL}${API_ENDPOINTS.NAVBAR}?populate=link&populate=navbarButton`
  );
  const navbarData = await data.json();

  return (

    <html lang="en" className={dmSans.variable}>
      <body className="antialiased font-sans">
        <Navbar data={navbarData?.data} />
        <main>{children}</main>
      </body>
    </html>
  );
}
