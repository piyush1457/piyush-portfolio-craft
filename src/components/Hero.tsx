
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-lg mb-4 opacity-90">Hey, I'm Piyush 👋</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Front</span>
              <span className="text-yellow-300">end</span>
              <br />
              <span className="text-gray-200">Developer</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl">
              I'm a frontend developer based in India. I'll help you build beautiful websites your users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
              >
                Browse Projects
              </button>
            </div>
            <div className="flex space-x-6 mt-8 justify-center lg:justify-start">
              <a 
                href="https://github.com/piyush1457" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/piyush-kumar-sodhi-104b6b307" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:piyushsodhi145@gmail.com"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-white/20 p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-6xl text-gray-600">
                  PK
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center text-2xl">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
