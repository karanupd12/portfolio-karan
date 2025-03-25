import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Neutral-950 base with Framer Motion */}
      <motion.div
        className="absolute inset-0 bg-neutral-950"
        animate={{
          opacity: [0.9, 1, 0.9],
          scale: [1.02, 1, 1.02],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>
    </div>
  );
};

export default AnimatedBackground;
