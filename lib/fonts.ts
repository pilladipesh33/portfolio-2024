import { Bricolage_Grotesque, Lora } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bricolage",
});

const bricolageSemibold = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-bricolage-semi",
});

const lora = Lora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lora",
});
