// import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import "@fontsource/dm-sans";
import { API_ENDPOINTS } from "@/config/endpoints";
import { API_URL } from "@/config";
import { DM_Sans } from "next/font/google";
import Footer from "./components/Footer";
import {
  ApiResponse,
  ApiResponseSingle,
  NavbarType,
} from "@/types/CommonTypes";
import { getData } from "@/lib/helpers/dataFetchHelper";

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
  const navbarResponse: ApiResponseSingle<NavbarType> = await getData(
    `${API_ENDPOINTS.NAVBAR}`
  );

  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased font-sans">
        <Navbar data={navbarResponse?.data} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
