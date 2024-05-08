import { Homepage } from "@/lib/constant";

export default function Home() {
  return (
    <main className="mx-6 md:mx-16">
      <section className="mt-20 md:mt-10">
        <h4 className="pt-6 text-xl cursor-default md:pt-0 bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7]">
          <span>{Homepage.PEOPLE}</span>, Hello there!
        </h4>
        <p className="pt-6 text-[22px] tracking-[-.01em] leading-7 md:text-[48px] md:leading-[56px] bg-clip-text text-transparent bg-gradient-to-bl from-[#3B3D41] to-[#A7A7A7]">
          {Homepage.CONTENT}
        </p>
        <div className="border pt-10 border-t-white border-x-white border-b-[#ecedf0]"></div>
      </section>
    </main>
  );
}
