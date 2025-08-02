"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { paths } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-provider";

export interface NavbarItemProps {
  href: string;
  title: string;
}

export const navbarItems: NavbarItemProps[] = [
  {
    href: paths.MAIN.HOME,
    title: "Home",
  },
  {
    href: paths.MAIN.ABOUT,
    title: "About",
  },
  {
    href: paths.MAIN.SERVICES,
    title: "Services",
  },
  {
    href: paths.MAIN.PORTFOLIO,
    title: "Portfolio",
  },
  {
    href: paths.MAIN.GALLERY,
    title: "Gallery",
  },
  {
    href: paths.MAIN.BLOG,
    title: "Blog",
  },
  {
    href: paths.MAIN.CONTACT,
    title: "Contact",
  },
];

export default function Navbar() {
  const { close } = useSidebar();
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (window.innerWidth < 1280) close();
  };

  return (
    <nav className="flex flex-col justify-center gap-6 my-14">
      {navbarItems.map((link, idx) => (
        <Link
          key={idx}
          href={link.href}
          onClick={handleLinkClick}
          className={cn(
            "block text-muted-foreground/75 hover:text-primary tracking-widest text-xl uppercase transition-all after:content-[''] after:block after:w-full after:h-[1px] after:bg-muted-foreground/15 after:mt-1",
            link.href === paths.MAIN.HOME
              ? pathname === paths.MAIN.HOME && "text-primary"
              : pathname.startsWith(link.href) && "text-primary",
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
