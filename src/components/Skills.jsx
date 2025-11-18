import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const baseSkills = [
    { id: 'react', name: 'React', icon: <i className="fab fa-react text-[#61DAFB]"></i>, category: 'Frontend' },
    { id: 'node', name: 'Node.js', icon: <i className="fab fa-node text-[#339933]"></i>, category: 'Backend' },
    { id: 'js', name: 'JavaScript', icon: <i className="fab fa-js text-[#F7DF1E]"></i>, category: 'Frontend' },
    { id: 'python', name: 'Python', icon: <i className="fab fa-python text-[#3776AB]"></i>, category: 'Backend' },
    { id: 'docker', name: 'Docker', icon: <i className="fab fa-docker text-[#2496ED]"></i>, category: 'DevOps' },
    { id: 'git', name: 'Git', icon: <i className="fab fa-git-alt text-[#F05032]"></i>, category: 'Tools' },
    { id: 'github', name: 'GitHub', icon: <i className="fab fa-github text-neutral-700"></i>, category: 'Tools' },
    { id: 'aws', name: 'AWS', icon: <i className="fab fa-aws text-[#FF9900]"></i>, category: 'Cloud' },
    { id: 'linux', name: 'Linux', icon: <i className="fab fa-linux text-neutral-700"></i>, category: 'DevOps' },
    { id: 'n8n', name: 'n8n', icon: <i className="fas fa-project-diagram text-[#FF6D5A]"></i>, category: 'Automation' },
    { id: 'fastapi', name: 'FastAPI', icon: <i className="fas fa-bolt text-[#009688]"></i>, category: 'Backend' },
    { id: 'mongodb', name: 'MongoDB', icon: <i className="fas fa-database text-[#47A248]"></i>, category: 'Database' },
    { id: 'postgresql', name: 'PostgreSQL', icon: <i className="fas fa-server text-[#336791]"></i>, category: 'Database' },
    { id: 'ai', name: 'AI/ML', icon: <i className="fas fa-brain text-[#FF6B6B]"></i>, category: 'AI' },
    { id: 'security', name: 'Security', icon: <i className="fas fa-shield-alt text-[#4A90E2]"></i>, category: 'Security' },
    { id: 'langchain', name: 'LangChain', icon: <i className="fas fa-link text-[#1C3C3C]"></i>, category: 'AI' },
    { id: 'openai', name: 'OpenAI', icon: <i className="fas fa-robot text-[#10A37F]"></i>, category: 'AI' },
    { id: 'api', name: 'API', icon: <i className="fas fa-plug text-[#6B46C1]"></i>, category: 'Backend' },
    { id: 'cloud', name: 'Cloud', icon: <i className="fas fa-cloud text-[#4285F4]"></i>, category: 'Cloud' },
    { id: 'analytics', name: 'Analytics', icon: <i className="fas fa-chart-line text-[#FF6384]"></i>, category: 'Data' },
  ];

  // Create clustered effect by repeating icons multiple times with different IDs
  const skillsData = [
    ...baseSkills,
    ...baseSkills.map((skill, i) => ({ ...skill, id: `${skill.id}-2-${i}` })),
    ...baseSkills.map((skill, i) => ({ ...skill, id: `${skill.id}-3-${i}` })),
    ...baseSkills.map((skill, i) => ({ ...skill, id: `${skill.id}-4-${i}` })),
    // Extra repetitions for popular/important tech
    ...baseSkills.filter(s => ['React', 'Python', 'AI/ML', 'OpenAI', 'LangChain', 'Docker', 'AWS'].includes(s.name))
      .map((skill, i) => ({ ...skill, id: `${skill.id}-extra-${i}` })),
  ];

  // Simple 3D sphere positioning
  const getSpherePosition = (index, total) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    
    return {
      x: Math.cos(theta) * Math.sin(phi),
      y: Math.sin(theta) * Math.sin(phi),
      z: Math.cos(phi)
    };
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="w-full relative bg-neutral-950 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl mx-auto">
            Tech Stack & Expertise
          </h2>
          <p className="text-neutral-300 text-sm md:text-base max-w-sm mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Interactive 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-20 flex justify-center"
        >
          <div className="relative" style={{ width: '600px', height: '600px', perspective: '1200px' }}>
            <motion.div
              className="absolute inset-0"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {skillsData.map((skill, index) => {
                const pos = getSpherePosition(index, skillsData.length);
                const radius = 250;
                return (
                  <div
                    key={skill.id}
                    className="absolute w-16 h-16 rounded-full bg-neutral-800 shadow-xl flex items-center justify-center border border-neutral-700 cursor-pointer transition-all duration-200 hover:bg-neutral-700 hover:border-neutral-600"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `
                        translate(-50%, -50%)
                        translate3d(${pos.x * radius}px, ${pos.y * radius}px, ${pos.z * radius}px)
                      `,
                      backfaceVisibility: 'visible',
                      pointerEvents: 'auto'
                    }}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div className="text-3xl">
                      {skill.icon}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {['Frontend', 'Backend', 'AI', 'Cloud', 'DevOps'].map((category, idx) => {
            const categorySkills = baseSkills.filter(s => s.category === category);
            return (
              <motion.div
                key={category}
                variants={item}
                className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
              >
                <h3 className="text-white font-bold text-lg mb-4 relative z-10">{category}</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {categorySkills.slice(0, 3).map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-1 px-2 py-1 bg-neutral-800/80 rounded-lg text-xs text-neutral-300"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                  {categorySkills.length > 3 && (
                    <div className="px-2 py-1 bg-neutral-800/80 rounded-lg text-xs text-neutral-400">
                      +{categorySkills.length - 3}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 max-w-md w-full border border-neutral-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{selectedSkill.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                  <p className="text-green-400 text-sm">{selectedSkill.category}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Proficient in {selectedSkill.name} for building robust and scalable solutions.
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Skills;
