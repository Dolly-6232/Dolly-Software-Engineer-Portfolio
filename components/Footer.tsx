'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`mt-16 py-8 px-4 border-t transition-colors duration-300 bg-orange-500 ${
      theme === 'dark' 
        ? 'border-orange-600 text-white' 
        : 'border-orange-600 text-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg lg:text-xl font-semibold text-white">Dolly Taide</h3>
            <p className="text-sm text-orange-100">
              Passionate developer creating amazing digital experiences.<br />
              Specialized in modern web and mobile app technologies with user-centric design.
            </p>
          </motion.div>

          {/* Quick Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/Dolly-6232/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="http://linkedin.com/in/dolly-taide-9491082b4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="/files/resume.pdf" 
                  target="_blank"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div> */}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg lg:text-xl font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Dolly-6232/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-orange-400 bg-orange-400/20 transition-all hover:scale-110 hover:bg-orange-400/30"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="http://linkedin.com/in/dolly-taide-9491082b4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-orange-400 bg-orange-400/20 transition-all hover:scale-110 hover:bg-orange-400/30"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/shivangi_s015/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-orange-400 bg-orange-400/20 transition-all hover:scale-110 hover:bg-orange-400/30"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:dollytaide2002@gmail.com"
                className="p-2 rounded-lg border border-orange-400 bg-orange-400/20 transition-all hover:scale-110 hover:bg-orange-400/30"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-orange-600 text-center text-sm"
        >
          <p className="text-orange-100 text-sm lg:text-sm">
            © {new Date().getFullYear()} Dolly Taide. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
