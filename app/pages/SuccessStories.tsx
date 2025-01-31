import { useState } from "react";
import { motion } from "framer-motion";

export const SuccessStories = () => {
  const stories = [
    {
      title: "iWantTFC",
      description: "Here’s what targeted content and personalised communication can do.",
      metrics: [
        { text: "Increased conversions by", value: "3x" },
        { text: "Reduced churn by", value: "2x" },
        { text: "Boost engagement by", value: "5x" },
        { text: "Higher customer satisfaction by", value: "4x" },
      ],
      image: "/components/iwanttfcstories.svg",
    },
    {
      title: "BrandX",
      description: "Driving engagement through AI-driven marketing strategies.",
      metrics: [
        { text: "Revenue growth by", value: "4x" },
        { text: "Customer retention improved by", value: "3.5x" },
        { text: "User engagement boosted by", value: "6x" },
        { text: "Higher conversion rates by", value: "2.5x" },
      ],
      image: "/components/brandx.svg",
    },
    {
      title: "ShopEase",
      description: "Transforming eCommerce with personalized shopping experiences.",
      metrics: [
        { text: "Sales increased by", value: "5x" },
        { text: "Cart abandonment reduced by", value: "40%" },
        { text: "Returning customers up by", value: "3.8x" },
        { text: "Overall satisfaction increased by", value: "4.5x" },
      ],
      image: "/components/shopease.svg",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextStory = () => {
    setIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  return (
    <div className="p-10 flex flex-col items-center h-screen relative overflow-hidden">
      {/* Title */}
      <div className="font-extrabold text-[#555555] text-4xl my-6">
        Proven Success Stories
      </div>

      {/* Content Wrapper (Fixed Height) */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        {/* Left Side - Text */}
        <div className="flex flex-col items-start lg:w-1/2 space-y-6">
          {/* Animated Story Text */}
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full min-h-[200px]" // Fixed height for smooth transitions
          >
            <div className="text-4xl font-extrabold text-[#555555]">
              Here’s what
              <span className="text-[#6438C3]"> targeted content </span> and
              <span className="text-[#6438C3]"> personalised </span> <br />
              <span className="text-[#6438C3]">communication </span> can do. Story of{" "}
              {stories[index].title}:
            </div>

            <ul className="space-y-3 mt-4">
              {stories[index].metrics.map((metric, idx) => (
                <li key={idx} className="flex items-center text-lg text-[#555555] font-medium">
                  <span className="mr-2">🚀</span> {metric.text}{" "}
                  <span className="font-bold ml-1">{metric.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Call to Action */}
          <div className="mt-6">
            <p className="text-[#555555] mb-2">Want targeted communication for your brand?</p>
            <button className="bg-[#6438C3] text-white py-3 px-6 rounded-lg text-lg font-semibold w-full">
              Yes, let’s talk
            </button>
          </div>

          <a href="#" className="text-[#6438C3] font-semibold mt-4 w-full pl-20">
            Read all success stories ↗
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex justify-center items-center"
          >
            <img
              src={stories[index].image}
              alt="Success Story"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons (Fixed Position) */}
      <div className="absolute bottom-10 flex space-x-6">
        <button onClick={prevStory} className="p-3 rounded-full bg-[#6438C3] text-white shadow-md hover:scale-110 transition">
          ◀
        </button>
        <button onClick={nextStory} className="p-3 rounded-full bg-[#6438C3] text-white shadow-md hover:scale-110 transition">
          ▶
        </button>
      </div>
    </div>
  );
};
