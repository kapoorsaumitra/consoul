"use client";

import Image from "next/image";

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
    },
    { label: "Success Stories" },
    { label: "Blog" },
    { label: "Career" },
    { label: "About" },
    { label: "Contact" },
  ];

  return (
    <div>
      <div className="flex justify-between p-4 px-64">
        <div className="flex flex-col justify-center cursor-pointer">
          <Image src="/logos/logo.svg" alt="logo" width={100} height={100} />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-between gap-24">
            {NavbarItems.map((item, index) => (
              <div key={index} className="flex items-center cursor-pointer ">
                <span className="flex flex-col justify-center">{item.label}</span>
                {item.icon && <span className=" ml-1">{item.icon}</span>}
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
    </div>
  );
};
