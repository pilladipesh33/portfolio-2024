import { Homepage } from "@/lib/constant";

export default function Home() {
  return (
    <main className="mx-6">
      <section className="mt-20">
        <h4 className="pt-6 text-xl cursor-default">
          <span>{Homepage.PEOPLE}</span>, Hello there
        </h4>
        <p className="pt-6 text-[22px] tracking-[-.01em] leading-7 font-sans">
          {Homepage.CONTENT}
        </p>
        <div className="border pt-10 border-t-white border-x-white border-b-black"></div>
      </section>
    </main>
  );
}
