import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div>
      {/* Animated Menu Button */}
      <button className="lg:hidden z-[999] relative w-10 h-10 flex flex-col justify-center items-center" onClick={toggleDrawer}>
        <motion.span
          className="bg-white w-6 h-0.5 rounded block"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="bg-white w-6 h-0.5 rounded block my-1"
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="bg-white w-6 h-0.5 rounded block"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </button>

      {/* Backdrop for better UX */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-[998]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={toggleDrawer} // Clicking outside closes the menu
        />
      )}

      <motion.div
        className="fixed left-0 top-0 w-3/4 h-full bg-[#18181A] text-white p-6 pb-20 z-[999] shadow-lg"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto transition-transform text-white hover:text-gray-300 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <Icon size={17} className="text-white hover:text-gray-300" />
                        {name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
