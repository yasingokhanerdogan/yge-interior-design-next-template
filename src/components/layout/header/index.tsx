import { MenuIcon, XIcon } from "lucide-react";
import { useSidebar } from "@/providers/sidebar-provider";
import { MobileSidebar } from "@/components/layout";
import Link from "next/link";
import { paths } from "@/lib/routes";

export default function Header() {
  const { isOpen, toggle, close } = useSidebar();

  return (
    <>
      <header className="xl:hidden fixed top-0 left-0 w-full h-14 z-30 bg-primary">
        <div className="relative h-full flex items-center px-4 gap-2">
          <button className="mr-4" onClick={toggle}>
            {isOpen ? <XIcon className="w-6 h-6 text-white" /> : <MenuIcon className="w-6 h-6 text-white" />}
            <span className="sr-only">Menu</span>
          </button>
          <Link href={paths.MAIN.HOME} className="text-xl sm:text-2xl font-bold text-white">
            YGE Architecture
          </Link>
        </div>
      </header>

      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-20" onClick={close}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      <MobileSidebar />
    </>
  );
}
