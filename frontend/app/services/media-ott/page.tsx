"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Feature {
  title: string
  description: string
  image: string
}

interface Section {
  id: number
  title: string
  subtitle: string
  features: Feature[]
}

export default function Page() {
  const [activeSection, setActiveSection] = useState(0)

  const [activeFeaturesMap, setActiveFeaturesMap] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
  })

  const sections: Section[] = [
    {
      id: 0,
      title: "Strategic Marketing Programs",
      subtitle: "We help OTT platforms achieve growth through targeted strategies",
      features: [
        {
          title: "Map user journey on OTT",
          description: "to enhance engagement across discovery, subscription, and retention stages",
          image: "/components/media&ott1.1.png",
        },
        {
          title: "Advanced data segmentation",
          description: "for hyper-personalized messages based on individual preferences and other data",
          image: "/components/media&ott1.2.png",
        },
        {
          title: "Strategic benchmarking of competitors",
          description: "and insights into their content strategies, driving conversions",
          image: "/components/media&ott1.3.png",
        },
        {
          title: "Monitor real-time OTT KPIs",
          description: "to continuously optimize user experiences and retention strategies",
          image: "/components/media&ott1.4.png",
        },
      ],
    },
    {
      id: 1,
      title: "MarTech audits and optimization",
      subtitle: "We streamline tech to create better viewer engagement",
      features: [
        {
          title: "Identify inefficiencies in the tech stack",
          description: "to enhance your OTT performance and boost ROI for content delivery",
          image: "/components/media&ott2.1.png",
        },
        {
          title: "Get tailored tool suggestions",
          description: "for advanced analytics and marketing operations",
          image: "/components/media&ott2.2.png",
        },
        {
          title: "Seamless shift to advanced MarTech tools",
          description: "with social migration and configurations to handle complex custom logic",
          image: "/components/media&ott2.3.png",
        },
        {
          title: "Ensure consistent audience interaction",
          description: "by setting up all communication channels like email, push notifications",
          image: "/components/media&ott2.4.png",
        },
      ],
    },
    {
      id: 2,
      title: "End-to-end campaign management",
      subtitle: "We help you optimize campaigns to grow and retain subscribers",
      features: [
        {
          title: "Monthly content planning execution",
          description: "and channel coordination for end-to-end campaign management",
          image: "/components/media&ott3.0.png",
        },
        {
          title: "Continuously refine OTT campaigns",
          description: "with optimization, user flow testing, and other advanced testing methods",
          image: "/components/media&ott3.1.png",
        },
        {
          title: "Improve your campaign metrics",
          description: "with accessibility metrics and CTR improvement triggers",
          image: "/components/media&ott3.2.png",
        },
        {
          title: "Campaign reporting",
          description: "with real-time analytics, campaign tracking, and actionable insights",
          image: "/components/media&ott3.4.png",
        },
      ],
    },
  ]

  const handleSubtitleClick = (sectionId: number) => {
    setActiveSection(sectionId)
    setActiveFeaturesMap((prev) => ({
      ...prev,
      [sectionId]: (prev[sectionId] + 1) % sections[sectionId].features.length,
    }))
  }

  const renderSectionContent = (section: Section) => {
    const isMiddleSection = section.id === 1

    const imageComponent = (
      <motion.div
        key={activeFeaturesMap[section.id]}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative h-[300px] rounded-lg"
      >
        <Image
          src={sections[section.id].features[activeFeaturesMap[section.id]].image || "/placeholder.svg"}
          alt={sections[section.id].features[activeFeaturesMap[section.id]].title}
          className="object-cover"
          priority
          height={500}
          width={500}
        />
      </motion.div>
    )

    const featuresComponent = (
      <div className="relative">
        <div className="absolute left-[1] top-0 w-1 h-full bg-purple-100 rounded-t-full rounded-b-full" />
        <div className="space-y-8">
          {section.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
              className="relative pl-6 cursor-pointer group"
              onClick={() => {
                setActiveSection(section.id)
                setActiveFeaturesMap((prev) => ({
                  ...prev,
                  [section.id]: index,
                }))
              }}
            >
              <div
                className={`absolute left-0 top-0 w-1 h-full transition-all duration-300 rounded-t-full rounded-b-full ${
                  activeSection === section.id && activeFeaturesMap[section.id] === index
                    ? "bg-[#6438C3]"
                    : "bg-purple-100"
                }`}
              />
              <h3
                className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  activeSection === section.id && activeFeaturesMap[section.id] === index
                    ? "text-[#6438C3]"
                    : "text-gray-800 group-hover:text-[#6438C3]"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    )

    return (
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {isMiddleSection ? imageComponent : featuresComponent}
        {isMiddleSection ? featuresComponent : imageComponent}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {sections.map((section) => (
        <section key={section.id} className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2
                className={`text-3xl font-bold mb-4 transition-colors duration-300 cursor-pointer ${
                  activeSection === section.id ? "text-[#6438C3]" : "text-gray-800 hover:text-[#6438C3]"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </h2>
              <p
                className="text-gray-600 max-w-2xl mx-auto cursor-pointer hover:text-[#6438C3]"
                onClick={() => handleSubtitleClick(section.id)}
              >
                {section.subtitle}
              </p>
            </div>
            {renderSectionContent(section)}
          </div>
        </section>
      ))}
    </div>
  )
}

