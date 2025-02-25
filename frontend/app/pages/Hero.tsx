"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  const logos = [
    "/logos/gitam.svg",
    "/logos/macmerise.svg",
    "/logos/hdfc.svg",
    "/logos/kfc.svg",
    "/logos/westside.svg",
    "/logos/axisbank.svg",
    "/logos/p&g.svg",
    "/logos/lomotif.svg",
    "/logos/yesstyle.svg",
    "/logos/coto.svg",
    "/logos/gitam.svg",
    "/logos/macmerise.svg",
    "/logos/hdfc.svg",
    "/logos/kfc.svg",
    "/logos/westside.svg",
    "/logos/axisbank.svg",
    "/logos/p&g.svg",
    "/logos/lomotif.svg",
    "/logos/yesstyle.svg",
    "/logos/coto.svg",
    "/logos/gitam.svg",
    "/logos/macmerise.svg",
    "/logos/hdfc.svg",
    "/logos/kfc.svg",
    "/logos/westside.svg",
    "/logos/axisbank.svg",
    "/logos/p&g.svg",
    "/logos/lomotif.svg",
    "/logos/yesstyle.svg",
    "/logos/coto.svg",
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <div className="flex justify-end">
            <div className="p-4 grid text-[#555555] pt-20 gap-6">
              <div className="font-extrabold text-4xl">
                Your go-to partner to
                <br />
                increase{" "}
                <span className="text-[#6438C3]"> Customer Retention</span>
              </div>
              <div className="text-xl">
                We help you understand customers like never before,
                <br />
                <span>and build strategies that make them stay long.</span>
              </div>

              <div className="grid gap-2 text-lg">
                <div className="flex">
                  <span className="flex flex-col justify-center mx-2">
                    <Image
                      src={"icons/key-points.svg"}
                      alt="point"
                      height={20}
                      width={20}
                    />
                  </span>
                  Keep customers loyal
                </div>
                <div className="flex">
                  <span className="flex flex-col justify-center mx-2">
                    <Image
                      src={"icons/key-points.svg"}
                      alt="point"
                      height={20}
                      width={20}
                    />
                  </span>
                  Achieve KPIs faster
                </div>
                <div className="flex">
                  <span className="flex flex-col justify-center mx-2">
                    <Image
                      src={"icons/key-points.svg"}
                      alt="point"
                      height={20}
                      width={20}
                    />
                  </span>
                  Maximise ROIs with solutions backed by data
                </div>
              </div>

              <div>
                <button className="bg-gradient-to-b from-[#6438C3] to-[#4B21A6] text-white text-xl p-3 rounded-lg px-6">
                  Book a free consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block col-span-1">
          <div className="p-4 flex justify-start overflow-hidden h-[550px]">
            {/* First vertical image */}
            <motion.div
              className="flex flex-col"
              animate={{ y: "-50%" }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              style={{ paddingBottom: "20px" }}
            >
              <Image
                src="/components/hero1.png"
                alt="Hero"
                width={550}
                height={1100}
              />
              {/* Duplicate image for seamless vertical scroll */}
              <Image
                src="/components/hero1.png"
                alt="Hero"
                width={550}
                height={1100}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full mt-6">
        <div className="relative">
          <div className="flex">
            {/* First set of logos */}
            <motion.div
              className="flex items-center gap-16"
              animate={{ x: "-50%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 20, 
                ease: "linear",
                repeatType: "loop"
              }}
              style={{ width: "max-content" }}
            >
              {logos.slice(0, logos.length/3).map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-40">
                  <Image
                    src={logo}
                    className="h-auto"
                    alt="logo"
                    height={40}
                    width={160}
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                </div>
              ))}
              {logos.slice(0, logos.length/3).map((logo, index) => (
                <div key={`clone-${index}`} className="flex-shrink-0 w-40">
                  <Image
                    src={logo}
                    className="h-auto"
                    alt="logo"
                    height={40}
                    width={160}
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
