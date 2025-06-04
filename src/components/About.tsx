
import React from 'react';
import { Code, BookOpen, Award, Users } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "SkillCraft Technology",
      period: "2024",
      description: "Worked on data analysis and machine learning projects, gaining hands-on experience with Python and data visualization."
    },
    {
      title: "AWS Solution Architect",
      company: "Various Projects",
      period: "2023-2024",
      description: "Designed and implemented cloud solutions using AWS services for scalable applications."
    },
    {
      title: "Core Team Member",
      company: "Robotics Projects",
      period: "2023-Present",
      description: "Led development of innovative robotics and smart parking system solutions."
    }
  ];

  const skills = [
    { category: "Programming", items: ["Python", "Java", "C++", "JavaScript"] },
    { category: "Frontend", items: ["React", "Angular", "Vue.js", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "FastAPI", "Express.js"] },
    { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { category: "Cloud & Tools", items: ["AWS", "Git", "Docker", "Linux"] },
    { category: "Data Science", items: ["Machine Learning", "Data Analysis", "NLTK", "Pandas"] }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate third-year Information Science and Engineering student with a strong foundation in software development and data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Background</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-4">
                <BookOpen className="text-purple-600 mr-3" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">B.Tech in Information Science and Engineering</h4>
                  <p className="text-gray-600">Acharya Institute of Technology</p>
                  <p className="text-sm text-gray-500">Third Year • 2022-2026</p>
                </div>
              </div>
              <p className="text-gray-700">
                Currently pursuing my degree with a focus on software development, data analysis, and emerging technologies. 
                Maintaining strong academic performance while actively participating in practical projects and internships.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Code className="text-purple-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-900">Full Stack Development</h4>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Award className="text-blue-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-900">Data Analysis</h4>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="text-green-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-900">Team Leadership</h4>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <BookOpen className="text-yellow-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-900">Machine Learning</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <h4 className="font-semibold text-gray-900 mb-1">{exp.title}</h4>
                <p className="text-purple-600 font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
