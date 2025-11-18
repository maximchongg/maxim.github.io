import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';

function Experience() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const experienceData = [
    {
      title: "SEP 2025 - PRESENT",
      content: (
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">KPMG</h3>
              <p className="text-neutral-600 text-sm md:text-base mb-1">
                <i className="fas fa-map-marker-alt mr-1"></i> Singapore
              </p>
              <h4 className="text-lg md:text-xl font-semibold text-neutral-700 mt-3">Cyber Advisory Intern</h4>
            </div>
            <img src="/assets/images/OIP.jpeg" alt="KPMG" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg" />
          </div>

          <div className="space-y-4 text-neutral-700 text-sm md:text-base">
            <p>Architected enterprise-scale <strong className="text-neutral-900">Agentic AI Development</strong> frameworks to automate and enhance cybersecurity processes. Building intelligent AI systems that streamline security workflows, improve efficiency by <strong className="text-neutral-900">25%</strong>, and enable autonomous decision-making in cyber advisory operations.</p>

            <p>Delivered high-performance AI applications using <strong className="text-neutral-900">Python, LangChain, and FastAPI</strong> with advanced orchestration strategies, achieving <strong className="text-neutral-900">30% increase</strong> in automation efficiency and <strong className="text-neutral-900">20% improvement</strong> in threat detection accuracy.</p>

            <p>Implemented autonomous agent architectures across security operations, reducing manual intervention by <strong className="text-neutral-900">40%</strong> and establishing AI-driven workflows for enhanced operational excellence and maintainability.</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">Agentic AI</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">Python</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">LangChain</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">FastAPI</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">AI/ML</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">Cybersecurity</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">Automation</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">RAG</span>
          </div>
        </div>
      ),
    },
    {
      title: "SEP 2024 - OCT 2024",
      content: (
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">Bank of Singapore</h3>
              <p className="text-neutral-600 text-sm md:text-base mb-1">
                <i className="fas fa-map-marker-alt mr-1"></i> Singapore
              </p>
              <h4 className="text-lg md:text-xl font-semibold text-neutral-700 mt-3">Data Science Intern</h4>
            </div>
            <img src="/assets/images/98bdd23b40b85e17722893a2cb8c97f1.jpg" alt="Bank of Singapore" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg" />
          </div>

          <div className="space-y-4 text-neutral-700 text-sm md:text-base">
            <p>Gained hands-on experience in <strong className="text-neutral-900">financial data analysis</strong> and banking technology. Architected data-driven solutions for digital banking, analyzing customer behavior patterns and optimizing data pipelines for <strong className="text-neutral-900">6+ production applications</strong>.</p>

            <p>Contributed to <strong className="text-neutral-900">predictive modeling projects</strong> with innovative ML solutions and best practices, improving model accuracy by <strong className="text-neutral-900">18%</strong> and reducing processing time by <strong className="text-neutral-900">35%</strong>.</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">Data Science</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">Python</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">Machine Learning</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">Banking Analytics</span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs md:text-sm rounded-full border border-neutral-200">FinTech</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="w-full bg-white font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black max-w-4xl font-bold">
          Professional Experience
        </h2>
        <p className="text-neutral-700 text-sm md:text-base max-w-2xl">
          My journey through technology and innovation, building impactful solutions across cybersecurity, AI, and data science.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-cyan-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
