import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.facebook.com",
    icon: <FacebookIcon className="w-6 h-6" />,
  },
  {
    href: "https://www.instagram.com",
    icon: <InstagramIcon className="w-6 h-6" />,
  },
  {
    href: "https://www.twitter.com",
    icon: <TwitterIcon className="w-6 h-6" />,
  },
];

export default function SocialMenu() {
  return (
    <ul className="flex items-center justify-center gap-2">
      {socialLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="inline-flex items-center justify-center text-muted-foreground/75 [&_svg]:size-4 w-8 h-8 rounded-full hover:bg-primary hover:text-muted transition-all duration-200"
          >
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
