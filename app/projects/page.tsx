'use client'

import { ExternalLink, Github, Star, Clock, Users, Zap } from 'lucide-react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useTheme } from "@/contexts/ThemeContext"
import { motion } from "framer-motion"

export default function ProjectsPage() {

  const { theme } = useTheme()

  const projects = [
    {
      title: 'LiveScore By KickScore',
      description:
        'A comprehensive cross-platform sports scoring application developed with React Native and Expo, providing real-time match updates, player statistics, and analytics for football and basketball enthusiasts.',
      tech: ['React Native', 'Expo', 'JavaScript', 'REST APIs', 'Firebase'],
      category: 'Mobile Development',
      status: 'Production',
      image: '/images/kickscoreApp.png',
      image2: '/images/kickscoreWeb.png',
      demo: 'https://kickscore.ng/',
      appStore: 'https://play.google.com/store/apps/details?id=com.app.kickscore&pcampaignid=web_share',

      features: [
        'Real-time match score updates and live notifications',
        'Comprehensive player statistics and performance analytics',
        'Cross-platform mobile app for iOS and Android',
        'Live match fixtures, schedules and tournament management',
        'User-friendly interface with dark/light theme support',
        'Offline mode for recent match data',
        'Social sharing capabilities for match results'
      ]
    },
    {
      title: 'Veels Network Platform',
      description:
        'A comprehensive service marketplace platform built with Next.js, featuring user authentication, service provider management, booking system, and administrative dashboard for seamless business operations.',
      tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'JWT'],
      demo: 'https://beta.theveelsnetwork.com/login',
      category: 'Web Development',
      status: 'Production',
      image: '/images/veelsWeb.png',
      image2: '/images/veelsWeb2.png',

      features: [
        'Secure user authentication and authorization system',
        'Service provider dashboard with profile management',
        'Advanced booking and scheduling system',
        'Real-time chat and notification system',
        'Payment gateway integration',
        'Review and rating system for providers',
        'Responsive design with mobile-first approach',
        'Admin panel for platform management'
      ]
    },

    {
      title: 'Veels Admin Dashboard',
      description:
        'A powerful administrative dashboard for the Veels platform, providing comprehensive management tools for user oversight, service provider management, analytics, and platform operations.',
      tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Chart.js', 'Material-UI'],
      demo: 'https://provider.theveelsnetwork.com/',
      admin: 'https://provider.theveelsnetwork.com/',
      category: 'Web Development',
      status: 'Production',
      image: '/images/veelsadminNew.png',
      image2: '/images/veelsAdminnew2.png',

      features: [
        'Comprehensive user management and analytics',
        'Service provider verification and management',
        'Real-time dashboard with key performance indicators',
        'Financial reporting and revenue analytics',
        'Content moderation and dispute resolution',
        'Bulk operations and data export capabilities',
        'Role-based access control system',
        'Advanced search and filtering options'
      ]
    },

    {
      title: 'Bank Reconciliation System',
      description:
        'A sophisticated financial management system designed for automated bank reconciliation, featuring intelligent transaction matching, comprehensive reporting, and secure data processing for financial institutions.',
      tech: ['React.js', 'JavaScript', 'CSS', 'REST APIs', 'Node.js', 'PostgreSQL'],
      demo: 'https://bankreconciliation.intelligens.app/',
      category: 'FinTech',
      status: 'Production',
      image: '/images/yahuda.png',
      image2: '/images/yahuda2.png',

      features: [
        'Automated transaction matching algorithms',
        'Advanced financial reporting and analytics',
        'Real-time data synchronization with banking systems',
        'Secure transaction processing with encryption',
        'Intuitive dashboard for financial oversight',
        'Audit trail and compliance reporting',
        'Multi-currency support and conversion',
        'Exception handling and manual reconciliation tools'
      ]
    },

    {
      title: 'QR Code Generator Tool',
      description:
        'A versatile and efficient QR code generation tool built with vanilla JavaScript, featuring multiple QR code types, customization options, and instant download capabilities for personal and business use.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'QRCode.js API'],
      demo: 'https://dolly-6232.github.io/aimond-internship-project/',
      category: 'Web Tools',
      status: 'Live',
      image: '/images/qrcode.png',

      features: [
        'Multiple QR code types (URL, Text, Email, Phone, WiFi)',
        'Customizable colors, logos, and design options',
        'Instant QR code generation and preview',
        'High-resolution export in multiple formats (PNG, SVG, PDF)',
        'Batch QR code generation capability',
        'Error correction level customization',
        'Responsive design for all devices',
        'No server-side processing - client-side generation'
      ]
    },

     {
  title: 'Recipe Book - Culinary Collection Platform',
  description:
    'A full-stack recipe management application that allows users to discover, create, and organize their favorite recipes with image uploads, favorites system, and user authentication.',
  tech: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Redux Toolkit', 'Tailwind CSS'],
  demo: 'https://recipe-book-frontend-tau.vercel.app/signup',
  category: 'Full Stack Web Application',
  status: 'Live',
  image: '/images/recipe_web.png',
  image2: '/images/recipe_mobile.png',
  features: [
    'User authentication with signup and login functionality',
    'Recipe creation with image upload support via Cloudinary',
    'Recipe browsing with responsive grid layout',
    'Favorites system to save and manage favorite recipes',
    'User profile management with profile image customization',
    'Recipe detail view with ingredients and instructions',
    'JWT-based authentication for secure API access',
    'Responsive design optimized for mobile and desktop',
    'Real-time image preview during recipe creation',
    'MongoDB database for efficient data storage',
    'RESTful API architecture with Express.js',
    'State management with Redux Toolkit'
  ]
}
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
      case 'Live':
        return theme === 'dark' ? 'bg-green-500/20 border-green-500/30 text-green-400' : 'bg-green-100 border-green-300 text-green-700'

      case 'Beta':
        return theme === 'dark' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' : 'bg-yellow-100 border-yellow-300 text-yellow-700'

      case 'Development':
        return theme === 'dark' ? 'bg-blue-500/20 border-blue-500/30 text-blue-400' : 'bg-blue-100 border-blue-300 text-blue-700'

      default:
        return theme === 'dark' ? 'bg-gray-500/20 border-gray-500/30 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-700'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Mobile Development':
        return theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'

      case 'Web Development':
        return theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'

      case 'FinTech':
        return theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'

      default:
        return theme === 'dark' ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700'
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <Header />

      <main>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-7xl mx-auto"
        >

          <div className="px-4 sm:px-6 py-20 pt-12 min-h-screen">

            {/* Heading */}
            <div className="text-center mb-12 sm:mb-16">

              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'}`}>
                Projects
              </h1>

              <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Real-world applications spanning mobile development, web platforms, 
                and financial systems with modern technologies.
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">

              <div className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-xl p-3 sm:p-4 lg:p-6 text-center`}>
                <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mx-auto mb-2 sm:mb-3 text-orange-500" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">4+</h3>
                <p className={theme === 'dark' ? 'text-gray-400 text-xs sm:text-sm' : 'text-gray-600 text-xs sm:text-sm'}>Live Projects</p>
              </div>

              <div className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-xl p-3 sm:p-4 lg:p-6 text-center`}>
                <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mx-auto mb-2 sm:mb-3 text-green-500" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">1000+</h3>
                <p className={theme === 'dark' ? 'text-gray-400 text-xs sm:text-sm' : 'text-gray-600 text-xs sm:text-sm'}>Active Users</p>
              </div>

              <div className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-xl p-3 sm:p-4 lg:p-6 text-center`}>
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mx-auto mb-2 sm:mb-3 text-purple-500" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">5000+</h3>
                <p className={theme === 'dark' ? 'text-gray-400 text-xs sm:text-sm' : 'text-gray-600 text-xs sm:text-sm'}>Development Hours</p>
              </div>

              <div className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-xl p-3 sm:p-4 lg:p-6 text-center`}>
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mx-auto mb-2 sm:mb-3 text-blue-500" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">10+</h3>
                <p className={theme === 'dark' ? 'text-gray-400 text-xs sm:text-sm' : 'text-gray-600 text-xs sm:text-sm'}>Technologies Used</p>
              </div>

            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

              {projects.map((project, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-xl overflow-hidden transition-all group`}
                >

                  {/* Project Image */}
                  <div className="w-full h-80 sm:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">

                    {/* Title */}
                    <h2 className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-2 group-hover:text-orange-500 transition-colors`}>
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base`}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">

                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>

                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>

                    </div>

                    {/* Features */}
                    <div className="mb-4 sm:mb-6">

                      <h3 className={`text-xs sm:text-sm font-semibold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Key Features:
                      </h3>

                      <ul className={`text-xs sm:text-sm space-y-1 sm:space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>

                        {project.features.slice(0, 3).map((feature, idx) => (

                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-orange-500 mt-0.5">â¢</span>
                            <span>{feature}</span>
                          </li>

                        ))}

                      </ul>

                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">

                      {project.tech.map((tech) => (

                        <span
                          key={tech}
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-700'} border`}
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-800">

                      <a
                        href={project.demo}
                        className={`inline-flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        Live Demo
                      </a>

                      {project.appStore && (
                        <a
                          href={project.appStore}
                          className={`inline-flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          App Store
                        </a>
                      )}

                      {project.admin && (
                        <a
                          href={project.admin}
                          className={`inline-flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          Admin Panel
                        </a>
                      )}

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
