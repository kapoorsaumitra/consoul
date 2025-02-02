"use client"
import Image from "next/image";

export const ServicesNav = () => {
  return (
    <div>
      <div className="flex justify-between m-4 my-10 mx-80">
        <div className="cursor-pointer hover:text-[#6438C3] grid gap-2">
          <div className="flex justify-center">
            <Image
              src="/icons/mediaott.svg"
              alt="media"
              height={20}
              width={20}
              className="cursor-pointer hover:text-[#6438C3]"
            ></Image>{" "}
          </div>
          <div>Media & OTT</div>
        </div>

        <div className="cursor-pointer hover:text-[#6438C3] grid gap-2">
          <div className="flex justify-center">
            <Image
              src="/icons/food.svg"
              alt="media"
              height={20}
              width={20}
            ></Image>{" "}
          </div>
          <div>Food & Beverages</div>
        </div>

        <div className="cursor-pointer hover:text-[#6438C3] grid gap-2">
          <div className="flex justify-center">
            <Image
              src="/icons/ecommerce.svg"
              alt="media"
              height={20}
              width={20}
            ></Image>{" "}
          </div>
          <div>E-Commerce & Retail</div>
        </div>

        <div className="cursor-pointer hover:text-[#6438C3] grid gap-2">
          <div className="flex justify-center">
            <Image
              src="/icons/travel.svg"
              alt="media"
              height={20}
              width={20}
            ></Image>{" "}
          </div>
          <div>Travel & Hospitality</div>
        </div>

        <div className="cursor-pointer hover:text-[#6438C3] grid gap-2">
          <div className="flex justify-center">
            <Image
              src="/icons/edutech.svg"
              alt="media"
              height={20}
              width={20}
            ></Image>{" "}
          </div>
          <div>EduTech</div>
        </div>

        <div className="cursor-pointer hover:text-[#6438C3] grid gap-2">
          <div className="flex justify-center">
            <Image
              src="/icons/banking.svg"
              alt="media"
              height={20}
              width={20}
            ></Image>{" "}
          </div>
          <div>Banking & Financial Services</div>
        </div>
      </div>
    </div>
  );
};
