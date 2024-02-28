import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function PresentationImage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="w-full pt-10 flex items-center justify-center px-4 sm:px-0"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.3 }}
    >
     <img
  src="/disco.png"
  alt="logo image"
  className="w-full h-full"
  draggable={false}
  style={{ maxWidth: "100%", height: "auto" }}
/>

    </motion.div>
  );
}

export default PresentationImage;
