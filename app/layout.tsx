import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Lora } from "next/font/google";

const lora = Lora({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pilla Dipesh",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <Sidebar />
        <main className="md:ml-[270px]">{children}</main>
      </body>
    </html>
  );
}
