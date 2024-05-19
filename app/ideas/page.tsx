import { IdeasContent, ProjectList } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const Ideas = () => {
  return (
    <div className="mt-20 mx-6 md:mt-0 md:mx-[11dvw]">
      <h1 className="pt-10 text-xs tracking-[1.86px] text-[#afb2b9] font-title md:text-[16px]">
        SPECULATIVE
      </h1>
      <h1 className="text-3xl tracking-[-.01em] text-[#3b3d41] pt-5 leading-9 font-normal font-title md:font-medium md:text-4xl">
        Ideas regarding web
      </h1>
      <p className="text-md leading-5 pt-5 text-[#3b3d41] tracking-normal font-body pb-10">
        {IdeasContent.CONTENT}
      </p>

      <div className="border-white border border-t-[#ecedf0] pb-10"></div>

      <section>
        {ProjectList.map((items) => {
          return (
            <div
              key={items.title}
              className="flex justify-between items-center pb-3 md:pb-5"
            >
              <Link
                href={items.link}
                target="_blank"
                className="text-lg md:text-xl leading-6 tracking-[-.01em] text-[#3b3d41] font-body md:font-medium"
              >
                {items.title}
              </Link>
              <Link
                href={items.link}
                target="_blank"
                className="text-md text-[#afb2b9] font-body"
              >
                {items.date}
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Ideas;
