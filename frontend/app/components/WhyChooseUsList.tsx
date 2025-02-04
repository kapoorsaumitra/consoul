"use client"
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import Image from "next/image";

const items = [
  { name: "Pay-as-you-go", icon: "/icons/fingerprints.svg" },
  { name: "Quicker go-to-market strategies", icon: "/icons/fingerprints.svg" },
  { name: "Impactful, result-driven deliverables", icon: "/icons/fingerprints.svg" },
  { name: "No more lengthy implementation cycles", icon: "/icons/fingerprints.svg" },
  { name: "No capital investment", icon: "/icons/fingerprints.svg" },
];

const ListItem = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="bg-white rounded-xl p-4 w-full max-w-[400px] flex items-center gap-3 shadow-sm hover:scale-[102%] transition-transform">
      <div className="flex items-center justify-center w-8 h-8 rounded-full">
        <Image src={icon} alt="" className="w-full h-full" 
          height={32}
          width={32}
         />
      </div>
      <span className="text-gray-700 font-medium">{name}</span>
    </div>
  );
};

export function WhyChooseUsList() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const showNextItem = (index: number) => {
      if (index < items.length) {
        setVisibleItems((prev) => [...prev, index]);
        timeout = setTimeout(() => showNextItem(index + 1), 700);
      } else {
        setTimeout(() => {
          setVisibleItems([]);
          showNextItem(0); // Restart animation
        }, 2000); // Pause before restarting
      }
    };

    showNextItem(0); // Start animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col gap-4 h-[400px] overflow-hidden">
      <AnimatePresence>
        {visibleItems.map((index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 350, damping: 40 }}
          >
            <ListItem {...items[index]} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export const ChooseUs = () => {
  return (
    <div className="bg-[#F1EAFF]">
      <div className="grid grid-cols-2 w-full h-screen">
        <div className="col-span-1 flex justify-center pl-40 mt-72">
          <div className="font-extrabold text-4xl text-[#555555]">why choose us?</div>
        </div>
        <div className="w-full mt-32 pr-80">
          <WhyChooseUsList />
        </div>
      </div>

      <div className="py-20 flex justify-center mx-80">
        <ContactForm />
      </div>
    </div>
  );
};
