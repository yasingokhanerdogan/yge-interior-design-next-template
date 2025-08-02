import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";

import Service1 from "~/1.jpg";
import Service2 from "~/2.jpg";
import Service3 from "~/3.jpg";

export const metadata: Metadata = {
  title: "Services",
};

type ServiceType = {
  title: string;
  description: string;
  image: StaticImageData;
};

const services: ServiceType[] = [
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

function ServiceCard({ service, index }: { service: ServiceType; index: number }) {
  return (
    <div className="flex flex-col gap-4 relative group">
      <Image
        src={service.image}
        alt={service.title}
        className="object-cover w-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
      />
      <div className="absolute flex flex-col justify-end p-4 group-hover:invisible  group-hover:opacity-0 transition-all duration-300">
        <span className="text-7xl text-foreground font-medium">0{index + 1}</span>
        <h2 className="text-4xl font-medium text-primary">{service.title}</h2>
        <p className="text-lg text-muted-foreground/75 font-light">{service.description}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen flex flex-col px-8 py-20 gap-8">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-primary font-medium">What We Do</h3>
        <h1 className="text-6xl font-medium">Our Services</h1>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((item, idx) => (
          <ServiceCard key={idx} service={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
