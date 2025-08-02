import { envConfig } from "@/lib/env";
import { paths } from "@/lib/routes";
import { urlBuilder } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

interface PortfolioDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `Project ${slug}`, // get project title from database
    alternates: {
      canonical: `${envConfig.SITE_URL}${urlBuilder(paths.MAIN.PORTFOLIO, [slug])}`,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col px-8 py-20 gap-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg text-primary font-medium">Our Projects</h3>
          <h1 className="text-6xl font-medium">Project {slug}</h1>
        </div>
      </div>

      <div className="flex flex-col text-xl text-muted-foreground font-light gap-4">
        <Image
          src={`https://picsum.photos/1024/476?random=${slug}`}
          width={1024}
          height={476}
          quality={75}
          alt={`Project ${slug}`}
          placeholder="blur"
          blurDataURL={`https://picsum.photos/1024/476?random=${slug}`}
          className="object-cover w-full"
        />

        <p>
          Quisque urna nisi, congue sit amet lorem sit amet, sodales pretium risus. Nulla porta eget augue a consequat.
          Suspendisse auctor faucibus tortor quis malesuada. Pellentesque eget nisl non orci finibus tincidunt at eu
          nisl.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ligula nec velit blandit ultrices. Proin
          varius posuere sapien, non tincidunt leo malesuada eget. Integer pulvinar ligula eleifend massa hendrerit
          ultrices vel id diam. Praesent massa nisl, efficitur a velit et, commodo condimentum dui. Aliquam id massa
          nisi. Vestibulum cursus porta tempus. Fusce sagittis convallis laoreet. Cras dui dolor, fermentum eu ultricies
          id, convallis et sapien. Vestibulum ac pulvinar justo. Integer fermentum auctor neque nec dignissim. Morbi at
          convallis sem. Duis finibus felis mauris, in suscipit orci aliquet a. Nunc nunc risus, consequat porta massa
          sed, vestibulum posuere tortor. Cras vitae viverra magna.
        </p>
        <p>
          Nulla porta eget augue a consequat. Suspendisse auctor faucibus tortor quis the drana. Pellentesque eget nisl
          non orci finibus tincidunt at eu nisl.
        </p>
        <p>
          Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis
          turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi.
        </p>

        <p>
          Sed nec quam eu tortor commodo ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Suspendisse molestie, eros eget varius congue, elit ante efficitur ex, a dictum mi turpis aliquam purus. Donec
          ornare leo dolor, in consequat purus convallis id. Quisque in diam fermentum, vehicula arcu quis, pulvinar
          leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vel
          ipsum libero. Ut tempus dapibus egestas. Nulla facilisi. Mauris ornare dapibus libero vitae viverra.
        </p>

        <p>
          Quisque lacinia, mi non fringilla malesuada, nisi nulla vestibulum nibh, quis rhoncus justo nisl eu lacus.
          Phasellus velit augue, laoreet vel sapien eu, pharetra placerat ex. Nullam ut interdum tellus, vitae fermentum
          est. Aenean aliquam turpis nulla, et mollis nisl suscipit nec. Aliquam vel sem non justo faucibus sagittis.
          Sed quis suscipit ipsum. Fusce orci est, pharetra cursus convallis non, tincidunt at mauris. Pellentesque et
          massa aliquam magna sollicitudin rhoncus et ac mauris. Aliquam erat volutpat. Sed nec diam viverra, convallis
          eros sed, vestibulum enim. Donec congue eleifend leo, id aliquet tortor luctus eu. Vivamus sem lectus,
          molestie sit amet mauris in, varius ornare eros. Donec eu tellus rhoncus, imperdiet lectus at, semper diam.
          Maecenas vehicula arcu nisi, interdum interdum risus porta nec. Donec leo elit, tristique quis placerat ac,
          mollis in turpis.
        </p>
      </div>
    </div>
  );
}
