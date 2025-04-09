import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-neutral-950 text-white dark:bg-white dark:text-black px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1: Logo & Description */}
        <div className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-400 mb-2">WEBGI</h2>
          <p className="text-gray-400 dark:text-gray-700">
            Powering digital experiences with innovation and precision. Let’s
            build the future together.
          </p>
        </div>

        {/* Card 2: Quick Links */}
        <div className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 dark:text-gray-700">
            <li>
              <a href="#" className="hover:text-purple-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Card 3: Social Icons */}
        <div className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#">
              <FaFacebookF className="hover:text-purple-400" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-purple-400" />
            </a>
            <a href="#">
              <FaLinkedinIn className="hover:text-purple-400" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-purple-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-gray-300 mt-12 pt-6 text-center text-sm text-gray-500 dark:text-gray-600">
        &copy; {new Date().getFullYear()} Web Global Innovation & Services. All
        rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
