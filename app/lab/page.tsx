import { CVContent } from "@/lib/constant";
import React from "react";

const Labs = () => {
  return (
    <div className="mt-20 mx-6 md:mt-0 md:mx-20">
      <section className="pt-10 md:flex md:flex-col">
        <h2 className="text-sm tracking-[1.86px] leading-[1.2em] text-neutral-400 pb-10 md:text-[16px] font-title uppercase">
          Labs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="h-44 bg-neutral-200 rounded-lg flex justify-center items-center drop-shadow-md"
              >
                P
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Labs;
