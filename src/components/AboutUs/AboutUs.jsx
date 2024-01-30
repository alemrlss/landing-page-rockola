import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./style.css";
function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const imagesVariants = {
    initial: { x: 500, opacity: 0 },
    animate: { x: -10, opacity: 1 },
  };

  const imagesVariants2 = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 10, opacity: 1 },
  };

  return (
    <motion.div
      id="about"
      className="flex justify-center items-center flex-col pt-28 "
      initial="hidden"
      animate="visible"
      ref={ref}
    >
      <h2 className="text-white text-4xl mb-4">Sobre Nosotros</h2>
      <motion.div
        className="flex flex-col md:flex-row items-center"
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-white text-2xl md:w-1/2 mb-6 md:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          porro. Quia assumenda ducimus quisquam inventore optio! Aliquid, earum
          obcaecati rerum minima eos iste tenetur sapiente delectus possimus
          excepturi harum nihil.
        </motion.p>
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={imagesVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="monedas.png"
            alt="About Us Image"
            className="w-72 h-72 rounded-lg"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={imagesVariants}
            transition={{ duration: 0.2, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row items-center"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={imagesVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="pago.png"
            alt="About Us Image"
            className="w-80 h-80 rounded-lg"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={imagesVariants2}
            transition={{ duration: 0.2, delay: 0.4 }}
          />
        </motion.div>
        <motion.p className="text-white text-2xl md:w-1/2 mb-6 md:mb-0">
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
