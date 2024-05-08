"use client";

import Logo from "@/public/logo";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  weight: "400",
  subsets: ["latin"],
});

export const Sidebar = () => {
  return (
    <main className="hidden md:block">
      <div className="fixed left-0 top-0">
        <div className="w-[270px] h-[100dvh] border border-b-[#ecedf0] pt-10 fixed">
          <div className="pb-8 px-8 border border-b-[#ecedf0] border-white">
            <Link href={"/"}>
              <Logo />
            </Link>
            <ul className="flex flex-col gap-3 pt-5 text-xl text-[#3b3d41]">
              <Link href={"/about"} className={bricolage.className}>
                About
              </Link>
              <Link href={"/ideas"} className={bricolage.className}>
                Ideas
              </Link>
              <Link href={"/cv"} className={bricolage.className}>
                CV
              </Link>
            </ul>
          </div>
          <div className="pt-6 pb-8 border border-b-[#ecedf0] border-white px-8">
            <h4 className="text-[#afb2b9] uppercase text-[16px]">contact</h4>
            <ul className="flex flex-col gap-3 pt-5 text-md text-[#3b3d41]">
              <Link href={""} className={bricolage.className}>
                Mail
              </Link>
              <Link href={""} className={bricolage.className}>
                Twitter
              </Link>
              <Link href={""} className={bricolage.className}>
                LinkedIn
              </Link>
              <Link href={""} className={bricolage.className}>
                Github
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
