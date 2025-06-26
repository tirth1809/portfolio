import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
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
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <p className="text-gray-300 mb-4">
                A detail-oriented individual with skills in Java, MySQL, C, C++ , PHP, and HTML. With strong 
communication and leadership abilities, I have successfully led teams in projects. Currently, I am 
expanding my knowledge in React JS, Node JS, Advanced Java, Android app development, and UI/UX 
design. Eager to apply my growing skill set to develop innovative and impactful solutions in the tech 
industry. 

              </p>
              <p className="text-gray-300 mb-4">
                I specialize in building responsive, user-friendly applications using React.js, JavaScript, 
                and modern CSS frameworks. I'm always eager to learn new technologies and stay updated 
                with the latest industry trends.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Personal Info</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Name:</span>
                  <span className="text-white">Tirth Doshi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Email:</span>
                  <span className="text-white">tirthdoshi18@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Location:</span>
                  <span className="text-white">India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Languages:</span>
                  <span className="text-white">English, Hindi, Gujarati</span>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'UI/UX Design', 'Open Source', 'Technology', 'Learning'].map((interest) => (
                  <span
                    key={interest}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-semibold text-white">Availability</h3>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full pulse-animation"></div>
                <span className="text-green-400 font-semibold">Available for new opportunities</span>
              </div>
              <p className="text-gray-300 mt-2">
                I'm currently open to full-time positions, freelance projects, and exciting collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;