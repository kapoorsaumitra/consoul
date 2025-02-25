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
            {/* Vertical scrolling image */}
            <motion.div
              className="flex flex-col"
              animate={{ y: ["0%", "-200%"] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatType: "mirror"
              }}
              style={{ paddingBottom: "0px" }}
            >
              <Image
                src="/components/hero1.png"
                alt="Hero"
                width={550}
                height={1100}
              />
              {/* Second image for seamless scroll */}
              <Image
                src="/components/hero1.png"
                alt="Hero"
                width={550}
                height={1100}
              />
              {/* Third image for extra smoothness */}
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
            <motion.div
              className="flex items-center gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                repeat: Infinity, 
                duration: 28, 
                ease: "linear",
                repeatType: "mirror" 
              }}
              style={{ width: "max-content" }}
            >
              {/* First set of logos */}
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
              
              {/* Identical second set (ensures seamless loop) */}
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
              
              {/* Add a third set to ensure no gaps during transition */}
              {logos.slice(0, logos.length/3).map((logo, index) => (
                <div key={`clone2-${index}`} className="flex-shrink-0 w-40">
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
