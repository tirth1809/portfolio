import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelors in Information Technology',
      institution: 'A D Patel Institute of Technology',
      location: 'Vallabh Vidyanagar, Anand, Gujarat, India',
      duration: '2023 - 2026',
      grade: 'CGPA: 8.41/10',
      description: 'Comprehensive study of information technology fundamentals, programming languages, and software development.',
     
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'C. U. Shah Polytechnic',
      location: 'Surendranagar, Gujarat, India',
      duration: '2020 - 2023',
      grade: 'CGPA: 8.67/10',
      description: 'Comprehensive study of information technology fundamentals, programming languages, and software development.',
     
    }
  ];

  const certifications = [
    {
      name: 'React.js Complete Course',
      issuer: 'Udemy',
      date: '2024',
      description: 'Comprehensive course covering React fundamentals, hooks, state management, and modern development practices.'
    },
    {
      name: 'Career Essentials in Business Analysis – Microsoft & LinkedIn',
     
    },
    {
      name: 'Career Edge – Young Professional – TCS iON ',
      
    },
    {
      name: 'Java Course: Mastering the Fundamentals – Scaler ',
      
    },
     {
      name: 'Career Essentials in Data Analysis – Microsoft & LinkedIn',
 
      
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
            My <span className="gradient-text">Education</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning through formal education and professional certifications.
          </p>
        </motion.div>

        {/* Formal Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">Formal Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="glass-effect p-8 rounded-lg hover-lift"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-purple-400 font-semibold">{edu.institution}</h4>
                    <p className="text-gray-300">{edu.location}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="flex items-center space-x-2 text-gray-300 mb-2">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                      {edu.grade}
                    </div>
                  </div>
                </div>

               
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="glass-effect p-6 rounded-lg hover-lift"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <BookOpen className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                    <p className="text-purple-400 font-semibold">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-lg">
            <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Continuous Learning</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I believe in lifelong learning and staying updated with the latest technologies and industry trends. 
              I regularly take online courses, attend webinars, and participate in developer communities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;