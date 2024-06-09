import { AboutList } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-20 mx-6 md:mt-10 md:mx-10">
      <section className="pt-10 md:pt-0">
        <h1 className="font-title uppercase text-xs leading-[1.2em] tracking-[1.86px] text-[#a1a1a1]">
          Let the animation load...
        </h1>

        <div>
          <div className="pt-20">
            <div className="flex justify-between w-full ">
              <h1
                className={`bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7] text-[100px] leading-[100px] tracking-[-.04em] font-semibold md:text-[172px]
              md:tracking-tighter md:leading-[140px] font-title`}
              >
                Pilla
              </h1>
              <p className="text-[#a1a1a1] text-sm tracking=[1.86px] leading-[1.2em] md:hidden block">
                EN
              </p>
            </div>
            <h1
              className={`bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7] text-[100px] leading-[100px] tracking-[-.04em] font-semibold md:text-[172px]
              md:tracking-tighter md:leading-[200px] font-title`}
            >
              Dipesh
            </h1>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-between w-full ">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7] text-[60px] leading-[100px] tracking-[-.03em] font-hindi">
              {AboutList.NAME}
            </h1>
            <p className="text-[#a1a1a1] text-sm tracking=[1.86px] leading-[1.2em]">
              HN
            </p>
          </div>
        </div>
      </section>

      <section className="pt-5 ">
        <h4 className="font-title text-sm tracking-[1.86px] leading-[1.2em] text-[#afb2b9] pb-10 uppercase md:text-[16px]">
          info
        </h4>
        <p className="text-sm text-[#3b3d41] tracking-normal leading-5 md:text-md font-body">
          {AboutList.CONTENT_1}
        </p>
        <p className="text-sm text-[#3b3d41] tracking-normal leading-5 pt-5 md:text-md font-body">
          {AboutList.CONTENT_2}
        </p>
        <p className="text-sm text-[#3b3d41] tracking-normal leading-5 pt-5 md:text-md font-body">
          {AboutList.CONTENT_3}
        </p>
      </section>

      <div className="border-white border border-b-neutral-200 pb-20"></div>

      <section className="pt-5">
        <h4
          className={`font-title text-sm tracking-[1.86px] leading-[1.2em] text-[#afb2b9] pb-5 uppercase md:text-[16px]`}
        >
          education
        </h4>
        <div className="md:flex md:flex-row-reverse md:justify-between md:items-center">
          <div className="md:flex md:flex-col md:w-1/2">
            <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-xl ">
              <Image
                alt="uni"
                src={"/uni.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="pt-5 text-sm font-body text-[#3b3d41] tracking-normal leading-5">
              Gitam campus in summertime
            </p>
          </div>
          <div className="md:flex md:flex-col">
            {" "}
            <h1
              className={`pt-8 text-2xl font-normal tracking-[-.01em] leading-7 text-[#3b3d41] font-title`}
            >
              GITAM University
            </h1>
            <h2
              className={`font-title text-2xl font-normal tracking-tight leading-7 text-[#afb2b9]`}
            >
              College of Information Technology
            </h2>
            <p className="pt-5 font-body text-md font-normal tracking-normal leading-5 text-[#3b3d41]">
              Bachelors in Electronic and Commnunication Engineering
            </p>
          </div>
        </div>
      </section>

      <div className="border-white border border-b-neutral-200 pb-20"></div>

      <section className="pt-5">
        <div className="">
          <h4 className="font-title text-sm tracking-[1.86px] leading-[1.2em] text-[#afb2b9] pb-5 uppercase">
            Things I love to do
          </h4>
          <ul className="pb-20 font-body">
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
        </div>
      </section>
    </div>
  );
};

export default About;
