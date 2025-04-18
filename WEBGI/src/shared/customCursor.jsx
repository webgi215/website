import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const innerSettings = {
  damping: 300,
  stiffness: 1000,
};

const outerSettings = {
  damping: 100,
  stiffness: 1000,
};

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Inner cursor has fast, snappy motion
  const springXInner = useSpring(mouseX, innerSettings);
  const springYInner = useSpring(mouseY, innerSettings);

  // Outer ring moves slower, creating a trailing effect
  const springXOuter = useSpring(mouseX, outerSettings);
  const springYOuter = useSpring(mouseY, outerSettings);

  const [isVisible, setIsVisible] = useState(false);
  const [hideOnLink, setHideOnLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect if hovering over <Link> elements
    const handleLinkEnter = () => setHideOnLink(true);
    const handleLinkLeave = () => setHideOnLink(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Attach events to all <Link> elements
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkEnter);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      // Clean up event listeners from links
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkEnter);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [mouseX, mouseY]);

  // Only show cursor when not hovering over <Link> elements
  return (
    isVisible &&
    !hideOnLink && (
      <>
        {/* Inner cursor - Dark Green */}
        <motion.div
          className="bg-purple-700"
          style={{
            x: springXInner,
            y: springYInner,
            width: 8,
            height: 8,
            borderRadius: "50%",
            position: "fixed",
            pointerEvents: "none",
            zIndex: 9999,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        {/* Outer ring - Dark Green Border */}
        <motion.div
          className="border border-white"
          style={{
            x: springXOuter,
            y: springYOuter,
            width: 40,
            height: 40,
            borderRadius: "50%",
            position: "fixed",
            pointerEvents: "none",
            zIndex: 9998,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </>
    )
  );
};

export default CustomCursor;
