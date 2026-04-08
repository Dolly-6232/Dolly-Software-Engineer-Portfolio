'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Github, MessageCircle } from "lucide-react";
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
  const [loading, setLoading] = useState(true);
  const [contributions, setContributions] = useState<any[]>([]);

  useEffect(() => {
    const fetchGitHubContributions = async () => {
      try {
        setLoading(true);
        
        // Fetch contribution data from GitHub API
        const response = await fetch('https://api.github.com/users/Dolly-6232/events?per_page=100');
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        
        const events = await response.json();
        
        // Process events to create contribution data
        const contributionsMap = new Map();
        const today = new Date();
        
        // Initialize all days for the past year with 0 contributions
        for (let i = 0; i < 365; i++) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          contributionsMap.set(dateStr, 0);
        }
        
        // Count contributions from events
        events.forEach((event: any) => {
          const eventDate = new Date(event.created_at).toISOString().split('T')[0];
          if (contributionsMap.has(eventDate)) {
            contributionsMap.set(eventDate, contributionsMap.get(eventDate) + 1);
          }
        });
        
        // Convert to array format
        const contributions = Array.from(contributionsMap.entries())
          .map(([date, count]: [string, number]) => ({ date, count }))
          .reverse();
        
        setContributions(contributions);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        
        // Fallback to mock data if API fails
        const mockContributions = [];
        const today = new Date();
        for (let i = 0; i < 365; i++) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          mockContributions.push({
            date: date.toISOString().split('T')[0],
            count: Math.floor(Math.random() * 10)
          });
        }
        setContributions(mockContributions.reverse());
      } finally {
        setLoading(false);
      }
    };
    
    fetchGitHubContributions();
  }, []);

  const getWeeks = () => {
    const weeks = [];
    for (let i = 0; i < contributions.length; i += 7) {
      weeks.push(contributions.slice(i, i + 7));
    }
    return weeks;
  };

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-gray-800';
    if (count <= 2) return 'bg-green-900';
    if (count <= 5) return 'bg-green-700';
    if (count <= 8) return 'bg-green-500';
    return 'bg-green-300';
  };

  return (
    <div className={` transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <Header />

      <main className="flex flex-col md:flex-row  w-full max-w-7xl mx-auto flex-cole md:flex-row py-10 px-6 md:px-16">
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
            <a href="http://linkedin.com/in/dolly-taide-9491082b4" target="_blank" rel="noopener noreferrer"><Image src="/linkdin.svg" alt="GitHub" width={64} height={64} className="rounded-lg bg-white" /></a>

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
       <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center justify-center px-4 sm:px-0 w-full max-w-7xl mx-auto">
 <div className="bg-orange-500/10 border border-orange-500 rounded-xl p-3 sm:p-4 lg:p-6 backdrop-blur-sm w-full lg:max-w-none">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4 flex items-center gap-2 sm:gap-3 text-white">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              GitHub Activity
            </h3>
            <p className="text-gray-400 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">Dolly's coding journey over the past year</p>
            
            {loading ? (
              <div className="mt-3 sm:mt-4 lg:mt-6 h-24 sm:h-32 lg:h-40 bg-black/50 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 border-b-2 border-gray-400 mx-auto mb-1 sm:mb-2 lg:mb-3"></div>
                  <p className="text-xs sm:text-sm">Loading GitHub activity...</p>
                </div>
              </div>
            ) : (
              <div className="mt-3 sm:mt-4 lg:mt-6">
                <div className="overflow-x-auto -mx-1 sm:-mx-2 lg:mx-0">
                  <div className="inline-block min-w-full px-1 sm:px-2 lg:px-0">
                    <div className="flex gap-0.5 sm:gap-1 justify-center">
                      {getWeeks().slice(-52).map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-0.5 sm:gap-1">
                          {week.map((day: any, dayIndex: number) => (
                            <div
                              key={dayIndex}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-sm ${getContributionColor(day.count)} hover:ring-1 hover:ring-gray-600 transition-all cursor-pointer`}
                              title={`${day.date}: ${day.count} contributions`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-2 sm:mt-3 lg:mt-4 flex flex-row items-center justify-between gap-2 sm:gap-0 text-xs text-gray-400">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-xs">Less</span>
                    <div className="flex gap-0.5 sm:gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-gray-800 rounded-sm"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-900 rounded-sm"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-700 rounded-sm"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-500 rounded-sm"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-300 rounded-sm"></div>
                    </div>
                    <span className="text-xs">More</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <a 
                      href="https://github.com/Dolly-6232/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors text-xs"
                    >
                    <Github className="w-15 h-15 md:w-20 md:h-20" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      <Footer />
    </div>
  );
}
