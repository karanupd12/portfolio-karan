import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Futuristic Light Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800/70 to-neutral-900"
      ></motion.div>
    </div>
  );
};

export default AnimatedBackground;
