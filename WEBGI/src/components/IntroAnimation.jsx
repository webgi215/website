import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import GradientText from "./GradientText";
import logo from "../assets/Logo.jpg"; // Import the logo
import "../styles/gradient.css"; // Import the gradient animation CSS

const IntroAnimation = ({ onComplete }) => {
  const text = "WebGi";
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 4500);
    const timer = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const fadeOutVariants = {
    initial: { opacity: 1 },
    fadeOut: { opacity: 0, transition: { duration: 0.5 } },
  };

  const memoizedText = useMemo(() => Array.from(text), [text]);

  return (
    <motion.div
      className="flex flex-col h-screen items-center justify-center bg-black text-center relative"
      initial="initial"
      animate={fadeOut ? "fadeOut" : "initial"}
      variants={fadeOutVariants}
    >
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 border-8 border-transparent rounded-lg gradient-border"></div>

      {/* WebGi Logo - Positioned at the Top */}
      <motion.div className="p-[2px] bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-4">
  <motion.img
    src={logo}
    alt="WebGi Logo"
    className="w-20 h-20 rounded-full bg-black p-1 drop-shadow-lg"
    initial={{ opacity: 0, y: -100, scale: 0.5, rotate: -10 }} // Starts above
    animate={{
      opacity: 1,
      y: [0, -10], // Moves slightly up and down
      scale: 1.1,
      rotate: 0,
    }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity, // Makes it bounce forever
      repeatType: "reverse", // Smooth up-down bounce
    }}
    whileHover={{
      scale: 1.2,
      rotate: 5,
      transition: { duration: 1 },
    }}
    exit={{
      opacity: 0,
      scale: 0.5,
      rotate: -10,
      y: -100, // Moves back up on exit
      transition: { duration: 0.5 },
    }}
  />
</motion.div>


      {/* WebGi Text with Animated Red-Black Gradient */}
      <motion.div className="animated-bg text-6xl font-bold p-6 border-4 border-transparent text-black rounded-xl">
        {memoizedText.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Web Global Innovation & Services with Gradient Text */}
      <motion.div
  className="text-4xl font-serif mt-4 flex space-x-2"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Delay each letter by 0.1s
      },
    },
  }}
>
  {Array.from("Web  Global  Innovation  &  Services").map((char, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20 }, // Start invisible and lower
        visible: { opacity: 1, y: 0 }, // Appear smoothly
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <GradientText
        colors={["#ff4040", "#ff7940", "#ff4040", "#ff7940", "#ff4040"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        {char}
      </GradientText>
    </motion.span>
  ))}
</motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
