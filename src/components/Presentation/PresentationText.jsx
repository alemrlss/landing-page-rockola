import { motion } from "framer-motion";

function PresentationText() {
  return (
    <motion.div
      className="text-gray-100 w-full sm:w-1/2 flex flex-col items-center justify-center space-y-4 px-4 sm:px-0"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-3xl sm:text-4xl">
        Potencia tu establecimiento con{" "}
        <b className="tracking-wide text-orange-500">PSROCKOLA:</b> Eleva tu
        ambiente con música y videos exclusivos
      </p>
      <p className="text-base">
        Descubre nuestra innovadora aplicación diseñada para empresas, que
        redefine la experiencia musical en tus locales comerciales. PSROCKOLA
        ofrece a tus clientes la posibilidad de personalizar su ambiente de
        manera única mediante un sistema intuitivo basado en monedas. ¡Te damos
        la bienvenida a la revolución en entretenimiento para establecimientos
        comerciales!
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
        <a
          href="#about"
          className="text-white text-center bg-gradient-to-r from-orange-900 to-orange-600 rounded-lg p-4 text-sm font-bold w-full sm:w-1/2 hover:text-orange-200 transition duration-300"
        >
          Leer más!
        </a>
        <a
          href="#register"
          className="text-white text-center bg-gradient-to-r from-orange-900 to-orange-600 rounded-lg p-4 text-sm font-bold w-full sm:w-1/2 hover:text-orange-200 transition duration-300"
        >
          Registrarme
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        ¡Regístrate ahora y obtén beneficios exclusivos al lanzamiento de la
        aplicación! Clientes recibirán entre 100 y 500 monedas de regalo, y las
        empresas disfrutarán de membresías especiales. ¡No te pierdas estas
        ventajas!
      </p>
    </motion.div>
  );
}

export default PresentationText;
