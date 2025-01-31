import Image from "next/image";
import { DownloadGuide } from "../components/Download-guide";
import { Testimonial } from "../components/Testimonial";

export const Services = () => {
  return (
    <div className="my-20">
      <div className="font-extrabold text-[#555555] flex justify-center text-4xl">
        Our services
      </div>
      <div>
        <div className="text-[#6438C3] font-extrabold text-3xl flex justify-center mt-20">
          Data-driven strategies that drives results
        </div>
        <div className="flex justify-center my-10 text-xl">
          <div className="grid grid-cols-3 gap-48">
            <div>
              Hyper-personalised offerings <br /> through data segmentation
            </div>
            <div>
              Targeted loyalty and <br /> gamification programs{" "}
            </div>
            <div>
              Channel optimisation for <br /> timely, targeted messaging
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/components/data-driven-strategies.svg"
            alt="data-driven"
            height={480}
            width={1058}
          />
        </div>
      </div>

      <div>
        <div className="text-[#6438C3] font-extrabold text-3xl flex justify-center mt-20">
          Make the most out of your MarTech tools
        </div>
        <div className="flex justify-center my-10 text-xl">
          <div className="grid grid-cols-3 gap-48">
            <div>
              Get mar-tech audit and <br /> implementation
            </div>
            <div>
              Identify mar-tech gaps and <br /> get tool recommendations
            </div>
            <div>
              Migrate and align tools for <br /> smoother operations
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/components/martech-tools.svg"
            alt="data-driven"
            height={480}
            width={1058}
          />
        </div>
      </div>

      <div>
        <div className="text-[#6438C3] font-extrabold text-3xl flex justify-center mt-20">
          Optimize your operations & reduce cost
        </div>
        <div className="flex justify-center my-10 text-xl">
          <div className="grid grid-cols-3 gap-48">
            <div>
              Create SOPs for efficient,
              <br />
              consistent operations
            </div>
            <div>
              Get on-demand campaign <br />
              <span className="mx-14">execution</span>
            </div>
            <div>
              Experiment and use real-time <br /> data to boost performance
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/components/optimise-operations.svg"
            alt="data-driven"
            height={480}
            width={1058}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid my-6 gap-4 text-xl">
          <div>
            One stop solution to to keep your customers loyal and increase LTV
          </div>
          <div className="grid grid-cols-2 text-xl font-medium">
            <div className="flex justify-center ">
              <button className="border p-3 px-6 bg-[#6438C3] text-white rounded-lg">
                Get in touch
              </button>
            </div>
            <div className="flex justify-center">
              <button className="text-[#6438C3]">
                <div className="flex justify-center ">
                  <span className="flex flex-col justify-center mr-2">
                    Go to Services
                  </span>{" "}
                  <span className="flex flex-col justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_2_1967"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2_1967)">
                        <path
                          d="M18.8771 9.32604L7.55309 20.6501C7.31982 20.8834 7.02294 21 6.66243 21C6.30193 21 6.00504 20.8834 5.77178 20.6501C5.53851 20.4168 5.42188 20.1199 5.42188 19.7594C5.42188 19.3989 5.53851 19.1021 5.77178 18.8688L17.0958 7.54473H7.42585C7.06535 7.54473 6.76316 7.4228 6.51929 7.17893C6.27542 6.93506 6.15349 6.63287 6.15349 6.27237C6.15349 5.91186 6.27542 5.60968 6.51929 5.36581C6.76316 5.12194 7.06535 5 7.42585 5H20.1495C20.51 5 20.8122 5.12194 21.0561 5.36581C21.2999 5.60968 21.4219 5.91186 21.4219 6.27237V18.996C21.4219 19.3565 21.2999 19.6587 21.0561 19.9026C20.8122 20.1465 20.51 20.2684 20.1495 20.2684C19.789 20.2684 19.4868 20.1465 19.2429 19.9026C18.9991 19.6587 18.8771 19.3565 18.8771 18.996V9.32604Z"
                          fill="#6438C3"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
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
