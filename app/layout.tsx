import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { cabinetBold, cabinetExtraBold, hindi, satoshi } from "@/lib/fonts";
import { ThemeProvider } from "next-themes";

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
    <html
      lang="en"
      className={`${hindi.variable} ${satoshi.variable} ${cabinetBold.variable} ${cabinetExtraBold.variable}`}
    >
      <body className="">
        <Navbar />
        <Sidebar />
        <main className="md:ml-[270px]">
          <ThemeProvider>{children}</ThemeProvider>
        </main>
      </body>
    </html>
  );
}
