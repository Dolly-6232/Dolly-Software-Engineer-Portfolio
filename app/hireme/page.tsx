'use client'

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Hire() {
  const { theme } = useTheme();

  const openGmail = () => {
    const email = 'dollytaide2002@gmail.com';

    // Try mailto link 
    window.location.href = `mailto:${email}`;

    // Fallback: Open Gmail directly in browser after a short delay
    setTimeout(() => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
      window.open(gmailUrl, '_blank');
    }, 500);
  };
  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <div className="relative z-10">
        <Header />

        <main className="flex flex-col min-h-screen w-full max-w-7xl mx-auto py-10 px-6 md:px-16 items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-4xl font-bold text-center md:mb-8"
            >
              Hire Me
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >



              {/* Why Hire Me Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                  }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-lg md:text-2xl mr-3">💼</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">Why Hire Me?</h2>
                </div>
                <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Software developer with proven track record</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Experience with modern web technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Strong problem-solving and debugging skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Excellent communication and teamwork</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Quick learner and adaptable to new technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Passionate about creating exceptional user experiences</span>
                  </li>
                </ul>
              </motion.div>

              {/* Services Offered */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                  }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-lg md:text-2xl mr-3">🚀</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">Services I Offer</h2>
                </div>
                <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">📱</span>
                    <span>Mobile App Development (React Native)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">🌐</span>
                    <span>Web Application Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">🎨</span>
                    <span>UI/UX Design & Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">🔧</span>
                    <span>API Integration & Backend Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">📊</span>
                    <span>Database Design & Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">🚀</span>
                    <span>Performance Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">🔒</span>
                    <span>Authentication & Security Implementation</span>
                  </li>
                </ul>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/40 border border-orange-500 ${theme === 'dark' ? 'bg-orange-500 bg-opacity-20' : 'bg-orange-100 bg-opacity-50'
                  }`}
              >
                <div className="flex justify-center flex-col items-center px-6">
                  <div className="flex items-center mb-4">
                    <span className="text-lg md:text-2xl mr-3">🤝</span>
                    <h3 className={`text-lg md:text-2xl font-text-gray-300 mb-0 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>Ready to Work Together!</h3>
                  </div>
                  <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    I&apos;m available for freelance projects, full-time positions, and exciting collaborations.
                    Let&apos;s create something amazing together!
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Get In Touch
                    </a>
                    <button
                      onClick={openGmail}
                      className={`px-6 border-2 font-semibold rounded-lg transition-colors ${theme === 'dark'
                        ? 'border-orange-500 text-orange-500 hover:bg-orange-600 text-white'
                        : 'border-orange-500 text-orange-500 hover:bg-orange-600 text-orange-500'
                        }`}
                    >
                      Email Directly
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          // className="text-center"
          >
            <Image src="/images/hire.png" alt="Profile" width={500} height={500} className="rounded-full" />
          </motion.div>
        </main>
      </div>
    </div >
  );
}
