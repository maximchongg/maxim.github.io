import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="w-full relative bg-neutral-950 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-4xl mb-12 text-white text-center"
        >
          More About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              I'm Maxim, a creative engineer
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm Maxim Chong, a proactive AI developer passionate about creating intelligent solutions that make a difference. From agentic AI to data science, I thrive on solving complex problems with clean, efficient code. My expertise spans Python, LangChain, and full-stack development, and I'm always eager to learn more.
              </p>
              
              <p>
                When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
              </p>
              
              <p className="font-semibold text-white">
                I believe in waking up each day eager to make a difference!
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <a 
                href="https://www.linkedin.com/in/maxim-chong-013853273" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://github.com/maximchongg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                title="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="mailto:maximchongjm06@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                title="Email"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src={`${import.meta.env.BASE_URL}assets/images/7aabe15e-0982-42a0-ace3-e69c3a5ad360.jpeg`}
                alt="Maxim Chong" 
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
