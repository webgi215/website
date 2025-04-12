// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ChevronDown, X } from "lucide-react";
// import { motion } from "framer-motion";

// // Navbar Component (Combined Mobile + Desktop)
// export default function Navbar({ Menus = [] }) {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
//   const toggleSubMenu = (index) =>
//     setExpandedMobileMenu(expandedMobileMenu === index ? null : index);

//   const menuVariants = {
//     open: { x: 0 },
//     closed: { x: "-100%" }
//   };

//   const subMenuVariants = {
//     open: { height: "auto", opacity: 1 },
//     closed: { height: 0, opacity: 0 }
//   };

//   const subMenuAnimate = {
//     enter: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.2, ease: "easeOut" },
//       display: "block"
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       transition: { duration: 0.15 },
//       transitionEnd: { display: "none" }
//     }
//   };

//   return (
//     <nav className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white">
//       {/* Logo */}
//       <Link to="/" className="text-2xl font-bold">
//         WEBGI
//       </Link>

//       {/* Mobile Toggle Button */}
//       <button
//         onClick={toggleMobileMenu}
//         className="lg:hidden p-2 text-white focus:outline-none"
//       >
//         {isMobileOpen ? (
//           <X className="w-6 h-6" />
//         ) : (
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         )}
//       </button>

//       {/* Desktop Menu */}
//       <ul className="hidden lg:flex space-x-6">
//         {Menus.map((menu, index) => {
//           const hasSubMenu = menu.subMenu?.length > 0;
//           return (
//             <motion.li
//               key={`desktop-${index}`}
//               className="relative"
//               onHoverStart={() => setHoveredIndex(index)}
//               onHoverEnd={() => setHoveredIndex(null)}
//             >
//               <div className="px-4 py-2">
//                 {menu.path && !hasSubMenu ? (
//                   <Link
//                     to={menu.path}
//                     className="text-gray-100 hover:text-white font-medium transition-colors"
//                   >
//                     {menu.name}
//                   </Link>
//                 ) : (
//                   <div className="flex items-center gap-1 cursor-pointer text-gray-100 hover:text-white font-medium">
//                     <span>{menu.name}</span>
//                     <ChevronDown
//                       className={`w-4 h-4 mt-0.5 transition-transform ${
//                         hoveredIndex === index ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>
//                 )}
//               </div>

//               {hasSubMenu && (
//                 <motion.div
//                   className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-xl z-50 overflow-hidden"
//                   initial="exit"
//                   animate={hoveredIndex === index ? "enter" : "exit"}
//                   variants={subMenuAnimate}
//                 >
//                   <div className="p-4">
//                     {menu.subMenuHeading?.map((heading, i) => (
//                       <h4
//                         key={i}
//                         className="text-xs font-semibold text-gray-500 mb-2"
//                       >
//                         {heading}
//                       </h4>
//                     ))}
//                     <div className="space-y-2">
//                       {menu.subMenu.map((item, i) => (
//                         <Link
//                           key={i}
//                           to={item.path || "#"}
//                           className="flex items-start p-2 rounded hover:bg-gray-50 transition-colors"
//                         >
//                           {item.icon && (
//                             <div className="p-1.5 mr-3 bg-gray-100 rounded-md">
//                               <item.icon className="w-4 h-4 text-gray-700" />
//                             </div>
//                           )}
//                           <div>
//                             <p className="font-medium text-gray-900">
//                               {item.name}
//                             </p>
//                             {item.desc && (
//                               <p className="text-xs text-gray-500">
//                                 {item.desc}
//                               </p>
//                             )}
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.li>
//           );
//         })}
//       </ul>

//       {/* Mobile Menu */}
//       {isMobileOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.5 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black z-40"
//             onClick={toggleMobileMenu}
//           />
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             transition={{ type: "tween" }}
//             className="fixed top-0 left-0 w-4/5 h-full bg-gray-800 text-white z-50 shadow-xl"
//           >
//             <div className="p-4 h-full flex flex-col">
//               <div className="flex justify-between items-center mb-8">
//                 <Link
//                   to="/"
//                   className="text-xl font-bold text-white"
//                   onClick={toggleMobileMenu}
//                 >
//                   WEBGI
//                 </Link>
//                 <button
//                   onClick={toggleMobileMenu}
//                   className="p-2 text-gray-300 hover:text-white"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>

//               <nav className="flex-1 overflow-y-auto">
//                 <ul className="space-y-2">
//                   {Menus.map((menu, index) => (
//                     <li
//                       key={`mobile-${index}`}
//                       className="border-b border-gray-700"
//                     >
//                       <div className="flex flex-col">
//                         {menu.subMenu?.length > 0 ? (
//                           <>
//                             <button
//                               className="flex justify-between items-center py-3 px-4 w-full text-left"
//                               onClick={() => toggleSubMenu(index)}
//                             >
//                               <span className="font-medium">{menu.name}</span>
//                               <ChevronDown
//                                 className={`w-5 h-5 transition-transform ${
//                                   expandedMobileMenu === index
//                                     ? "rotate-180"
//                                     : ""
//                                 }`}
//                               />
//                             </button>
//                             <motion.div
//                               initial="closed"
//                               animate={
//                                 expandedMobileMenu === index ? "open" : "closed"
//                               }
//                               variants={subMenuVariants}
//                               className="overflow-hidden"
//                             >
//                               <div className="pb-2 pl-6 pr-4 space-y-3">
//                                 {menu.subMenu.map((item, i) => (
//                                   <Link
//                                     key={i}
//                                     to={item.path}
//                                     className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors"
//                                     onClick={toggleMobileMenu}
//                                   >
//                                     <div className="flex items-center">
//                                       {item.icon && (
//                                         <item.icon className="w-4 h-4 mr-3" />
//                                       )}
//                                       <div>
//                                         <p>{item.name}</p>
//                                         {item.desc && (
//                                           <p className="text-xs text-gray-400">
//                                             {item.desc}
//                                           </p>
//                                         )}
//                                       </div>
//                                     </div>
//                                   </Link>
//                                 ))}
//                               </div>
//                             </motion.div>
//                           </>
//                         ) : (
//                           <Link
//                             to={menu.path}
//                             className="py-3 px-4 font-medium hover:bg-gray-700 rounded transition-colors"
//                             onClick={toggleMobileMenu}
//                           >
//                             {menu.name}
//                           </Link>
//                         )}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </nav>
//   );
// }
