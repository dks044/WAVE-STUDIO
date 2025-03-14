"use client";

import { motion } from "framer-motion";

const WaveBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full wave one "
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 10, -10, 0],
        borderRadius: ["40%", "50%", "40%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};

export default WaveBackground;
