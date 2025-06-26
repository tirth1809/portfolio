import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Ele-Desk',
      description: 'Developed "Ele-Desk" using PHP, HTML, CSS, JS & MySQL for resource sharing and order management.',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      features: ['Resource Sharing', 'Order Management', 'User Accounts', 'Inventory Tracking', 'Digital Transformation'],
      github: 'https://github.com/tirth1809',
      live: '#',
      category: 'Full Stack'
    },
    {
      title: 'E-commerce Order Management',
      description: 'Designed MySQL database for managing customers, orders, payments, deliveries, and reviews.',
      technologies: ['MySQL', 'ER Diagrams', 'Normalization', 'Relational Models'],
      features: ['Customer Management', 'Order Tracking', 'Payment Details', 'Review System', 'Data Accuracy'],
      github: 'https://github.com/tirth1809',
      live: '#',
      category: 'Database'
    },
    {
      title: 'TravelMate',
      description: 'Built a travel management web app using React.js, Tailwind CSS, and LocalStorage.',
      technologies: ['React.js', 'Tailwind CSS', 'LocalStorage'],
      features: ['Role-Based Dashboards', 'Trip Assignment', 'Booking System', 'Status Tracking', 'Frontend Only'],
      github: 'https://github.com/tirth1809',
      live: '#',
      category: 'Frontend'
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'Database'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect p-2 rounded-lg">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="glass-effect rounded-lg p-6 hover-lift group"
            >
              <span className="inline-block mb-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-purple-400">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-lg">
            <div className="flex justify-center space-x-8 mb-6">
              <div className="text-center">
                <Code className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Clean Code</p>
              </div>
              <div className="text-center">
                <Palette className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Modern Design</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-pink-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Performance</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Want to See More?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I'm constantly working on new projects 
              and exploring innovative technologies. Check out my GitHub for more projects and contributions.
            </p>
            <a
              href="https://github.com/tirth1809"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover-lift"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
