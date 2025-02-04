"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const NavbarItems = [
    {
      label: "Services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      ),
    path : "/services/media-ott"
    },
    { label: "Success Stories",
      path : "/success-stories"
     },
    { label: "Blogs",
      path : "/blogs"
     },
    { label: "Careers",
      path : "/careers"
     },
    { label: "About",
      path : "/about"
     },
    { label: "Contact",
      path : "#contact"
     },
  ];


  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (path: string, index: number) => {
    
    setActiveIndex(index);
    router.push(path);
  };



  return (
    <nav>
      <div className="flex justify-between p-4 px-64">
        <div className="flex flex-col justify-center cursor-pointer mr-3  ">
          <Image src="/logos/logo.svg" alt="logo" width={100} height={100} onClick={()=>router.push('/')} />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-between gap-24 text-lg">
            {NavbarItems.map((item, index) => (
              <div
              key={index}
                className={`flex items-center hover:text-[#6438C3] cursor-pointer p-2 rounded-lg transition duration-300 ${
                  activeIndex === index ? "text-[#6438C3] font-bold" : ""
                }`}
                onClick={() => handleClick(item.path, index)}
              >
                <span className="flex flex-col justify-center">{item.label}</span>
                <span className="flex flex-col justify-center mx-2">
                  {item.icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button className="bg-[#6438C3] text-white p-3 rounded-lg px-6">
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
};
