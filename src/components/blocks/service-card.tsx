import Image, { StaticImageData } from "next/image";

export interface ServiceCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function ServiceCard({ service, index }: { service: ServiceCardProps; index: number }) {
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
