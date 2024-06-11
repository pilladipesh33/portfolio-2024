"use client";

import { CVContent } from "@/lib/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];
var wrap = gsap.utils.wrap(-100, 400);

const Labs = () => {
  useGSAP(() => {
    gsap.set("#box", {
      backgroundColor: (i) => colors[i % colors.length],
      y: (i) => i * 50,
    });
    gsap.to("#box", {
      duration: 5,
      ease: "none",
      y: "-=500", //move each box 500px to right
      modifiers: {
        y: gsap.utils.unitize(wrap), //force y value to wrap when it reaches -100
      },
      repeat: -1,
    });
  });
  return (
    <div className="mt-20 mx-6 md:mt-0 md:mx-20">
      <section className="pt-10 grid grid-cols-5">
        <h2 className="text-sm tracking-[1.86px] leading-[1.2em] text-neutral-400 pb-10 md:text-[16px] font-title uppercase col-span-1">
          Labs
        </h2>

        <div className="grid grid-cols-3 col-span-4">
          <div className="h-[450px] w-[50px] relative m-auto bg-[#ccc] overflow-hidden after:h-[50px] after:w-[48px] after:content-[''] after:absolute border">
            <div className="relative b-[-50px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <div
                  key={index}
                  id="box"
                  className="h-[50px] w-[50px] absolute bg-red-500  text-3xl leading-[50px] text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[450px] w-[50px] relative m-auto bg-[#ccc] overflow-hidden after:h-[50px] after:w-[48px] after:content-[''] after:absolute border">
            <div className="relative b-[-50px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <div
                  key={index}
                  id="box"
                  className="h-[50px] w-[50px] absolute bg-red-500  text-3xl leading-[50px] text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[450px] w-[50px] relative m-auto bg-[#ccc] overflow-hidden after:h-[50px] after:w-[48px] after:content-[''] after:absolute border">
            <div className="relative b-[-50px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <div
                  key={index}
                  id="box"
                  className="h-[50px] w-[50px] absolute bg-red-500  text-3xl leading-[50px] text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Labs;
