import { Noto_Serif_Devanagari } from "next/font/google";
import localFont from "next/font/local";

export const satoshi = localFont({
  src: "../public/fonts/Satoshi-Medium.ttf",
  display: "swap",
  variable: "--font-satoshi",
});

export const cabinetBold = localFont({
  src: "../public/fonts/CabinetGrotesk-Bold.ttf",
  display: "swap",
  variable: "--font-cabinet-bold",
});

export const cabinetExtraBold = localFont({
  src: "../public/fonts/CabinetGrotesk-Extrabold.ttf",
  display: "swap",
  variable: "--font-cabinet-extraBold",
});

export const hindi = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-hindi",
  weight: "400",
});
