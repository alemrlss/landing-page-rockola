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
      className="flex justify-center items-center flex-col pt-14 sm:pt-28 "
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <h2 className="text-white text-4xl mb-4">Sobre Nosotros</h2>

      {/* Primera sección de texto e imagen */}
      <motion.div className="flex flex-col md:flex-row items-center">
        <motion.p
          className="text-white text-2xl md:w-1/2 mb-6 md:mb-0"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          En Psrockola, nos dedicamos a ofrecer servicios de entretenimiento
          multimedia a través de nuestra innovadora plataforma de software.
          Nuestro enfoque se centra en proporcionar experiencias únicas y
          atractivas para los clientes.
        </motion.p>
        <motion.div
          className="md:w-1/2 mb-6 flex justify-center"
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

      {/* Segunda sección de texto e imagen (intercambiada) */}
      <motion.div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="hidden md:flex md:w-1/2  justify-center"
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
          Mediante nuestra tecnología líder como el sistema Rockobit, permitimos
          a los clientes disfrutar de un control total sobre su experiencia
          musical. Desde la comodidad de su asiento, pueden elegir la música que
          desean escuchar y disfrutarla en los televisores del local
        </motion.p>
        <motion.div
          className="flex md:hidden md:w-1/2  mb-6 justify-center"
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
      </motion.div>

      {/* Tercera sección de texto */}
      <motion.div className="flex mt-4">
        <motion.p
          className="text-white text-2xl md:w-3/4 mb-6 md:mb-0"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          En Psrockola, estamos comprometidos con la excelencia en el
          entretenimiento multimedia, brindando soluciones tecnológicas
          innovadoras que mejoran la experiencia de nuestros clientes.
        </motion.p>
        <motion.p
          className="text-white text-2xl md:w-1/4 mb-6 md:mb-0"
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.p>
      </motion.div>
    </motion.div>
  );
}

export default AboutUs;
