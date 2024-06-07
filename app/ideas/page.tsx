import { ListShowcase } from "@/components/list-showcase";
import { IdeasContent, ProjectList, contributionList } from "@/lib/constant";
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
            <ListShowcase
              title={items.title}
              link={items.link}
              date={items.date}
            />
          );
        })}
      </section>
      <section>
        <h4 className="pt-10 pb-5 uppercase text-xs tracking-[1.86px] text-[#afb2b9] font-title md:text-[16px]">
          contribution (open source)
        </h4>
        {contributionList.map((items) => (
          <ListShowcase
            title={items.title}
            link={items.link}
            date={items.date}
          />
        ))}
      </section>
    </div>
  );
};

export default Ideas;
