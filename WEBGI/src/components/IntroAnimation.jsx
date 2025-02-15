import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import TrueFocus from "./TrueFocus";
import logo from "../assets/Logo.jpg"; // Import the logo
import "../styles/gradient.css"; // Import the gradient animation CSS

const IntroAnimation = ({ onComplete }) => {
  const text = "WebGi";
  const text1 = ["Web Global Innovation", "& Services"];
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
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{
            opacity: 1,
            scale: 1.1,
            rotate: 0,
            transition: { duration: 3, ease: "easeOut" },
          }}
          whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, scale: 0.5, rotate: -10, transition: { duration: 0.5 } }}
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

      {/* Web Global Innovation & Services */}
      <motion.div className="text-4xl font-semibold text-white mt-4">
        <TrueFocus
          sentence={text1.join(" ")}
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={0.5}
          pauseBetweenAnimations={0.5}
        />
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
