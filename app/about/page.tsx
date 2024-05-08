import { AboutItem } from "@/components/three/aboutItem";
import { AboutList, bricolage } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-20 mx-6 md:mt-10 md:mx-10">
      <section className="pt-10 md:pt-0">
        <h1 className="uppercase text-xs leading-[1.2em] tracking-[1.86px] text-[#a1a1a1]">
          Let the animation load...
        </h1>

        <div className="md:flex md:justify-between md:items-center">
          <div className="pt-20">
            <div className="flex justify-between w-full ">
              <h1
                className={`bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7] text-[100px] leading-[100px] tracking-[-.04em] font-semibold md:text-[172px]
              md:tracking-tighter md:leading-[140px] ${bricolage.className}`}
              >
                Pilla
              </h1>
              <p className="text-[#a1a1a1] text-sm tracking=[1.86px] leading-[1.2em] md:hidden block">
                EN
              </p>
            </div>
            <h1
              className={`bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7] text-[100px] leading-[100px] tracking-[-.04em] font-semibold md:text-[172px]
              md:tracking-tighter md:leading-[200px] ${bricolage.className}`}
            >
              Dipesh
            </h1>
          </div>
          <div className="md:block hidden w-1/2 bg-teal-500">
            <div className="flex justify-center items-center">
              <AboutItem />
            </div>
          </div>
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
        <h4 className="text-sm tracking-[1.86px] leading-[1.2em] text-[#afb2b9] pb-10 uppercase md:text-[16px]">
          info
        </h4>
        <p className="text-sm text-[#3b3d41] tracking-normal leading-5 md:text-md">
          {AboutList.CONTENT_1}
        </p>
        <p className="text-sm text-[#3b3d41] tracking-normal leading-5 pt-5 md:text-md">
          {AboutList.CONTENT_2}
        </p>
        <p className="text-sm text-[#3b3d41] tracking-normal leading-5 pt-5 md:text-md">
          {AboutList.CONTENT_3}
        </p>
      </section>

      <div className="border-white border border-b-[#ecedf0] pb-20"></div>

      <section className="pt-5">
        <h4
          className={`text-sm tracking-[1.86px] leading-[1.2em] text-[#afb2b9] pb-5 uppercase md:text-[16px]`}
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
            <p className="pt-5 text-sm text-[#3b3d41] tracking-normal leading-5">
              Gitam campus in summertime
            </p>
          </div>
          <div className="md:flex md:flex-col">
            {" "}
            <h1
              className={`pt-8 text-2xl font-normal tracking-[-.01em] leading-7 text-[#3b3d41] ${bricolage.className}`}
            >
              GITAM University
            </h1>
            <h2
              className={`${bricolage.className} text-2xl font-normal tracking-tight leading-7 text-[#afb2b9]`}
            >
              College of Information Technology
            </h2>
            <p className="pt-5 text-md font-normal tracking-normal leading-5 text-[#3b3d41]">
              Bachelors in Electronic and Commnunication Engineering
            </p>
          </div>
        </div>
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
