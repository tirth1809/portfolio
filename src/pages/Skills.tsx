import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, PenTool as Tool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'React.js'  },
        { name: 'JavaScript ' },
        { name: 'JAVA' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'PHP' },
        { name: 'DBMS' },
         { name: 'C' },
          { name: 'C++' },
           { name: 'SQL' },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'Node.js' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'REST APIs' },
       
      ]
    },
   
    {
      title: 'Tools & Technologies',
      icon: <Tool className="w-8 h-8" />,
      skills: [
        { name: 'GitHub',  },
        { name: 'VS Code' },
        
      ]
    }
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
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg hover-lift"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-purple-400">{category.icon}</div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      
                    </div>
                    
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Always Learning</h2>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. I regularly explore new 
              frameworks, tools, and best practices to stay current with industry standards.
            </p>
           
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;