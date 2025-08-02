import { Metadata } from "next";
import Image from "next/image";

import AboutImage from "~/25.png";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-7xl mx-auto grid xl:grid-cols-2 px-8 py-20 gap-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg text-primary font-medium">About Us</h3>
          <h1 className="text-6xl font-medium">About YGE</h1>
        </div>
        <div className="flex flex-col text-xl text-muted-foreground font-normal gap-4">
          <p>
            Quisque urna nisi, congue sit amet lorem sit amet, sodales pretium risus. Nulla porta eget augue a
            consequat. Suspendisse auctor faucibus tortor quis malesuada. Pellentesque eget nisl non orci finibus
            tincidunt at eu nisl.
          </p>
          <p>
            Nulla porta eget augue a consequat. Suspendisse auctor faucibus tortor quis the drana. Pellentesque eget
            nisl non orci finibus tincidunt at eu nisl.
          </p>
          <p>
            Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis
            turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11rem] text-primary font-medium">10</span>
          <div className="flex flex-col">
            <span className="text-6xl text-primary font-medium">in architecture design</span>
            <span className="text-4xl text-foreground font-medium">years of experience</span>
          </div>
        </div>
      </div>
      <Image src={AboutImage} alt="About YGE" className="object-cover" />
    </div>
  );
}
