'use client'

import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Add Web3Forms access key
    formData.append("access_key", "f545d474-310d-476b-b93f-451f39cd1279");

    // Add email recipient
    formData.append("subject", "Contact from Portfolio Website");
    formData.append("from_name", formData.get('name') as string);
    formData.append("email", formData.get('email') as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage("Success! Your message has been sent.");
        form.reset();

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 3000);
      } else {
        setSubmitMessage("Error: " + (data.message || "Failed to send message"));

        // Clear error message after 3 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 3000);
      }

    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage("Something went wrong. Please try again.");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Header />
        <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-center">Get In Touch</h1>

        <main className="flex min-h-screen w-full max-w-7xl mx-auto py-10 px-6 md:px-16 flex-col md:flex-row gap-10">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <p className="text-center">Let&apos;s discuss your project, I&apos;m always open to new opportunities and collaborations.</p>
            <div className="flex flex-col gap-4">
              <motion.form
                id="form"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                      }`}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                      }`}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    className={`px-4 py-2 rounded-md h-32 resize-none ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                      }`}
                    required
                  />
                  <button
                    type="submit"
                    className="text-white px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                  {submitMessage && (
                    <div className={`p-3 rounded-md text-sm ${submitMessage.includes('Success')
                      ? (theme === 'dark' ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
                      : (theme === 'dark' ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
                      }`}>
                      {submitMessage}
                    </div>
                  )}
                </div>
              </motion.form>
              <div className="flex flex-col gap-2">
                <p>Or reach out to me at:</p>
                <p>Email: dollytaide2002@gmail.com</p>
                <p>Phone: +91 6232731740</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            <Image src="/images/profileLogo.png" alt="Contact" className="w-full h-auto" width={500} height={500} />
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
}
