import Image, { StaticImageData } from "next/image";
import ContactForm from "@/components/sections/contact-form";
import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";

import Company1 from "~/1.jpg";
import Company2 from "~/2.jpg";
import Company3 from "~/3.jpg";
import { Metadata } from "next";
import { envConfig } from "@/lib/env";
import { urlBuilder } from "@/lib/utils";
import { paths } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: `${envConfig.SITE_URL}${urlBuilder(paths.MAIN.CONTACT)}`,
  },
};

type CompanyType = {
  place: string;
  image: StaticImageData;
  address: string;
  phone: string;
  email: string;
};

const companies: CompanyType[] = [
  {
    place: "London",
    image: Company1,
    address: "123 Main St, London, UK",
    phone: "+44 123 456 7890",
    email: "info@yge.com",
  },
  {
    place: "New York",
    image: Company2,
    address: "123 Main St, New York, USA",
    phone: "+1 123 456 7890",
    email: "info@yge.com",
  },
  {
    place: "Paris",
    image: Company3,
    address: "123 Main St, Paris, France",
    phone: "+33 123 456 7890",
    email: "info@yge.com",
  },
];

function CompanyCard({ company }: { company: CompanyType }) {
  return (
    <div className="flex flex-col gap-4 relative group h-60 lg:h-auto">
      <Image
        src={company.image}
        alt={company.place}
        className="object-cover w-full h-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
      />
      <div className="absolute inset-0 flex flex-col gap-6 p-4 group-hover:invisible  group-hover:opacity-0 transition-all duration-300">
        <h2 className="text-4xl font-medium text-primary">{company.place}</h2>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 text-lg text-muted-foreground/75 font-light [&_svg]:size-5">
            <HomeIcon />
            {company.address}
          </p>
          <p className="flex items-center gap-2 text-lg text-muted-foreground/75 font-light [&_svg]:size-5">
            <PhoneIcon />
            {company.phone}
          </p>
          <p className="flex items-center gap-2 text-lg text-muted-foreground/75 font-light [&_svg]:size-5">
            <MailIcon />
            {company.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl mx-auto min-h-screen px-8 py-20 gap-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg text-primary font-medium">Get in touch</h3>
          <h1 className="text-6xl font-medium">Contact Us</h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-col gap-8">
          <div className="flex flex-col lg:flex-row text-muted-foreground font-normal gap-4">
            {companies.map((company, idx) => (
              <CompanyCard key={idx} company={company} />
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
