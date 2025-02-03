"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const services = [
  { name: "Media & OTT", icon: "/icons/mediaott.svg", route: "/services/media-ott" },
  { name: "Food & Beverages", icon: "/icons/food.svg", route: "/services/food&beverages" },
  { name: "E-Commerce & Retail", icon: "/icons/ecommerce.svg", route: "/services/ecommerce&retail" },
  { name: "Travel & Hospitality", icon: "/icons/travel.svg", route: "/services/travel&hospitality" },
  { name: "EduTech", icon: "/icons/edutech.svg", route: "/services/edutech" },
  { name: "Banking & Financial Services", icon: "/icons/banking.svg", route: "/services/banking&financial" },
];

export const ServicesNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeService, setActiveService] = useState("");

  // Set active service based on current route when component mounts
  useEffect(() => {
    const currentService = services.find(service => service.route === pathname);
    if (currentService) {
      setActiveService(currentService.name);
    }
  }, [pathname]);

  const handleServiceClick = (service : any) => {
    setActiveService(service.name);
    router.push(service.route);
  };

  return (
    <div className="flex justify-between m-4 my-10 mx-80">
      {services.map((service) => {
        const isActive = activeService === service.name;
        
        return (
          <div
            key={service.name}
            onClick={() => handleServiceClick(service)}
            className={`cursor-pointer grid gap-2 transition-colors duration-300 ${
              isActive ? "text-[#6438C3]" : "hover:text-[#6438C3]"
            }`}
          >
            <div className="flex justify-center relative">
              <Image
                src={service.icon}
                alt={service.name}
                height={20}
                width={20}
                className={`transition-all duration-300 ${
                  isActive ? "filter brightness-0 saturate-100 invert-[0.4] sepia-[1] saturate-[1] hue-rotate-[220deg]" : ""
                }`}
              />
              
            </div>
            <div className="text-center">{service.name}</div>
          </div>
        )
      })}
    </div>
  );
};