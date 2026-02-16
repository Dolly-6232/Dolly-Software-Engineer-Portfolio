'use client'

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";


export default function About() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <Header />

      <main className="flex flex-col md:flex-row min-h-screen w-full max-w-7xl mx-auto flex-col items-center justify-center py-10 px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Image src="/images/about.png" alt="Profile" width={500} height={500} className="rounded-full" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <h1 className="max-w-4xl text-lg md:text-3xl lg:text-5xl font-bold leading-tight">
            About Me
          </h1>
          <p className="max-w-4xl text-md md:text-xl lg:text-2xl text-left">
            I&apos;m a React Native and Frontend Developer with hands-on experience. I&apos;ve worked on real-world mobile and web applications using React Native, React.js, Firebase, and REST APIs. My experience includes building responsive UIs, integrating APIs, handling media and audio uploads, and developing admin and provider dashboards with role-based access.
            I have contributed to cross-platform mobile apps and dynamic web platforms, focusing on performance optimization, reusable component architecture, and clean, maintainable code. I have experience working with Firebase services, real-time data handling, and implementing scalable frontend solutions aligned with business requirements.
            I am passionate about creating intuitive user experiences, continuously improving my technical skills, and adapting quickly to new technologies. Currently, I&apos;m looking for a challenging role where I can grow technically, contribute to impactful projects, and add value to a forward-thinking development team.
          </p>

        </motion.div>
      </main>
    </div>
  );
}
