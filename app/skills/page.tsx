'use client'

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <div className="relative z-10">
        <Header />

        <main className="flex min-h-screen w-full max-w-7xl mx-auto py-10 px-6  md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12 items-center w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-3xl lg:text-4xl font-bold text-center md:mb-8"
            >
              My Skills
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full max-w-4xl"
            >
              {/* Mobile Development */}
              <motion.div className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                }`}>
                <div className="flex items-center mb-4">
                  <span className="text-2xl md:mr-3">📱</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">Mobile Development</h2>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    React Native
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Cross-Platform App Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Responsive Mobile UI
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Api Integration
                  </li>
                </ul>
              </motion.div>

              {/* Frontend Development */}
              <motion.div className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                }`}>
                <div className="flex items-center mb-4">
                  <span className="text-2xl md:mr-3">🌐</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">Frontend Development</h2>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    React.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    JavaScript (ES6+)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    TypeScript (Basic)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    HTML5, CSS3
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Responsive Web Design
                  </li>
                </ul>
              </motion.div>

              {/* Backend & Database */}
              <motion.div className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                }`}>
                <div className="flex items-center mb-4">
                  <span className="text-2xl md:mr-3">🔥</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">Backend & Database</h2>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Firebase (Authentication, Firestore)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    REST API Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Real-time Data Handling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Node.js (basics)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Express.js (basics)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    MongoDB (basics)
                  </li>
                </ul>
              </motion.div>

              {/* State Management */}
              <motion.div className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                }`}>
                <div className="flex items-center mb-4">
                  <span className="text-2xl md:mr-3">🧠</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">State Management</h2>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Redux
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Context API
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Shared Preferences (Async Storage)
                  </li>
                </ul>
              </motion.div>

              {/* Tools & Platforms */}
              <motion.div className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                }`}>
                <div className="flex items-center mb-4">
                  <span className="text-2xl md:mr-3">🛠</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">Tools & Platforms</h2>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Git & GitHub
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Android Studio
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    VS Code
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Net Beans
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Postman
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Firebase Console
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
