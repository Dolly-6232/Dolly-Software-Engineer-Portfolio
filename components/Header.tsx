'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    // Derive active nav directly from pathname instead of using state
    const getActiveNav = () => {
        if (pathname === '/') return 'home'
        else if (pathname === '/about') return 'about'
        else if (pathname === '/skills') return 'skills'
        else if (pathname === '/projects') return 'projects'
        else if (pathname === '/contact') return 'contact'
        else if (pathname === '/hireme') return 'hireme'
        return 'home'
    }

    const activeNav = getActiveNav()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex items-center justify-between md:justify-center px-8 py-6 relative md:gap-2 lg:gap-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
                }`}
        >
            <Image src="/images/logoNew.png" alt="Logo" width={104} height={104} className="w-16 h-16 lg:w-26 lg:h-26 rounded-full" />
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl lg:text-2xl font-bold mr-2"
            >
                Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
                <motion.a
                    href="/"
                    className={`text-lg transition-colors hover:text-orange-500  ${activeNav === 'home' ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : ''
                        }`}
                    onClick={() => { }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    Home
                </motion.a>
                <motion.a
                    href="/about"
                    className={`text-lg transition-colors hover:text-orange-500 ${activeNav === 'about' ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : ''
                        }`}
                    onClick={() => { }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                >
                    About
                </motion.a>
                <motion.a
                    href="/skills"
                    className={`text-lg transition-colors hover:text-orange-500 ${activeNav === 'skills' ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : ''
                        }`}
                    onClick={() => { }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                >
                    Skills
                </motion.a>
                <motion.a
                    href="/projects"
                    className={`text-lg transition-colors hover:text-orange-500 ${activeNav === 'projects' ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : ''
                        }`}
                    onClick={() => { }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                >
                    Projects
                </motion.a>
                <motion.a
                    href="/contact"
                    className={`text-lg transition-colors hover:text-orange-500 ${activeNav === 'contact' ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : ''
                        }`}
                    onClick={() => { }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                >
                    Contact
                </motion.a>
                <motion.a
                    href="/hireme"
                    className={`px-4 lg:px-6 py-2 font-semibold rounded transition-colors ${theme === 'dark'
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                        } ${activeNav === 'hireme' ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : ''
                        }`}
                    onClick={() => { }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <p className="text-lg">Hire Me</p>
                </motion.a>

                {/* Theme Toggle Button */}
                <motion.button
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg transition-colors ${theme === 'dark'
                        ? 'bg-orange-500 text-yellow-400 hover:bg-orange-600'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                        }`}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    whileHover={{ scale: 1.1 }}
                    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {theme === 'dark' ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className={`md:hidden focus:outline-none flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`md:hidden absolute top-16 right-0 rounded-lg shadow-xl z-50 p-4 transition-colors ${theme === 'dark'
                        ? 'bg-black border border-gray-700'
                        : 'bg-white border border-gray-300'
                        }`}
                >
                    <nav className="flex flex-col space-y-4">
                        <Link
                            href="/"
                            className={`text-lg transition-colors hover:text-orange-500 block py-2 ${activeNav === 'home' ? 'text-orange-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`text-lg transition-colors hover:text-orange-500 block py-2 ${activeNav === 'about' ? 'text-orange-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                        <Link
                            href="/skills"
                            className={`text-lg transition-colors hover:text-orange-500 block py-2 ${activeNav === 'skills' ? 'text-orange-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Skills
                        </Link>
                        <Link
                            href="/projects"
                            className={`text-lg transition-colors hover:text-orange-500 block py-2 ${activeNav === 'projects' ? 'text-orange-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className={`text-lg transition-colors hover:text-orange-500 block py-2 ${activeNav === 'contact' ? 'text-orange-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/hireme"
                            className={`text-lg transition-colors hover:text-orange-500 block py-2 ${activeNav === 'contact' ? 'text-orange-500' : ''
                                }`}
                            onClick={closeMenu}
                        >
                            Hire Me
                        </Link>

                        {/* Mobile Theme Toggle */}
                        <Link
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                toggleTheme()
                                closeMenu()
                            }}
                            className={`text-lg transition-colors hover:text-orange-500 block py-2 ${theme === 'dark' ? 'text-white' : 'text-black'
                                }`}
                        >
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </Link>
                    </nav>
                </motion.div>
            )}
        </motion.nav>
    )
}
