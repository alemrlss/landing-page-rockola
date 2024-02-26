import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./style.css";

function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const imageVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants2 = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      id="about"
      className="flex justify-center items-center flex-col pt-28 "
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <h2 className="text-white text-4xl mb-4">Sobre Nosotros</h2>
      <motion.div className="flex flex-col md:flex-row items-center">
        <motion.p
          className="text-white text-2xl md:w-1/2 mb-6 md:mb-0"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          porro. Quia assumenda ducimus quisquam inventore optio! Aliquid, earum
          obcaecati rerum minima eos iste tenetur sapiente delectus possimus
          excepturi harum nihil.
        </motion.p>
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={imageVariants2}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src="pc.png"
            alt="About Us Image"
            className=" rounded-lg"
            initial="initial"
            animate={inView ? "visible" : "hidden"}
          />
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={imageVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src="pc2.png"
            alt="About Us Image"
            className="rounded-lg"
            initial="initial"
            animate={inView ? "visible" : "hidden"}
          />
        </motion.div>
        <motion.p
          className="text-white text-2xl md:w-1/2 mb-6 md:mb-0"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim odit
          iste minima architecto quibusdam similique laboriosam natus doloremque
          nisi veritatis beatae provident consequatur culpa eius, illum aperiam
          alias fugiat ipsam.
        </motion.p>
      </motion.div>
      {/* Agrega más secciones de texto e imagen según sea necesario */}
    </motion.div>
  );
}

export default AboutUs;
