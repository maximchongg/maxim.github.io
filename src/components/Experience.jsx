"use client";

import React, { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, Building2, ArrowUpRight } from "lucide-react";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const sentinelRefs = useRef([]);
  const sectionRef = useRef(null);

  const setItemRef = (el, i) => {
    itemRefs.current[i] = el;
  };
  const setSentinelRef = (el, i) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;

    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const experienceData = [
    {
      icon: Building2,
      title: "KPMG",
      subtitle: "Sep 2025 - Present",
      role: "Cyber Advisory Intern",
      location: "Singapore",
      description:
        "Architected enterprise-scale Agentic AI Development frameworks to automate and enhance cybersecurity processes. Building intelligent AI systems that streamline security workflows and enable autonomous decision-making in cyber advisory operations.",
      items: [
        "Improved automation efficiency by 25% through advanced AI orchestration",
        "Enhanced threat detection accuracy by 20% using Python, LangChain, and FastAPI",
        "Reduced manual intervention by 40% with autonomous agent architectures",
        "Established AI-driven workflows for enhanced operational excellence",
      ],
      image: `${import.meta.env.BASE_URL}assets/images/kpmg-shutterstock_2246181643.avif`,
      skills: ["Agentic AI", "Python", "LangChain", "FastAPI", "AI/ML", "Cybersecurity", "Automation", "RAG"],
    },
    {
      icon: Briefcase,
      title: "Bank of Singapore",
      subtitle: "Sep 2024 - Oct 2024",
      role: "Data Science Intern",
      location: "Singapore",
      description:
        "Gained hands-on experience in financial data analysis and banking technology. Architected data-driven solutions for digital banking, analyzing customer behavior patterns and optimizing data pipelines.",
      items: [
        "Analyzed data for 6+ production banking applications",
        "Improved predictive model accuracy by 18%",
        "Reduced data processing time by 35%",
        "Implemented ML solutions following industry best practices",
      ],
      image: `${import.meta.env.BASE_URL}assets/images/bank-of-singapore-employees-1.png`,
      skills: ["Data Science", "Python", "Machine Learning", "Banking Analytics", "FinTech"],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="w-full bg-neutral-950 py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl mb-16">
          <h1 className="mb-4 text-lg md:text-4xl text-white">
            Professional Experience
          </h1>
          <p className="mb-6 text-sm md:text-base text-neutral-300">
            Building intelligent systems and driving innovation across cybersecurity, AI, and financial technology with measurable impact.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-16 md:space-y-24">
          {experienceData.map((entry, index) => {
            const isActive = index === activeIndex;
            const Icon = entry.icon;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      isActive ? "bg-green-600 text-white" : "bg-neutral-800 text-neutral-400"
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-white" : "text-neutral-400"
                      }`}>
                        {entry.title}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {entry.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                />

                {/* Content column */}
                <article
                  className={
                    "flex flex-col rounded-2xl border p-6 transition-all duration-300 " +
                    (isActive
                      ? "border-neutral-700 bg-neutral-900 shadow-lg shadow-green-900/10"
                      : "border-neutral-800 bg-neutral-900/50")
                  }
                >
                  {/* Company image */}
                  {entry.image && (
                    <div className="mb-6 -mx-6 -mt-6">
                      <img
                        src={entry.image}
                        alt={`${entry.title} workplace`}
                        className="w-full h-48 md:h-56 object-cover rounded-t-2xl"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2
                            className={
                              "text-xl md:text-2xl font-bold leading-tight tracking-tight transition-colors duration-200 " +
                              (isActive ? "text-white" : "text-neutral-300")
                            }
                          >
                            {entry.role}
                          </h2>
                          <p className="text-sm text-neutral-400 mt-1 flex items-center gap-1">
                            <i className="fas fa-map-marker-alt"></i> {entry.location}
                          </p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p
                        className={
                          "text-sm leading-relaxed transition-all duration-300 " +
                          (isActive 
                            ? "text-neutral-300" 
                            : "text-neutral-400")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Expandable content */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-500 ease-out " +
                        (isActive 
                          ? "grid-rows-[1fr] opacity-100" 
                          : "grid-rows-[0fr] opacity-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-lg border border-neutral-800 bg-neutral-950/50 p-4">
                              <ul className="space-y-2">
                                {entry.items.map((item, itemIndex) => (
                                  <li 
                                    key={itemIndex} 
                                    className="flex items-start gap-2 text-sm text-neutral-300"
                                  >
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500/60 flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Skills tags */}
                          {entry.skills && entry.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {entry.skills.map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex}
                                  className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
