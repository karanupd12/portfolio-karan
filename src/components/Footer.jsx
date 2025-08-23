import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";
import footerDetails from "../data/footerDetails";

const Footer = () => {
  const { socialLinks, navigationLinks, contactInfo, collaboration, copyright } =
    footerDetails;

  const techIcons = [
    { Icon: SiNextdotjs, label: "Next.js", color: "text-white" },
    { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-blue-400" },
    { Icon: SiFramer, label: "Framer Motion", color: "text-violet-500" },
  ];

  return (
    <footer id="footer" className="bg-neutral-800 text-white border-t border-neutral-700">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start gap-6 md:w-2/3">
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href, color, ariaLabel }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className={`text-2xl text-color- hover:opacity-80 transition`}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
              {navigationLinks.map(({ label, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="text-neutral-300 text-sm hover:text-blue-400 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <p className="text-neutral-300 text-sm">
              Get in touch —{" "}
              <a
                href={contactInfo.emailLink}
                className="text-blue-400 hover:text-blue-300"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/3 md:max-w-xs">
            <div className="flex items-center text-blue-400 mb-2">
              <collaboration.icon className="mr-2" />
              <h3 className="text-sm font-medium">{collaboration.title}</h3>
            </div>
            <p className="text-neutral-300 text-sm mb-3 leading-relaxed">
              {collaboration.description}
            </p>
            <Link
              href={collaboration.linkHref}
              className="flex items-center text-blue-400 hover:text-blue-300 text-xs font-medium"
            >
              {collaboration.linkText}
              <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-neutral-700 text-center">
          {/* Tech Stack */}
          <div className="flex justify-center items-center space-x-3 mb-2">
            <span className="text-xs text-neutral-400">Built with</span>
            {techIcons.map(({ Icon, label, color }, idx) => (
              <div key={idx} className={`${color} text-lg`} title={label}>
                <Icon />
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-neutral-300">
            &copy; {new Date().getFullYear()} {copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
