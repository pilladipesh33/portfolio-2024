import Logo from "@/public/logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <main className="fixed w-full top-0 py-4 px-5 bg-opacity-30 backdrop-filter backdrop-blur-lg block md:hidden">
      <nav className="flex justify-between items-center text-lg text-[rgb(59, 61, 65)]">
        <Link href={"/"} className="logo">
          <Logo />
        </Link>
        <div className="flex gap-5">
          <Link href={"/about"} className="cursor-pointer">
            About
          </Link>
          <Link href={"/ideas"} className="cursor-pointer">
            Ideas
          </Link>
          <Link href={"/cv"} className="cursor-pointer">
            CV
          </Link>
        </div>
      </nav>
    </main>
  );
};
