import ServiceCard, { ServiceCardProps } from "@/components/blocks/service-card";
import { envConfig } from "@/lib/env";
import { paths } from "@/lib/routes";
import { urlBuilder } from "@/lib/utils";
import { Metadata } from "next";

import Service1 from "~/1.jpg";
import Service2 from "~/2.jpg";
import Service3 from "~/3.jpg";

export const metadata: Metadata = {
  title: "Services",
  alternates: {
    canonical: `${envConfig.SITE_URL}${urlBuilder(paths.MAIN.SERVICES)}`,
  },
};

const services: ServiceCardProps[] = [
  {
    title: "Architecture",
    description: "We design and build beautiful, functional spaces.",
    image: Service1,
  },
  {
    title: "Architecture",
    description: "We design and build beautiful, functional spaces.",
    image: Service2,
  },
  {
    title: "Architecture",
    description: "We design and build beautiful, functional spaces.",
    image: Service3,
  },
  {
    title: "Architecture",
    description: "We design and build beautiful, functional spaces.",
    image: Service1,
  },
  {
    title: "Architecture",
    description: "We design and build beautiful, functional spaces.",
    image: Service2,
  },
  {
    title: "Architecture",
    description: "We design and build beautiful, functional spaces.",
    image: Service3,
  },
  {
    title: "Architecture",
    description: "We design and build beautiful, functional spaces.",
    image: Service1,
  },
  {
    title: "Architecture",
    description: "We design and build beautiful, functional spaces.",
    image: Service2,
  },
  {
    title: "Architecture",
    description: "We design and build beautiful, functional spaces.",
    image: Service3,
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col px-8 py-20 gap-8">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-primary font-medium">What We Do</h3>
        <h1 className="text-6xl font-medium">Our Services</h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, idx) => (
          <ServiceCard key={idx} service={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
