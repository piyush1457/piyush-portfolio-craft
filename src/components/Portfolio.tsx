
import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Smart Parking System",
      description: "IoT-enabled parking optimization with real-time availability, RFID access, and cloud synchronization. Features an admin dashboard for comprehensive management.",
      technologies: ["React", "Node.js", "MySQL", "IoT", "RFID", "Cloud Services"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      category: "IoT"
    },
    {
      title: "News Summarization App",
      description: "Python-based application performing news scraping, sentiment analysis, and Hindi audio summaries. Built with modern web frameworks and NLP libraries.",
      technologies: ["Python", "FastAPI", "Streamlit", "NLTK", "gTTS", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      category: "Machine Learning"
    },
    {
      title: "Online Rental Platform",
      description: "Full-stack MERN application enabling users to rent products online. Features product browsing, authentication, dynamic cart, and order tracking.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      category: "Web Development"
    },
    {
      title: "Data Analysis on Accident Dataset",
      description: "Comprehensive data analysis providing insights from traffic accident data using Python libraries, ML models, and advanced visualization techniques.",
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Jupyter", "Seaborn"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      category: "Data Science"
    },
    {
      title: "Voice-Controlled Robot Car",
      description: "Embedded systems project featuring a voice-operated robot using Arduino, C/C++, and voice recognition integration for autonomous navigation.",
      technologies: ["Arduino", "C/C++", "Voice Recognition", "Embedded Systems", "Sensors"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      category: "Robotics"
    }
  ];

  const categories = ["All", "Web Development", "Machine Learning", "IoT", "Data Science", "Robotics"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in software development, data analysis, and innovative technology solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-purple-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github size={20} className="text-gray-700" />
                    </a>
                    <a 
                      href={project.demo}
                      className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    <Code size={16} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
