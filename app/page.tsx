'use client'

import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, MessageCircle } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const DownloadCVButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 430);
    };

    // Check initial size
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <button
      onClick={() => window.open('/files/resume.pdf', '_blank')}
      className="px-8 flex items-center gap-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
    >
      <Download />
      {isMobile ? 'CV' : 'Download CV'}
    </button>
  );
};

const ContactButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 430);
    };

    // Check initial size
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <button onClick={openGmail} className="px-8 py-3 flex items-center gap-2 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
      <MessageCircle />
      {isMobile ? 'Contact' : 'Contact Me'}
    </button>
  );
};

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <Header />

      <main className="flex flex-col md:flex-row min-h-screen w-full max-w-7xl mx-auto flex-cole md:flex-row py-10 px-6 md:px-16">
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
            <a href="https://www.instagram.com/shivangi_s015/?hl=en" target="_blank" rel="noopener noreferrer"><Image src="/instagram.svg" alt="Instagram" width={64} height={64} className="rounded-lg" /></a>
            <a href="https://github.com/Dolly-6232/" target="_blank" rel="noopener noreferrer"><Image src="/github.svg" alt="GitHub" width={64} height={64} className="rounded-lg bg-white" /></a>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl text-lg md:text-5xl font-bold leading-tight"
          >
            Hi, I&apos;m Dolly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`max-w-2xl text-md md:text-2xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
          >
            I&apos;m a passionate developer creating amazing digital experiences.
            Explore my work and get to know more about my skills and projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <DownloadCVButton />
            <ContactButton />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-145 right-[50%] md:top-120 md:right-[24%] lg:right-[30%] lg:top-[44vh] transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
          <Image src="/images/bubble.png" alt="Profile" width={80} height={80} className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 flex items-center justify-center"
        >
          <Image src="/images/homelogo.png" alt="Profile" width={300} height={300} className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full" />
        </motion.div>
      </main>
    </div>
  );
}
