// import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import "@fontsource/dm-sans";
import { API_ENDPOINTS } from "@/config/endpoints";
import { API_URL } from "@/config";

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
    <html lang="en">
      <body
        className="antialiased"
        style={{
          fontFamily: "'DM Sans', sans-serif",
        }}>
        <Navbar data={navbarData?.data} />
        <main>{children}</main>
      </body>
    </html>
  );
}
