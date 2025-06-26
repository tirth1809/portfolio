import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [

     {
      title: 'React JS Intern',
      company: 'Tech-Elecon Pvt. Ltd ',
      location: 'Hybrid',
      duration: 'May 2025 - June 2025',
      description: [
        'Built interactive websites for  using HTML, CSS, and ReactJS',
        'Worked on front-end development using React.js, Tailwind CSS, and LocalStorage.',
'Built responsive UI and role-based dashboards for travel booking and status tracking.' 

      ],
      technologies: ['NodeJS', 'TailwindCSS', 'JavaScript', 'Bootstrap', 'React.js']
    },
    {
      title: 'Web Development Intern',
      company: 'Saiket Systems',
      location: 'Remote',
      duration: 'April 2025 -  May 2025',
      description: [
        
        'Built responsive web pages and enhanced UI/UX for real-world projects.',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Remotely worked on front-end development using HTML, CSS, Bootstrap, and JavaScript',  

      ],
      technologies: ['HTML', 'JavaScript', 'CSS', 'Bootstrap']
    },
   
    
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through my professional experiences and the skills I've developed along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hidden md:block"></div>
                
                <div className="md:ml-20">
                  <div className="glass-effect p-8 rounded-lg hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-purple-400 font-semibold">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center space-x-2 text-gray-300 mb-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-lg">
            <Briefcase className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready for New Challenges</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and contribute to innovative projects. 
              Let's discuss how I can help bring your ideas to life!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;