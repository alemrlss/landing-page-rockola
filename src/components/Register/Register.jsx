import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import FormCompanies from "./FormCompanies";
import FormClients from "./FormClients";
import { AiOutlineUser } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import api from "../../api/api";

function Register() {
  const [selectedType, setSelectedType] = useState("user");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await api.get("/country");
      setCountries(response.data.data);
    };

    fetchCountries();
  }, []);

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

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

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={formVariants}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center pt-16 sm:pt-28 "
        id="register"
      >
        <h2 className="text-white text-2xl sm:text-4xl mb-2 sm:mb-4">
          Regístrate
        </h2>
        <p className="text-white text-base sm:text-xl mb-2 sm:mb-4">
          ¡Selecciona tu rol y crea una cuenta para disfrutar de beneficios
          exclusivos!
        </p>

        <div className="flex space-x-2 sm:space-x-4 items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleTypeSelection("user")}
            className={`text-white border-2 rounded-2xl py-2 px-4 text-xs sm:text-sm font-semibold flex items-center ${
              selectedType === "user"
                ? "border-orange-500 bg-orange-500"
                : "border-white bg-transparent"
            }`}
          >
            <span className="mr-1 sm:mr-2">
              <AiOutlineUser />
            </span>{" "}
            Usuario
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleTypeSelection("company")}
            className={`text-white border-2 rounded-2xl py-2 px-4 text-xs sm:text-sm font-semibold flex items-center ${
              selectedType === "company"
                ? "border-orange-500 bg-orange-500"
                : "border-white bg-transparent"
            }`}
          >
            <span className="mr-1 sm:mr-2">
              <BsBriefcase />
            </span>{" "}
            Empresa
          </motion.button>
        </div>

        {/* Fondo */}
      </motion.div>

      {/* Contenido principal */}
      <div className="flex flex-col-reverse sm:flex-row space-y-4 sm:space-y-0 justify-center items-center mb-6">
        <div className="hidden sm:block sm:w-1/2">
          {selectedType === "user" && (
            <img src="client.png" className="w-full" alt="Cliente" />
          )}
          {selectedType === "company" && (
            <img src="company.png" className="w-full" alt="Empresa" />
          )}
        </div>

        <div className="w-full sm:w-1/2">
          {selectedType === "user" && (
            <FormClients
              formVariants={formVariants}
              countries={countries}
              states={states}
              setStates={setStates}
              cities={cities}
              setCities={setCities}
            />
          )}
          {selectedType === "company" && (
            <FormCompanies
              formVariants={formVariants}
              countries={countries}
              states={states}
              cities={cities}
              setCities={setCities}
              setStates={setStates}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
