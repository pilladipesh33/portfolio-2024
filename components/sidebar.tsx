"use client";

import Logo from "@/public/logo";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  weight: "500",
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
            <ul className="flex flex-col gap-3 pt-5 text-xl text-[#3b3d41] ">
              <Link
                href={"/about"}
                className={`${bricolage.className} hover:text-[#787276] w-1/2`}
              >
                About
              </Link>
              <Link
                href={"/ideas"}
                className={`${bricolage.className} hover:text-[#787276] w-1/2`}
              >
                Ideas
              </Link>
              <Link
                href={"/cv"}
                className={`${bricolage.className} hover:text-[#787276] w-1/2`}
              >
                CV
              </Link>
            </ul>
          </div>
          <div className="pt-6 pb-8 border border-b-[#ecedf0] border-white px-8">
            <h4 className="text-[#afb2b9] uppercase text-[16px]">contact</h4>
            <ul className="flex flex-col gap-3 pt-5 text-md text-[#3b3d41]">
              <Link
                href={"pilladipesh.pd@gmail.com"}
                target="_blank"
                className={`${bricolage.className} hover:text-[#787276] w-1/2`}
              >
                Mail
              </Link>
              <Link
                href={"https://twitter.com/dip3sh_"}
                target="_blank"
                className={`${bricolage.className} hover:text-[#787276] w-1/2`}
              >
                Twitter
              </Link>
              <Link
                href={"https://www.linkedin.com/in/pilladipesh/"}
                target="_blank"
                className={`${bricolage.className} hover:text-[#787276] w-1/2`}
              >
                LinkedIn
              </Link>
              <Link
                href={"https://github.com/pilladipesh33"}
                target="_blank"
                className={`${bricolage.className} hover:text-[#787276] w-1/2`}
              >
                Github
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
