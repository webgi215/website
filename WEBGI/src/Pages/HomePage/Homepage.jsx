import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Homepage extends Component {
  // Header component: displays your site title or branding separate from the navbar
  static Header = () => (
    <header className="bg-gray-100 py-4 px-6">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Web Global Innovation & Services
        </h1>
      </div>
    </header>
  );

  // Hero section with responsive (mobile and desktop) variations
  static Hero = () => (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-white"
      style={{ background: "linear-gradient(to right, #3B82F6, #8B5CF6)" }}
    >
      {/* Mobile View */}
      <div className="block md:hidden">
        <motion.h2 
          className="text-3xl font-serif text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our World of Innovation
        </motion.h2>
        <motion.p
          className="mt-4 text-base text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We deliver creative and impactful digital solutions.
        </motion.p>
        <motion.button
          className="mt-8 bg-white text-blue-500 px-4 py-2 rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Get Started
        </motion.button>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <motion.h2 
          className="text-6xl font-serif text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our World of Innovation
        </motion.h2>
        <motion.p
          className="mt-4 text-2xl text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We deliver creative and impactful digital solutions to elevate your brand and business.
        </motion.p>
        <motion.button
          className="mt-8 bg-white text-blue-500 px-8 py-3 rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );

  // Footer section with responsive text sizes
  static Footer = () => (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Web Global Innovation & Services. All rights reserved.
        </p>
      </div>
    </footer>
  );

  render() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* The header content (site title/branding) */}
        <Homepage.Header />
        <main className="flex-grow">
          {/* The hero section */}
          <Homepage.Hero />
        </main>
        {/* The footer */}
        <Homepage.Footer />
      </div>
    );
  }
}

export default Homepage;
