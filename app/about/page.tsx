import { AboutList } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-20">
      <section className="pt-10">
        <h1 className="uppercase text-xs leading-[1.2em] tracking-[1.86px] text-[#a1a1a1]">
          Let the animation load...
        </h1>

        <div className="pt-20">
          <div className="flex justify-between w-full ">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7] text-[100px] leading-[80px] tracking-[-.04em] font-semibold">
              Pilla
            </h1>
            <p className="text-[#a1a1a1] text-sm tracking=[1.86px] leading-[1.2em]">
              EN
            </p>
          </div>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7] text-[100px] leading-[100px] tracking-[-.04em] font-semibold">
            Dipesh
          </h1>
        </div>
        <div className="pt-5">
          <div className="flex justify-between w-full ">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7] text-[60px] leading-[100px] tracking-[-.03em] font-semibold">
              {AboutList.NAME}
            </h1>
            <p className="text-[#a1a1a1] text-sm tracking=[1.86px] leading-[1.2em]">
              HN
            </p>
          </div>
        </div>
      </section>

      <section className="pt-5 ">
        <h4 className="text-sm tracking-[1.86px] leading-[1.2em] text-[#afb2b9] pb-10 uppercase">
          info
        </h4>
        <p className="text-sm text-[#3b3d41] tracking-normal leading-5">
          {AboutList.CONTENT_1}
        </p>
        <p className="text-sm text-[#3b3d41] tracking-normal leading-5 pt-5">
          {AboutList.CONTENT_2}
        </p>
        <p className="text-sm text-[#3b3d41] tracking-normal leading-5 pt-5">
          {AboutList.CONTENT_3}
        </p>
      </section>

      <div className="border-white border border-b-[#ecedf0] pb-20"></div>

      <section className="pt-5">
        <h4 className="text-sm tracking-[1.86px] leading-[1.2em] text-[#afb2b9] pb-5 uppercase">
          education
        </h4>
        <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-xl ">
          <Image alt="uni" src={"/uni.jpeg"} layout="fill" objectFit="cover" />
        </div>

        <p className="pt-5 text-sm text-[#3b3d41] tracking-normal leading-5">
          Gitam campus in summertime
        </p>

        <h1 className="pt-8 text-2xl font-normal tracking-[-.01em] leading-7 text-[#3b3d41]">
          GITAM University
        </h1>
        <h2 className=" text-2xl font-normal tracking-tight leading-7 text-[#afb2b9]">
          College of Information Technology
        </h2>

        <p className="pt-5 text-md font-normal tracking-normal leading-5 text-[#3b3d41]">
          Bachelors in Electronic and Commnunication Engineering
        </p>
      </section>

      <div className="border-white border border-b-[#ecedf0] pb-20"></div>

      <section className="pt-5">
        <h4 className="text-sm tracking-[1.86px] leading-[1.2em] text-[#afb2b9] pb-5 uppercase">
          Things I love to do
        </h4>

        <ul className="pb-20">
          <li className="text-2xl font-normal tracking-normal leading-7 text-[#3b3d41]">
            Anime
          </li>
          <li className="text-2xl font-normal tracking-normal leading-7 text-[#3b3d41]">
            Electronic games
          </li>
          <li className="text-2xl font-normal tracking-normal leading-7 text-[#3b3d41]">
            Football Fan
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
