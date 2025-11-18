import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100">
      <div className="text-4xl">
        {skill.icon}
      </div>
    </div>
  );
};

export default SkillBadge;
