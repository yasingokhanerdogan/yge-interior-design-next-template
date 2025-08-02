import { PortfolioCard } from "@/components/blocks/portfolio-card";
import { Button } from "@/components/ui/button";
import { envConfig } from "@/lib/env";
import { paths } from "@/lib/routes";
import { convertToSlug, urlBuilder } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  alternates: {
    canonical: `${envConfig.SITE_URL}${urlBuilder(paths.MAIN.PORTFOLIO)}`,
  },
};

export default function PortfolioPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-20 gap-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg text-primary font-medium">Our Projects</h3>
          <h1 className="text-6xl font-medium">Portfolio</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-xl text-muted-foreground font-normal gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <PortfolioCard
              key={index}
              portfolio={{
                title: `Project ${index + 1}`,
                description: `Project ${index + 1} description`,
                image: `https://picsum.photos/500/800?random=${index}`,
                link: urlBuilder(paths.MAIN.PORTFOLIO, [`${convertToSlug("project")}-${index + 1}`]),
              }}
              index={index}
            />
          ))}
          <div className="col-span-full flex justify-center mt-8">
            <Button size="lg">View All</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
