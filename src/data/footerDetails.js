import {
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaMedium,
    FaEnvelope,
    FaCode,
  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
  
  const footerDetails = {
    // Social media links
    socialLinks: [
      {
        icon: FaLinkedin,
        href: "https://linkedin.com/in/karanupd12",
        color: "text-blue-400",
        ariaLabel: "LinkedIn Profile",
      },
      {
        icon: FaInstagram,
        href: "https://instagram.com/krn_0twelve",
        color: "text-pink-500",
        ariaLabel: "Instagram Profile",
      },
      {
        icon: FaTwitter,
        href: "https://twitter.com/karanupd012",
        color: "text-blue-400",
        ariaLabel: "Twitter Profile",
      },
      {
        icon: FaGithub,
        href: "https://github.com/karanupd12",
        color: "text-neutral-300",
        ariaLabel: "GitHub Profile",
      },
      {
        icon: FaMedium,
        href: "https://medium.com/@karanupd12",
        color: "text-violet-500",
        ariaLabel: "Medium Profile",
      },
      {
        icon: SiLeetcode,
        href: "https://leetcode.com/u/karanupd12/",
        color: "text-orange-500",
        arialabel: "LeetCode",
      },
      
    ],
  
    // Navigation links
    navigationLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
    ],
  
    // Contact information
    contactInfo: {
      email: "karanupd12@gmail.com",
      emailLink: "mailto:karanupd12@gmail.com",
    },
  
    // Collaboration 
    collaboration: {
      icon: FaCode,
      title: "Open For Collaboration",
      description: "BlockTalk is currently open for developers. Join me in improving this DApp project with Next.js.",
      linkText: "View Project",
      linkHref: "#projects",
    },
  
    // Copyright information
    copyright: {
      text: "Karan Upadhyay. All Rights Reserved.",
    }
  };
  
  export default footerDetails;