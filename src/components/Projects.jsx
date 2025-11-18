import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const Projects = () => {
  const products = [
    // First row - PSA Project images
    {
      title: "PSA Dashboard",
      link: "#",
      thumbnail: "/assets/images/dashboard.png",
    },
    {
      title: "Generated Incidents",
      link: "#",
      thumbnail: "/assets/images/generatedincidents.png",
    },
    {
      title: "Incident Submission",
      link: "#",
      thumbnail: "/assets/images/submissinoincident.png",
    },
    {
      title: "N8N Workflow",
      link: "#",
      thumbnail: "/assets/images/n8nflow.png",
    },
    {
      title: "Prize Ceremony",
      link: "#",
      thumbnail: "/assets/images/prizeceremonygroupshot.png",
    },
    // Second row - Verztec Project images
    {
      title: "Verztec Homepage",
      link: "#",
      thumbnail: "/assets/images/verztecchatbothomepage.png",
    },
    {
      title: "Verztec Dashboard",
      link: "#",
      thumbnail: "/assets/images/verztecdashboard.png",
    },
    {
      title: "Chatbot Avatar",
      link: "#",
      thumbnail: "/assets/images/Chatbotpageverztecavatar.png",
    },
    {
      title: "Award Ceremony",
      link: "#",
      thumbnail: "/assets/images/verrztecaward.jpeg",
    },
    {
      title: "Team Photo",
      link: "#",
      thumbnail: "/assets/images/1754302370958.jpeg",
    },
    // Third row - repeated for effect
    {
      title: "PSA Dashboard View",
      link: "#",
      thumbnail: "/assets/images/dashboard.png",
    },
    {
      title: "Incident Analytics",
      link: "#",
      thumbnail: "/assets/images/generatedincidents.png",
    },
    {
      title: "Submission Portal",
      link: "#",
      thumbnail: "/assets/images/submissinoincident.png",
    },
    {
      title: "Automation Flow",
      link: "#",
      thumbnail: "/assets/images/n8nflow.png",
    },
    {
      title: "Victory Moment",
      link: "#",
      thumbnail: "/assets/images/prizeceremonygroupshot.png",
    },
  ];

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-neutral-950"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        Featured Projects <br /> & Achievements
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        Award-winning AI solutions that transform businesses and win hackathons. 
        From Top 15 PSA Hackathon finalist to 2nd place Capstone winner.
      </p>
    </div>
  );
};

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-xl">
        {product.title}
      </h2>
    </motion.div>
  );
};

export default Projects;
