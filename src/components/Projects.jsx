import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projectDetails } from "../data/projectDetails";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
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
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeIn}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${
        isMobile ? "w-full" : "flex-1"
      } bg-white/10 rounded-xl border border-neutral-800 shadow-lg hover:shadow-xl hover:border-blue-900 transition-all duration-300`}
    >
      <div
        className={`overflow-hidden rounded-t-xl relative ${
          isMobile ? "h-48" : "h-56"
        }`}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-contain sm:object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
        />
        <span className="absolute top-3 right-3 text-black bg-violet-400 px-3 py-1 rounded-full text-xs font-medium">
          {project.genre}
        </span>
      </div>

      <div className={`${isMobile ? "p-5" : "p-6"}`}>
        <h3 className="text-2xl font-bold mb-3 text-white">{project.name}</h3>
        <p
          className={`text-neutral-300 leading-relaxed mb-5 ${
            !isMobile && "min-h-[80px]"
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-neutral-900 text-white text-xs px-2.5 py-1 rounded-md font-thin"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center hover:text-blue-400 transition-all duration-200"
            >
              <span className="font-medium text-sm">
                {isMobile ? "Try out → " : "Checkout : "}
              </span>
              <span className="ml-2 text-xs bg-blue-900 rounded-full px-2 py-1 inline-flex items-center">
                <span className="relative mr-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Live
              </span>
            </a>
          </div>

          <Link
            href={project.github || myGithub}
            target="_blank"
            className="p-2 text-neutral-300 hover:text-white bg-neutral-800 hover:bg-blue-900 rounded-lg transition-colors duration-200"
          >
            <FaGithub className="text-lg" />
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div id="projects" className="min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
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
                Projects
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>{" "}
            <span className="text-neutral-200">That Delivers</span>
          </motion.h2>
          <motion.p
            className="text-neutral-300 max-w-xl mx-auto text-base md:text-lg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Building innovative and scalable solutions across Web2 and Web3
            ecosystems
          </motion.p>
        </motion.div>

        <div className="block md:hidden space-y-8">
          {projectDetails.map((project, index) => (
            <ProjectCard
              key={`mobile-${index}`}
              project={project}
              index={index}
              isMobile={true}
            />
          ))}
        </div>

        <div className="relative hidden md:block">
          {totalPages > 1 && (
            <>
              <button
                onClick={() => handleNavigation("left")}
                disabled={activeIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 bg-neutral-800 rounded-full p-2 text-white shadow-lg transition-all duration-200 ${
                  activeIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
                aria-label="Previous projects"
              >
                <MdKeyboardArrowLeft className="text-xl" />
              </button>

              <button
                onClick={() => handleNavigation("right")}
                disabled={activeIndex === totalPages - 1}
                className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 bg-neutral-800 rounded-full p-2 text-white shadow-lg transition-all duration-200 ${
                  activeIndex === totalPages - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
                aria-label="Next projects"
              >
                <MdKeyboardArrowRight className="text-xl" />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex-none w-full flex space-x-6 snap-start"
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

          {totalPages > 1 && (
            <div className="flex justify-center space-x-2 mt-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-6 bg-blue-500"
                      : "w-2 bg-neutral-700"
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
    </div>
  );
};

export default Projects;