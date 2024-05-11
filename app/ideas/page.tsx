import { IdeasContent, ProjectList } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const Ideas = () => {
  return (
    <div className="mt-20 mx-6 md:mt-0">
      <h1 className="pt-10 text-xs tracking-[1.86px] text-[#afb2b9]">
        SPECULATIVE
      </h1>
      <h1 className="text-3xl tracking-[-.01em] text-[#3b3d41] pt-5 leading-9 font-bricolage md:text-4xl md:font-semibold">
        Ideas about web
      </h1>
      <p className="text-[14px] leading-5 pt-5 text-[#3b3d41] tracking-normal font-sans pb-10">
        {IdeasContent.CONTENT}
      </p>

      <div className="border-white border border-t-[#ecedf0] pb-10"></div>

      <section>
        {ProjectList.map((items) => {
          return (
            <div
              key={items.title}
              className="flex justify-between items-center pb-3"
            >
              <Link
                href={items.link}
                target="_blank"
                className="text-lg leading-6 tracking-[-.01em] text-[#3b3d41]"
              >
                {items.title}
              </Link>
              <Link
                href={items.link}
                target="_blank"
                className="text-md text-[#afb2b9]"
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
