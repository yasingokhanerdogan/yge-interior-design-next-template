import { paths } from "@/lib/routes";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center uppercase gap-1">
      <Link href={paths.MAIN.HOME} className="text-primary text-7xl font-medium">
        YGE
      </Link>
      <span className="text-muted-foreground text-lg font-thin tracking-[0.5rem]">ARCHITECTURE</span>
    </div>
  );
}
