import { motion } from "framer-motion";
import BlobBackground from "../components/BlobBackground"
import { FaRocket, FaPaintBrush, FaChartBar, FaShieldAlt } from "react-icons/fa";

const contentData = [
  {
    icon: <FaPaintBrush size={30} className="text-pink-400" />,
    title: "Creative Design",
    desc: "We build stunning and functional UIs with modern tech.",
  },
  {
    icon: <FaRocket size={30} className="text-purple-400" />,
    title: "Startup Launch",
    desc: "We help turn your product idea into a working MVP fast.",
  },
  {
    icon: <FaChartBar size={30} className="text-indigo-400" />,
    title: "Growth Analytics",
    desc: "Track, analyze and optimize your product with built-in analytics.",
  },
  {
    icon: <FaShieldAlt size={30} className="text-blue-400" />,
    title: "Secure Solutions",
    desc: "Your data and platform are secured with modern protocols.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WebGIContent = () => {
  return (
    <div className="relative min-h-screen px-4 py-24 sm:px-10 lg:px-24  text-white overflow-hidden">
      <BlobBackground />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        What We Offer at <span className="text-violet-500">WEBGI</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contentData.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col gap-3"
          >
            <div>{item.icon}</div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebGIContent;
