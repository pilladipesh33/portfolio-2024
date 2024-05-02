import Image from "next/image";
import Logo from "@/public/logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full py-4 px-5 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <nav className="flex justify-between items-center text-lg text-[rgb(59, 61, 65)]">
        <div className="logo">
          <Logo />
        </div>
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
    </div>
  );
};
