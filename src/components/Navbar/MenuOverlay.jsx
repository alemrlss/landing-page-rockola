import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [controls]);

  const handleClose = async () => {
    await controls.start({ opacity: 0, scale: 0.8 });
    onClose();
  };

  return (
    <motion.ul
      className="flex flex-col py-4 items-center bg-[#121212]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={handleClose}
    >
      {links.map((link, index) => (
        <motion.li key={index} whileHover={{ scale: 1.1 }}>
          <NavLink href={link.path} title={link.title} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MenuOverlay;
