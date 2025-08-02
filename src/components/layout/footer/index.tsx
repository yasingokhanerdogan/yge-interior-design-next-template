import Link from "next/link";
import { HeartIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto h-14">
      <div className="relative h-full flex items-center justify-between text-muted-foreground/75 px-8">
        <p className="font-medium">&copy; {new Date().getFullYear()} YGE. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.yasingokhanerdogan.com?utm_source=yge-interior-design-template"
            className="flex items-center gap-1 [&_svg]:size-4"
            rel="noopener noreferrer"
            target="_blank"
          >
            Built with <HeartIcon className="text-destructive fill-destructive -mt-1" /> by{" "}
            <span className="text-primary font-semibold">YGE</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
