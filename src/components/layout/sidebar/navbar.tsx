"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { paths } from "@/lib/routes";
import { cn } from "@/lib/utils";

const navbarItems = [
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
  const pathname = usePathname();

  return (
    <ul className="flex flex-col justify-center gap-6 my-14">
      {navbarItems.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "block text-muted-foreground/75 hover:text-primary tracking-widest text-xl uppercase transition-all after:content-[''] after:block after:w-full after:h-[1px] after:bg-muted-foreground/15 after:mt-1",
              pathname === link.href && "text-primary",
            )}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
