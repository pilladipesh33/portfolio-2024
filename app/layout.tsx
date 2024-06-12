import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { cabinetBold, cabinetExtraBold, hindi, satoshi } from "@/lib/fonts";
import { SmoothScrolling } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Pilla Dipesh ── Frontend Developer ",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hindi.variable} ${satoshi.variable} ${cabinetBold.variable} ${cabinetExtraBold.variable}`}
    >
      <body className="bg-[#fffff0]">
        <SmoothScrolling>
          <Navbar />
          <Sidebar />
          <main className="md:ml-[270px]">{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
