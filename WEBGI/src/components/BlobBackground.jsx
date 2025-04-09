import { motion } from "framer-motion";

const BlobBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-500 opacity-30 blur-3xl rounded-full"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ left: "-200px", top: "-200px" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-pink-500 opacity-20 blur-3xl rounded-full"
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 100, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ right: "-150px", bottom: "-150px" }}
      />
    </div>
  );
};

export default BlobBackground;
