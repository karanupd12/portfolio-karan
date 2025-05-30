import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaMedium,
  FaGraduationCap,
  FaChevronDown,
  FaChevronUp,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import { educationDetails, aboutMe } from "../data/about";

const About = () => {
  const [selectedCoursework, setSelectedCoursework] = useState(null);

  const toggleCoursework = (index) => {
    setSelectedCoursework(selectedCoursework === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="text-white px-4 md:px-8 md:py-16"
    >
      {/* About Section */}
      <div id="about" className=" min-h-screen grid md:grid-cols-2 gap-12 items-start">
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 rounded-2xl p-8 shadow-xl border border-neutral-950 bg-neutral-800/80"
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaCode className="text-3xl text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Who am I?
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">{aboutMe[0].me1}</p>
            <p className="text-neutral-300 leading-relaxed">{aboutMe[0].me2}</p>
            <p className="text-neutral-300 leading-relaxed">{aboutMe[0].me3}</p>
          </div>

          {/* Medium and LinkedIn Links */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link
              href="https://medium.com/@karanupd12"
              target="_blank"
              className="group flex items-center justify-center space-x-3 px-6 py-3 
                bg-blue-600 text-white rounded-full
                hover:bg-blue-700 transition-all duration-300 
                transform hover:-translate-y-1 shadow-lg"
            >
              <FaMedium className="w-5 h-5" />
              <span className="font-medium">Read My Thoughts</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/karanupd12/"
              target="_blank"
              className="group flex items-center justify-center space-x-3 px-6 py-3 
                border-2 border-neutral-700 text-neutral-300 rounded-full 
                hover:bg-neutral-800 hover:text-white transition-all duration-300
                transform hover:-translate-y-1"
            >
              <FaLinkedinIn className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Connect with me</span>
            </Link>
          </div>
        </motion.div>

        {/* Academic Journey */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 rounded-2xl p-8 shadow-xl border bg-neutral-800/80 border-neutral-900"
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaGraduationCap className="text-4xl text-blue-400" />
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Academic Journey
            </h3>
          </div>

          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800"
            >
              <div className="flex items-center p-4 space-x-4 border-b border-neutral-600 bg-neutral-700/80">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-14 h-14 rounded-full object-cover shadow-md border border-neutral-600"
                />
                <div>
                  <p className="text-base font-semibold text-white">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {edu.degrees.map((degree, idx) => (
                <div
                  key={idx}
                  className="p-4 space-y-2 border-b border-neutral-600"
                >
                  <h3 className="text-base font-semibold text-blue-400">
                    {degree.name}
                  </h3>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <p>{degree.duration}</p>
                    <p>{degree.spec}</p>
                    <p className="font-semibold">Score - {degree.score}</p>
                  </div>
                </div>
              ))}

              {/* Coursework */}
              <div>
                <button
                  onClick={() => toggleCoursework(index)}
                  className="w-full flex items-center justify-between p-4 
                    text-sm text-neutral-300 hover:bg-neutral-700/50 
                    transition-colors duration-300 group"
                >
                  <span className="font-medium">View Coursework</span>
                  {selectedCoursework === index ? (
                    <FaChevronUp className="text-blue-400 group-hover:text-blue-300" />
                  ) : (
                    <FaChevronDown className="text-blue-400 group-hover:text-blue-300" />
                  )}
                </button>

                <AnimatePresence>
                  {selectedCoursework === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeInOut",
                        },
                      }}
                      className="bg-neutral-900 p-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.coursework.map((course, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 p-2 rounded bg-neutral-800 hover:bg-neutral-600 transition-colors duration-200"
                          >
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            <span className="text-neutral-300 text-sm">
                              {course.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;