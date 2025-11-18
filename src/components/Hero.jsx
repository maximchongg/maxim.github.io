import React, { useEffect, useRef } from 'react';
import { ShaderAnimation } from './ShaderAnimation';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <ShaderAnimation />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-8 animate-fade-in">
          <span className="px-2 py-0.5 bg-white text-black rounded-full text-xs font-semibold">New</span>
          <span>PSA Hackathon Top 15 Finalist is live!</span>
          <i className="fas fa-arrow-right"></i>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-delay-1">
          I help transform ideas<br />
          into seamless <span className="italic text-gray-300">AI&#8209;powered&nbsp;experiences</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 text-white text-lg mb-8 animate-fade-in-delay-2">
          <span>Hello, I'm Maxim Chong</span>
          <img 
            src="assets/images/7aabe15e-0982-42a0-ace3-e69c3a5ad360.jpeg" 
            alt="Maxim Chong" 
            className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
          />
          <span>an AI Developer & Full Stack Engineer</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center gap-2"
          >
            Let's Connect
            <i className="fas fa-arrow-right"></i>
          </a>
          <a 
            href="mailto:maximchongjm06@gmail.com" 
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
          >
            <i className="far fa-copy"></i>
            maximchongjm06@gmail.com
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}} />
    </section>
  );
};

export default Hero;
