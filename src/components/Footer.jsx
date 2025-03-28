import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";
import footerDetails from "../data/footerDetails";


const Footer = () => {
  const { socialLinks, navigationLinks, contactInfo, collaboration, copyright } = footerDetails;

  // Tech stack icons
  const techIcons = [
    { Icon: SiNextdotjs, label: "Next.js", color: "text-white" },
    { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-blue-400" },
    { Icon: SiFramer, label: "Framer Motion", color: "text-violet-500" }
  ];

  return (
    <footer id="footer" className="bg-gradient-to-br from-neutral-950 to-neutral-800 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">

          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start md:w-2/3"
          >

            {/* Socials*/}
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map(
                ({ icon: Icon, href, color, ariaLabel }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-2xl ${color} transition-all duration-300`}
                  >
                    <Icon />
                  </motion.a>
                )
              )}
            </div>

            {/* Important nav links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 mb-8">
              {navigationLinks.map(({ label, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-neutral-300 text-sm font-medium hover:text-blue-400 
                    transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <motion.p
              className="text-neutral-300 text-sm mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in touch  —{" "}
              <a
                href={contactInfo.emailLink}
                className="text-blue-400 hover:text-blue-300"
              >
                {contactInfo.email}
              </a>
            </motion.p>
          </motion.div>

          {/* Collaboration with me*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-0 md:w-1/3 md:max-w-xs"
          >
            <div className="flex items-center text-blue-400 mb-2">
              <collaboration.icon className="mr-2" />
              <h3 className="text-m font-medium">{collaboration.title}</h3>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-2">
              {collaboration.description}
            </p>
            <Link
              href={collaboration.linkHref}
              className="group flex items-center text-blue-400 hover:text-blue-300 
                transition-colors duration-300 text-xs font-medium"
            >
              {collaboration.linkText}
              <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-4 border-t border-neutral-600 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col items-center">
            {/* Tech Stack Icons */}
            <motion.div
              className="flex items-center space-x-3 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-xs text-neutral-400">Built with </span>
              {techIcons.map(({ Icon, label, color }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${color} text-lg`}
                  title={label}
                >
                  <Icon />
                </motion.div>
              ))}
            </motion.div>

            {/* Copyright Text */}
            <p className="text-xs text-neutral-400">
              &copy; {new Date().getFullYear()} {copyright.text}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;