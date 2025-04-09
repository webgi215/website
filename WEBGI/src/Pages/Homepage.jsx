// src/Pages/HomePage.jsx

import React from "react";
import Logo from "../assets/Logo1.png";
import { Menus } from "../utils";
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
// ⬇️ Import any other components or icons used inside WebGIContent section

import { motion } from "framer-motion";
import { ShieldCheckIcon, SparklesIcon, ChartBarSquareIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import WebGIContent from "./WebGIContent";

const HomePage = () => {
  return (
    <div>
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 -z-10 w-full h-full min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />


      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#18181A] flex items-center z-50">
        <nav className="max-w-30xl w-full mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-x-2 flex-shrink-0">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <h3 className="text-lg font-bold text-white">WEBGI</h3>
          </div>
          <div className="hidden lg:flex items-center gap-x-6 ml-auto">
            <ul className="flex items-center gap-x-6">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} />
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </nav>
      </header>

      {/* WebGI Content Section */}
      <div className="pt-32 px-4 text-white">
      <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-purple-400">Web Global Innovation</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Powering Digital Experiences with Creativity and Code. Join us on a journey of innovation, design, and development.
          </p>
        </motion.section>
       <WebGIContent />
        
        </div>
      </div>
    
  );
};

export default HomePage;
