import { ReactNode } from "react";

export const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <main className="hidden md:block">
      <div className="grid grid-cols-6 h-[100dvh]">
        <div className="col-span-1 border border-r-black">Sidebar</div>
        <div className="col-span-5">{children}</div>
      </div>
    </main>
  );
};
