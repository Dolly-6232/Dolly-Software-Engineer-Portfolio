'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";


export default function About() {
  const { theme } = useTheme();

  return (
    <div className={` transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <Header />

      <main className="flex flex-col md:flex-row  w-full max-w-7xl mx-auto flex-col items-center justify-center  px-6 md:px-16">
   <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-col items-center mb-12"
        >
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12"
        ></motion.div>
        {/* Image and About Me in same row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Image src="/images/about.png" alt="Profile" width={400} height={400} className="rounded-full w-full max-w-sm lg:max-w-md" />
          </motion.div>

          {/* About Me Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="max-w-4xl text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              About Me
            </h1>
            <p className="text-md md:text-lg lg:text-xl text-left">
              I&apos;m a passionate React Native and Frontend Developer who loves creating intuitive and engaging digital experiences. I specialize in building modern mobile and web applications using cutting-edge technologies like React Native, React.js, and Firebase.
              
              My approach focuses on clean, maintainable code with performance optimization and reusable component architecture. I enjoy solving complex problems and turning ideas into reality through thoughtful design and implementation.
              
              I&apos;m committed to continuous learning and staying updated with the latest industry trends. My goal is to contribute to meaningful projects that make a positive impact while growing both technically and personally within innovative development teams.
            </p>
          </motion.div>
        </motion.div>

        {/* Work Experience Section in separate column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-7xl mx-auto"
        >
            <h2 className="justify-center flex items-center text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {/* HBWebsol - Current */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`p-6 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex flex-row items-center justify-between mb-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-sm md:text-xl lg:text-2xl font-semibold text-orange-500">React Native Developer</h3>
                  <p className="text-sm md:text-lg lg:text-xl font-medium">HBWebsol</p>
                </div>
                <div className="mt-2 text-right sm:mt-0">
                  <p className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Present
                  </p>
                  <p className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    Current Position
                  </p>
                </div>
              </div>
              <ul className={`space-y-2 text-base md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  Developing cross-platform mobile applications using React Native
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  Building responsive, interactive user interfaces and reusable components
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  Integrating REST APIs and managing application state efficiently
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  Collaborating with cross-functional teams to deliver high-quality solutions
                </li>
              </ul>
            </motion.div>

            {/* Ideal IT Techno - 8 months */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`p-6 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex flex-row items-center justify-between mb-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-sm md:text-xl lg:text-2xl font-semibold text-orange-500">Software Developer</h3>
                  <p className="text-sm md:text-lg lg:text-xl font-medium">Ideal IT Techno</p>
                </div>
                <div className="mt-2 text-right sm:mt-0">
                  <p className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    8 Months
                  </p>
                  <p className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    Previous Experience
                  </p>
                </div>
              </div>
              <ul className={`space-y-2 text-md md:text-lg lg:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  Developed and maintained web and mobile applications using modern technologies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  Created responsive and user-friendly interfaces with React.js, Next.js, React Native and JavaScript
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  Worked with React.js to build dynamic and interactive web components
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  Implemented API integrations and handled data management with Firebase
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  Contributed to code reviews and maintained best practices for clean code
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
