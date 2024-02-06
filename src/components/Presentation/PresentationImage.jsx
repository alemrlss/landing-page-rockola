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
      className="text-white text-4xl w-full sm:w-1/2 flex flex-col items-center justify-center space-y-4 mt-8 sm:mt-0"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/company.png"
        alt="logo image"
        className="w-64 sm:w-96"
        draggable={false}
      />
    </motion.div>
  );
}

export default PresentationImage;
