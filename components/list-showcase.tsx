"use client";

import Link from "next/link";

type ListShowcaseProps = {
  title: string;
  link: string;
  date: string;
};

export const ListShowcase = ({ title, link, date }: ListShowcaseProps) => {
  return (
    <>
      <div
        key={title}
        className="flex justify-between items-center pb-3 md:pb-5"
      >
        <Link
          href={link === "" ? "/ideas" : link}
          target="_blank"
          className="text-lg md:text-xl leading-6 tracking-[-.01em] text-[#3b3d41] font-body md:font-medium"
        >
          {title}
        </Link>
        <span className="cursor-default text-md text-[#afb2b9] font-body">
          {date}
        </span>
      </div>
    </>
  );
};
