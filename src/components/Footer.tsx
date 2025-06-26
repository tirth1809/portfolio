import  React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-slate-900 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Tirth Doshi</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Passionate Developer creating amazing web experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tirth1809"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="http://www.linkedin.com/in/tirthdoshi1809"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:tirthdoshi18@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Availability</h4>
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full pulse-animation"></div>
                <span className="text-green-400 font-semibold">Available for Work</span>
              </div>
              <p className="text-gray-300 text-sm">
                Open to new opportunities and exciting projects. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-1">
            <span>Made with</span>
           
            <span>by Tirth Doshi © 2025. All rights reserved.</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;