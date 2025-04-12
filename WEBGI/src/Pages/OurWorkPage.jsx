// src/pages/OurWorkPage.jsx
import React from "react";
// import Layout from "../components/Layout";
import { ourWorkContent } from "../Contents/OurWorkContents"; // Adjust the import path as necessary

const OurWorkPage = () => {
  return (
      <section className="px-6 py-12">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">Our Work</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
          Here are some projects we’ve crafted with love and tech mastery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ourWorkContent.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-900 text-white dark:bg-white dark:text-black p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-400 dark:text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default OurWorkPage;
