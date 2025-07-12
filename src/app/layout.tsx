// import type { Metadata } from "next";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import "@fontsource/dm-sans";
import { API_ENDPOINTS } from "@/config/endpoints";
import { DM_Sans } from "next/font/google";
import Footer from "./components/Footer";
import { ApiResponseSingle, NavbarType } from "@/types/CommonTypes";
import { getData } from "@/lib/helpers/dataFetchHelper";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Arthritis.lk",
  description:
    "Platform where patients can easily access reliable information about rheumatic conditions.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarResponse: ApiResponseSingle<NavbarType> = await getData(
    `${API_ENDPOINTS.NAVBAR}`
  );

  const navbarData = navbarResponse?.data;

  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased font-sans">
        <Navbar data={navbarData} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}