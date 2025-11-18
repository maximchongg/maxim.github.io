import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SphereImageGrid from './SphereImageGrid';

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

  const skillsData = [
    ...baseSkills,
    ...baseSkills.map((skill, i) => ({ ...skill, id: `${skill.id}-2-${i}` })),
    ...baseSkills.map((skill, i) => ({ ...skill, id: `${skill.id}-3-${i}` })),
  ];

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
      className="w-full relative bg-gradient-to-b from-black via-neutral-900 to-black py-32 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.15 : 0 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/30 via-teal-500/30 to-cyan-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-wider text-green-400 uppercase mb-6">
            MY SKILLS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech Stack & <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Interactive 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-20"
        >
          <SphereImageGrid skillsData={skillsData} onSkillClick={handleSkillClick} />
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
                className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-teal-500/0 group-hover:from-green-500/10 group-hover:to-teal-500/10 rounded-2xl transition-all duration-300" />
                
                <h3 className="text-white font-bold text-lg mb-4 relative z-10">{category}</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {categorySkills.slice(0, 3).map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-1 px-2 py-1 bg-neutral-800/50 rounded-lg text-xs text-gray-300"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                  {categorySkills.length > 3 && (
                    <div className="px-2 py-1 bg-neutral-800/50 rounded-lg text-xs text-gray-400">
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
