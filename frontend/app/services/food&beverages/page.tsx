"use client"

import { useState } from "react"
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
    2: 0
  })

  const sections: Section[] = [
    {
      id: 0,
      title: "Strategic Marketing Programs",
      subtitle: "We help OTT platforms achieve growth through targeted strategies",
      features: [
        {
          title: "Map user journey on OTT",
          description: "to enhanced engagement across discovery, subscription, and retention stages",
          image: "/components/media&ottcomp1.svg",
        },
        {
          title: "Advanced data segmentation",
          description: "for hyper personalised messages based individual preferences and other data",
          image: "/components/media&ottcomp2.svg",
        },
        {
          title: "Strategic benchmarking of competitors",
          description: "and insights into their content strategies, driving conversions",
          image: "/components/media&ottcomp3.svg",
        },
        {
          title: "Monitor real-time OTT KPIs",
          description: "to continuously optimise user experiences and retention strategies",
          image: "/components/media&ottcomp1.svg",
        },
      ],
    },
    {
      id: 1,
      title: "MarTech audits and optimisation",
      subtitle: "We streamline tech to create better viewer engagement",
      features: [
        {
          title: "Identify inefficiencies tech stack",
          description: "to enhance your OTT performance and boost ROI for content delivery",
          image: "/components/media&ottcomp2.svg",
        },
        {
          title: "Get tailored tool suggestion",
          description: "for advanced analytics and marketing operations",
          image: "/components/media&ottcomp1.svg",
        },
        {
          title: "Seamless shift to advanced MarTech tools",
          description: "with social migration and configurations to handle complex custom logics",
          image: "/components/media&ottcomp3.svg",
        },
        {
          title: "Ensure consistent audience interaction",
          description: "by setting up all communication channels like email, push notifications",
          image: "/components/media&ottcomp1.svg",
        },
      ],
    },
    {
      id: 2,
      title: "End-to-end campaign management",
      subtitle: "We help you optimize campaigns to grow and retain subscribers",
      features: [
        {
          title: "End-to-end campaign management",
          description: "Monthly content planning execution and channel coordination",
          image: "/components/media&ottcomp3.svg",
        },
        {
          title: "Continuously refine OTT campaigns",
          description: "With optimization, user flow testing, and other advanced testing methods",
          image: "/components/media&ottcomp1.svg",
        },
        {
          title: "Improve your campaign metrics",
          description: "With accessibility metrics, CTR improvement triggers",
          image: "/components/media&ottcomp2.svg",
        },
        {
          title: "Campaign reporting",
          description: "with real-time analytics, campaign tracking, and actionable insights",
          image: "/components/media&ottcomp1.svg",
        },
      ],
    },
  ]

  const handleSubtitleClick = (sectionId: number) => {
    setActiveSection(sectionId)
   
    setActiveFeaturesMap(prev => ({
      ...prev,
      [sectionId]: (prev[sectionId] + 1) % sections[sectionId].features.length
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {sections.map((section) => (
        <section key={section.id} className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2
                className={`text-3xl font-bold mb-4 transition-colors duration-300 cursor-pointer ${
                  activeSection === section.id ? "text-purple-600" : "text-gray-800 hover:text-purple-500"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </h2>
              <p 
                className="text-gray-600 max-w-2xl mx-auto cursor-pointer hover:text-purple-500"
                onClick={() => handleSubtitleClick(section.id)}
              >
                {section.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                {section.features.map((feature, index) => (
                  <div
                    key={index}
                    className="relative pl-6 cursor-pointer group"
                    onClick={() => {
                      setActiveSection(section.id)
                      setActiveFeaturesMap(prev => ({
                        ...prev,
                        [section.id]: index
                      }))
                    }}
                  >
                    <div
                      className={`absolute left-0 top-0 w-1 rounded-full h-full transition-all duration-300 ${
                        activeSection === section.id && activeFeaturesMap[section.id] === index
                          ? "bg-purple-600"
                          : "bg-purple-100 group-hover:bg-purple-200"
                      }`}
                    />
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        activeSection === section.id && activeFeaturesMap[section.id] === index
                          ? "text-purple-600"
                          : "text-gray-800 group-hover:text-purple-500"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="relative h-[300px] rounded-lg">
                <Image
                  src={sections[section.id].features[activeFeaturesMap[section.id]].image || "/placeholder.svg"}
                  alt={sections[section.id].features[activeFeaturesMap[section.id]].title}
                  className="object-cover transition-opacity duration-300"
                  priority
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}