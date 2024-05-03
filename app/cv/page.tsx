import { CVContent } from "@/lib/constant";
import React from "react";

const CV = () => {
  return (
    <div className="mt-20 mx-6">
      <section className="pt-10">
        <h2 className="text-sm tracking-[1.86px] leading-[1.2em] text-[#afb2b9] pb-10">
          CV
        </h2>

        {CVContent.map((items) => {
          return (
            <div key={items.company} className="flex justify-between pb-10">
              <div>
                <h4 className="text-[15px] text-medium tracking-[-.01em] leading-5">
                  {items.company}
                </h4>
                <h4 className="text-[15px] text-normal tracking-[-.01em] leading-5 font-sans text-[#afb2b9]">
                  {items.designation}
                </h4>
              </div>

              <p className="text-[15px] text-normal tracking-[-.01em] leading-5 text-[#afb2b9]">
                {items.duration}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CV;
