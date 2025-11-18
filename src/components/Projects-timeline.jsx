import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconBrandYoutubeFilled, IconX } from "@tabler/icons-react";

const Projects = () => {
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

  const projectData = [
    {
      title: "2025",
      content: <PSAProject />,
    },
    {
      title: "2024",
      content: <VerztecProject />,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Featured Projects & Achievements
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-sm">
          Award-winning AI solutions that transform businesses and win hackathons.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
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
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

// PSA Project Content
const PSAProject = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "/assets/images/dashboard.png",
    "/assets/images/generatedincidents.png",
    "/assets/images/submissinoincident.png",
    "/assets/images/n8nflow.png",
    "/assets/images/prizeceremonygroupshot.png",
    "/assets/images/verrztecaward.jpeg",
  ];

  return (
    <>
      <div className="mb-8">
        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
          🏆 PSA PORTNET AI - Incident Management
        </h4>
        <p className="text-neutral-300 text-base mb-6">
          Top 15 PSA Hackathon Finalist - AI-powered system with LangGraph orchestration, 
          FAISS vector search, and intelligent root cause analysis for automated incident tracking.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            className="col-span-2 cursor-pointer rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            onClick={() => setFullscreenImage(images[0])}
          >
            <img src={images[0]} alt="PSA Dashboard" className="w-full h-auto" />
          </motion.div>
          {images.slice(1).map((img, idx) => (
            <motion.div
              key={idx}
              className="cursor-pointer rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              onClick={() => setFullscreenImage(img)}
            >
              <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>

        {/* YouTube Demo Button */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-3 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-sans"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconBrandYoutubeFilled className="h-6 w-6" />
          Watch Demo Video
        </motion.button>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["Python", "LangGraph", "FastAPI", "OpenAI", "FAISS", "n8n"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm font-sans"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setFullscreenImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
            >
              <IconX className="h-6 w-6 text-white" />
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}

      {/* YouTube Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-6xl bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
            >
              <IconX className="h-6 w-6 text-white" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/1S2CiMg-bU8?si=XzrK_IbJs3zEZY8K"
                title="PSA Hackathon Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

// Verztec Project Content
const VerztecProject = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const images = [
    "/assets/images/verztecchatbothomepage.png",
    "/assets/images/verztecdashboard.png",
    "/assets/images/Chatbotpageverztecavatar.png",
  ];

  return (
    <>
      <div className="mb-8">
        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sans">
          🥈 Verztec AI Helpdesk Chatbot
        </h4>
        <p className="text-neutral-300 text-base mb-6 font-sans">
          2nd Place Capstone Project - Enterprise chatbot with live 3D avatar assistant, 
          RAG-powered knowledge base, and agentic AI for automated HR ticket escalation.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            className="col-span-2 cursor-pointer rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            onClick={() => setFullscreenImage(images[0])}
          >
            <img src={images[0]} alt="Verztec Chatbot" className="w-full h-auto" />
          </motion.div>
          {images.slice(1).map((img, idx) => (
            <motion.div
              key={idx}
              className="cursor-pointer rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              onClick={() => setFullscreenImage(img)}
            >
              <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["Python", "FastAPI", "FAISS", "RAG", "LangChain", "Blender"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm font-sans"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setFullscreenImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
            >
              <IconX className="h-6 w-6 text-white" />
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

// Global Impact Content
const GlobalImpact = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [1.3521, 103.8198], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="mb-8">
      <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sans">
        🌍 Global Impact & Innovation
      </h4>
      <p className="text-neutral-300 text-base mb-6 font-sans">
        Building AI solutions that scale across organizations worldwide with cutting-edge 
        technology and innovation.
      </p>

      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-neutral-50 rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    </div>
  );
};

export default Projects;

