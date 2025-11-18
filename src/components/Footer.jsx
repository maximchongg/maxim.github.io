import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Maxim Chong. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/maximchongg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/maxim-chong-013853273" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="mailto:maximchongjm06@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
