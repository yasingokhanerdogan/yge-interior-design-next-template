import Logo from "@/components/blocks/logo";
import Navbar from "./navbar";
import SocialMenu from "./social-menu";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 -left-80 xl:left-0 w-72 h-screen bg-sidebar border-r border-sidebar-muted transition-all duration-300 ease-in-out z-30">
      <div className="relative h-full flex flex-col px-8 py-14">
        <Logo />
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-2">
          <SocialMenu />
          <p className="text-muted-foreground/50 tracking-wider text-base">
            &copy; {new Date().getFullYear()} YGE. All rights reserved.
          </p>
        </div>
      </div>
    </aside>
  );
}
