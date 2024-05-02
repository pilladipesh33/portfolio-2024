import { BreakSpace } from "@/components/break-spacing";
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
        <div className="relative h-48 w-full rounded-lg">
          <Image alt="uni" src={"/uni.jpeg"} layout="fill" objectFit="cover" />
        </div>
      </section>
    </div>
  );
};

export default About;
