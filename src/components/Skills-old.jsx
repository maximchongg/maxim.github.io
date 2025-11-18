import React, { useState } from 'react';
import SphereImageGrid from './SphereImageGrid';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const baseSkills = [
    { id: 'react', name: 'React', icon: <i className="fab fa-react text-[#61DAFB]"></i> },
    { id: 'node', name: 'Node.js', icon: <i className="fab fa-node text-[#339933]"></i> },
    { id: 'js', name: 'JavaScript', icon: <i className="fab fa-js text-[#F7DF1E]"></i> },
    { id: 'python', name: 'Python', icon: <i className="fab fa-python text-[#3776AB]"></i> },
    { id: 'docker', name: 'Docker', icon: <i className="fab fa-docker text-[#2496ED]"></i> },
    { id: 'git', name: 'Git', icon: <i className="fab fa-git-alt text-[#F05032]"></i> },
    { id: 'github', name: 'GitHub', icon: <i className="fab fa-github text-gray-800"></i> },
    { id: 'aws', name: 'AWS', icon: <i className="fab fa-aws text-[#FF9900]"></i> },
    { id: 'linux', name: 'Linux', icon: <i className="fab fa-linux text-gray-800"></i> },
    { id: 'n8n', name: 'n8n', icon: <i className="fas fa-project-diagram text-[#FF6D5A]"></i> },
    { id: 'fastapi', name: 'FastAPI', icon: <i className="fas fa-bolt text-[#009688]"></i> },
    { id: 'mongodb', name: 'MongoDB', icon: <i className="fas fa-database text-[#47A248]"></i> },
    { id: 'postgresql', name: 'PostgreSQL', icon: <i className="fas fa-server text-[#336791]"></i> },
    { id: 'ai', name: 'AI/ML', icon: <i className="fas fa-brain text-[#FF6B6B]"></i> },
    { id: 'security', name: 'Security', icon: <i className="fas fa-shield-alt text-[#4A90E2]"></i> },
    { id: 'langchain', name: 'LangChain', icon: <i className="fas fa-link text-[#1C3C3C]"></i> },
    { id: 'openai', name: 'OpenAI', icon: <i className="fas fa-robot text-[#10A37F]"></i> },
    { id: 'api', name: 'API', icon: <i className="fas fa-plug text-[#6B46C1]"></i> },
    { id: 'cloud', name: 'Cloud', icon: <i className="fas fa-cloud text-[#4285F4]"></i> },
    { id: 'analytics', name: 'Analytics', icon: <i className="fas fa-chart-line text-[#FF6384]"></i> },
  ];

  // Repeat skills 3 times to make it more dense/stacked
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

  return (
    <section id="skills" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
            MY SKILLS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The Secret <span className="italic text-gray-600">Sauce</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Drag to rotate and explore my tech stack in 3D. Click on any skill to learn more.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <SphereImageGrid
            images={skillsData}
            containerSize={600}
            sphereRadius={250}
            autoRotate={true}
            autoRotateSpeed={0.2}
            dragSensitivity={0.5}
            baseImageScale={0.11}
            onSkillClick={handleSkillClick}
          />
        </div>
      </div>

      {/* Modal Popup */}
      {selectedSkill && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-5xl">
                  {selectedSkill.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedSkill.name}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              I have extensive experience with {selectedSkill.name}, using it in various projects to build scalable and efficient solutions.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
