import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaChevronDown } from "react-icons/fa";
import { experienceDetails } from "../data/experienceDetails";
import { motion } from "framer-motion";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isAnyOpen = openIndex !== null;

  return (
    <section
      id="experience"
      className="w-full px-4 md:px-8 py-16 sm:py-20 text-white"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
            Work
          </span>{" "}
          <span className="text-neutral-200">Experience</span>
        </h2>
        <motion.div
          className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <p className="text-neutral-300 max-w-xl mx-auto text-base md:text-lg font-light">
          Project roles and Responsibilities.
        </p>
      </motion.div>

      {/* Folder List */}
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          isAnyOpen ? "mb-12" : "mb-0"
        }`}
      >
        {experienceDetails.map((exp, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border border-neutral-600/50 rounded-lg mb-6 transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-neutral-800 shadow-lg shadow-blue-900/20"
                  : "bg-neutral-800/60"
              }`}
            >
              {/* Folder Header */}
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-neutral-800 transition-colors"
              >
                {/* Left: Icon + Role */}
                <div className="flex items-center space-x-3">
                  {isOpen ? (
                    <FaFolderOpen className="text-blue-400 text-lg" />
                  ) : (
                    <FaFolder className="text-yellow-400 text-lg" />
                  )}
                  <span className="text-sm sm:text-base font-semibold text-neutral-100">
                    {exp.role}
                  </span>
                </div>

                {/* Right: Duration + Arrow */}
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-neutral-400 whitespace-nowrap">
                    {exp.duration}
                  </span>
                  <FaChevronDown
                    className={`text-neutral-400 transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expanded Folder Content */}
              {isOpen && (
                <div className="px-8 py-6 border-t border-neutral-700/50 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-neutral-300 mb-6">{exp.description}</p>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-neutral-200 font-semibold mb-3">
                      Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-200 hover:bg-blue-900/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
