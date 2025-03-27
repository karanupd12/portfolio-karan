import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCertificate, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { experienceDetails } from "../data/experienceDetails";

const Experience = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center text-white py-16 sm:py-20 px-4 md:px-8 relative overflow-hidden w-full"
    >
      {/* Subtle Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="w-full h-full bg-neutral-950" />
      </motion.div>

      <div className="w-full relative z-10 px-4 sm:px-8 md:px-16 lg:px-24">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                Work
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>{" "}
            <span className="text-neutral-200">Experience</span>
          </motion.h2>
          <motion.p
            className="text-neutral-300 max-w-xl mx-auto text-base md:text-lg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Professional experience, project roles and positions I've held over time
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[2px] bg-gradient-to-b from-transparent via-blue-300/30 to-transparent"></div>

          {experienceDetails.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="relative mb-12 sm:mb-16 last:mb-0 pl-10 sm:pl-16"
            >

              {/* Experience Card */}
              <div className="relative p-6 bg-neutral-800 backdrop-blur-sm border border-neutral-700/50 rounded-xl shadow-xl shadow-blue-900/10 max-w-4xl w-full">

                {/* Year */}
                <div className="absolute -left-16 sm:-left-24 top-0 text-blue-400 font-bold text-xs sm:text-sm bg-neutral-900/80 backdrop-blur-sm border border-blue-500/20 rounded-full py-1 px-2 sm:px-3 z-10">
                  {exp.duration.split(" - ")[0]}
                </div>

                {/*  Details */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {exp.role}
                </h3>
                <div className="text-blue-400 text-sm sm:text-base mb-3">
                  {exp.company}
                </div>
                <p className="text-neutral-300 text-sm sm:text-base mb-4">
                  {exp.description}
                </p>

                {/* Work Domain - techstack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-neutral-900 text-neutral-200 rounded-full text-xs hover:bg-blue-900/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Relevant link */}
                {exp.certificate && (
                  <Link
                    href={exp.certificate}
                    target="_blank"
                    className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-xs group/link"
                  >
                    <FaCertificate size={12} className="text-amber-400" />
                    <span className="group-hover/link:underline">
                      Checkout
                    </span>
                    <FaChevronRight
                      size={10}
                      className="group-hover/link:translate-x-0.5 transition-transform"
                    />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;