import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projectDetails } from "../data/projectDetails";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Projects = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const myGithub = "https://github.com/karanupd12";
  const totalPages = Math.ceil(projectDetails.length / 3);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleNavigation = (direction) => {
    if (scrollRef.current) {
      const newIndex =
        direction === "left"
          ? Math.max(0, activeIndex - 1)
          : Math.min(totalPages - 1, activeIndex + 1);

      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const goToPage = (index) => {
    setActiveIndex(index);
    scrollRef.current?.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const ProjectCard = ({ project, index, isMobile }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`${
        isMobile ? "w-full" : "flex-1"
      } group rounded-2xl overflow-hidden  transition-all duration-500 bg-neutral-800/75 shadow-lg hover:shadow-xl border border-gray-800/30`}
    >
      {/* Project Image */}
      <div className={`relative overflow-hidden ${isMobile ? "h-48" : "h-56"}`}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Genre Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-blue-500/30 shadow-lg">
            {project.genre}
          </span>
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
          <Link
            href={project.github || myGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className={`${isMobile ? "p-6" : "p-7"} space-y-4`}>
        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.name}
        </h3>

        {/* Project Description */}
        <p className={`text-gray-300 leading-relaxed text-sm sm:text-base ${
          !isMobile && "min-h-[80px]"
        }`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1.5 bg-gray-800/60 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-xl border border-gray-700/40 hover:border-gray-600/60 hover:bg-gray-700/60 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
          {/* Live Demo */}
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/demo flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-medium">Live Demo</span>
            </div>
            <FaExternalLinkAlt className="w-3 h-3 opacity-70 group-hover/demo:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Source Code Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={project.github || myGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="group/code inline-flex items-center gap-2 px-4 py-2.5 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-xl hover:bg-gray-700/80 hover:border-gray-600/60 hover:text-white transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              <span>Source</span>
              <FaGithub className="w-4 h-4 transition-transform duration-300 group-hover/code:scale-110" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
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
              Projects
            </span>{" "}
            <span className="text-neutral-200">That Deliver</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-neutral-300 max-w-xl mx-auto text-base md:text-lg font-light">
            Building practical and scalable solutions across web2 and web3 ecosystems.
          </p>
        </motion.div>

        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-8">
          {projectDetails.map((project, index) => (
            <ProjectCard
              key={`mobile-${index}`}
              project={project}
              index={index}
              isMobile={true}
            />
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden lg:block">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavigation("left")}
                disabled={activeIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-20 p-4 rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 ${
                  activeIndex === 0
                    ? "bg-gray-800/40 border-gray-800/40 text-gray-600 cursor-not-allowed"
                    : "bg-[#0f0f0f]/80 border-gray-700/50 text-white hover:bg-blue-600/80 hover:border-blue-500/50 hover:shadow-blue-600/20"
                }`}
                aria-label="Previous projects"
              >
                <MdKeyboardArrowLeft className="text-2xl" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavigation("right")}
                disabled={activeIndex === totalPages - 1}
                className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-20 p-4 rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 ${
                  activeIndex === totalPages - 1
                    ? "bg-gray-800/40 border-gray-800/40 text-gray-600 cursor-not-allowed"
                    : "bg-[#0f0f0f]/80 border-gray-700/50 text-white hover:bg-blue-600/80 hover:border-blue-500/50 hover:shadow-blue-600/20"
                }`}
                aria-label="Next projects"
              >
                <MdKeyboardArrowRight className="text-2xl" />
              </motion.button>
            </>
          )}

          {/* Projects Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex-none w-full flex space-x-8 snap-start"
                style={{ scrollSnapAlign: "start" }}
              >
                {projectDetails
                  .slice(pageIndex * 2, (pageIndex + 1) * 2)
                  .map((project, index) => (
                    <ProjectCard
                      key={pageIndex * 2 + index}
                      project={project}
                      index={index}
                      isMobile={false}
                    />
                  ))}
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-3 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToPage(index)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 h-2 bg-blue-600"
                      : "w-2 h-2 bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
