"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { DownloadGuide } from "../components/Download-guide";
import { Testimonial } from "../components/Testimonial";

export const Services = () => {
  const serviceSections = [
    {
      title: "Data-driven strategies that drive results",
      points: [
        {
          text: "Hyper-personalised offerings through data segmentation",
          image: "/components/data-driven-strategies-1.png",
        },
        {
          text: "Targeted loyalty and gamification programs",
          image: "/components/data-driven-strategies-2.png",
        },
        {
          text: "Channel optimisation for timely, targeted messaging",
          image: "/components/data-driven-strategies-3.png",
        },
      ],
    },
    {
      title: "Make the most out of your MarTech tools",
      points: [
        {
          text: "Get mar-tech audit and implementation",
          image: "/components/martech-tools-1.png",
        },
        {
          text: "Identify mar-tech gaps and get tool recommendations",
          image: "/components/martech-tools-2.png",
        },
        {
          text: "Migrate and align tools for smoother operations",
          image: "/components/martech-tools-3.png",
        },
      ],
    },
    {
      title: "Optimize your operations & reduce cost",
      points: [
        {
          text: "Create SOPs for efficient, consistent operations",
          image: "/components/optimise-operations-1.png",
        },
        {
          text: "Get on-demand campaign execution",
          image: "/components/optimise-operations-2.png",
        },
        {
          text: "Experiment and real-time data to boost performance",
          image: "/components/optimise-operations-3.png",
        },
      ],
    },
  ];

  const [activePoints, setActivePoints] = useState(
    serviceSections.map(() => 0) // Default active index for each section
  );

  const handlePointClick = (sectionIndex: number, pointIndex: number) => {
    const updatedActivePoints = [...activePoints];
    updatedActivePoints[sectionIndex] = pointIndex;
    setActivePoints(updatedActivePoints);
  };

  return (
    <div className="my-20">
      <div className="font-extrabold text-[#555555] flex justify-center text-4xl">
        Our Services
      </div>

      {serviceSections.map((section, sectionIndex) => (
        <div key={sectionIndex} >
          <div className="text-[#6438C3] font-extrabold text-3xl flex justify-center mt-20">
            {section.title}
          </div>
          <div className="">
          <div className="flex justify-center my-10 text-lg px-6">
            <div className="grid grid-cols-3 gap-30 text-center px-20">
              {section.points.map((point, pointIndex) => (
                <div
                  key={pointIndex}
                  className={`cursor-pointer px-20 ${
                    activePoints[sectionIndex] === pointIndex
                      ? "text-[#6438C3] font-bold"
                      : "hover:text-[#6438C3]"
                  }`}
                  onClick={() => handlePointClick(sectionIndex, pointIndex)}
                >
                  {point.text}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div
              key={activePoints[sectionIndex]}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <Image
                src={section.points[activePoints[sectionIndex]].image}
                alt={section.title}
                height={480}
                width={1058}
              />
            </motion.div>
          </div>
        </div>
        </div>
      ))}

      <div className="flex justify-center">
        <div className="grid my-6 gap-4 text-xl">
          <div>
            One-stop solution to keep your customers loyal and increase LTV
          </div>
          <div className="grid grid-cols-2 text-xl font-medium">
            <div className="flex justify-center">
              <button className="border p-3 px-6 bg-[#6438C3] text-white rounded-lg">
                Get in touch
              </button>
            </div>
            <div className="flex justify-center">
              <button className="text-[#6438C3] flex items-center">
                <span className="mr-2">Go to Services</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8771 9.32604L7.55309 20.6501C7.31982 20.8834 7.02294 21 6.66243 21C6.30193 21 6.00504 20.8834 5.77178 20.6501C5.53851 20.4168 5.42188 20.1199 5.42188 19.7594C5.42188 19.3989 5.53851 19.1021 5.77178 18.8688L17.0958 7.54473H7.42585C7.06535 7.54473 6.76316 7.4228 6.51929 7.17893C6.27542 6.93506 6.15349 6.63287 6.15349 6.27237C6.15349 5.91186 6.27542 5.60968 6.51929 5.36581C6.76316 5.12194 7.06535 5 7.42585 5H20.1495C20.51 5 20.8122 5.12194 21.0561 5.36581C21.2999 5.60968 21.4219 5.91186 21.4219 6.27237V18.996C21.4219 19.3565 21.2999 19.6587 21.0561 19.9026C20.8122 20.1465 20.51 20.2684 20.1495 20.2684C19.789 20.2684 19.4868 20.1465 19.2429 19.9026C18.9991 19.6587 18.8771 19.3565 18.8771 18.996V9.32604Z"
                    fill="#6438C3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-14">
        <DownloadGuide />
      </div>

      <div>
        <Testimonial />
      </div>
    </div>
  );
};
