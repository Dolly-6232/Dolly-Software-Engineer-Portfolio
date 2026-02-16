'use client'

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <div className="relative z-10">
        <Header />

        <main className="flex min-h-screen w-full max-w-7xl mx-auto py-10 px-6  md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 md:gap-12"
          >
            <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-center md:mb-8">Worked On Live Projects</h1>
            <div className="flex-row">
              <a href="https://kickscore.ng/" target="_blank" rel="noopener noreferrer" className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>LiveScore By KickScore</a>
              <a href="https://play.google.com/store/apps/details?id=com.app.kickscore&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>(by using react native expo website and app both)</a>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <Image src="/images/kickscoreWeb.png" alt="LiveScore By KickScore" className="w-[100%] h-auto md:w-[50%] md:h-auto " width={500} height={500} />
              <Image src="/images/kickscoreApp.png" alt="LiveScore By KickScore App" className="w-[100%] h-auto md:w-[50%] md:h-auto " width={500} height={500} />
            </div>
            <a href="https://beta.theveelsnetwork.com/login" target="_blank" rel="noopener noreferrer" className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>Veels (by using nextjs)</a>
            <div className="flex gap-4 flex-col md:flex-row">
              <Image src="/images/veelsWeb.png" alt="Veels" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
              <Image src="/images/veelsWeb2.png" alt="Veels Admin" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
            </div>
            <a href="https://provider.theveelsnetwork.com/" target="_blank" rel="noopener noreferrer" className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>Veels Admin Dashboard (by using nextjs)</a>
            <div className="flex gap-4 flex-col md:flex-row">
              <Image src="/images/veelsadmin.png" alt="Veels" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
              <Image src="/images/veelsAdmin2.png" alt="Veels Admin" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
            </div>
            {/* <a href="https://provider.theveelsnetwork.com/" target="_blank" rel="noopener noreferrer">Veels Provider Dashboard (by using nextjs)</a>
            <div className="flex gap-4 flex-col md:flex-row">
              <Image src="/images/veelsprovider.png" alt="Veels" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
              <Image src="/images/veelsProvider2.png" alt="Veels Admin" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
            </div> */}
            <a href="https://bankreconciliation.intelligens.app/" target="_blank" rel="noopener noreferrer" className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>Bank Reconciliation (by using reactjs)</a>
            <div className="flex gap-4 flex-col md:flex-row">
              <Image src="/images/yahuda.png" alt="Bank Reconciliation" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
              <Image src="/images/yahuda2.png" alt="Bank Reconciliation" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
            </div>
            <a href="https://dolly-6232.github.io/aimond-internship-project/" target="_blank" rel="noopener noreferrer" className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>QR Code Generator (by using html, css, js)</a>
            <Image src="/images/qrcode.png" alt="Veels" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
