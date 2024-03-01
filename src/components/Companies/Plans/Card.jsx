/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

function CardSubscription({ membership, onClick, setMembership, icon }) {
  const getBenefits = () => {
    switch (membership.type) {
      case 10:
        return {
          sales: "1",
          skins: "1",
          screens: "2",
          customModePlay: false,
        };
      case 20:
        return {
          sales: "3",
          skins: "3",
          screens: "4",
          customModePlay: false,
        };
      case 30:
        return {
          sales: "5",
          skins: "5",
          screens: "6",
          customModePlay: true,
        };
      default:
        return "";
    }
  };

  return (
    <motion.section
      className="h-full w-80 bg-[#F66E0C] text-white rounded-md shadow-lg overflow-hidden transition-all duration-700 transform hover:scale-105"
      whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
    >
      <div className="mx-6 my-8">
        <div className="text-4xl flex items-center font-bold space-x-3">
          <p>
            {membership.type === 10
              ? "BÁSICO"
              : membership.type === 20
              ? "PLUS"
              : membership.type === 30
              ? "PREMIUM"
              : "NOT TYPE"}
          </p>
          <b
            className={`
          ${
            membership.type === 10
              ? "text-gray-400"
              : membership.type === 20
              ? "text-cyan-500"
              : membership.type === 30
              ? "text-yellow-400"
              : "text-red"
          }`}
          >
            {" "}
            {icon}
          </b>
        </div>
        <p className="text-center text-sm my-2 font-mono">{membership.name}</p>
        <h2 className="text-3xl font-bold">
          {membership.currency === "usd" ? "$" : "$"} {membership.amount}
        </h2>
        <h5 className="text-sm">por establecimiento/mes facturado</h5>
        <div className="mt-6 space-y-2 flex flex-col">
          <div className="mb-4 flex justify-start items-center space-x-2">
            <FaCheck className="text-green-500" />
            <p>
              {getBenefits().sales}{" "}
              {getBenefits().sales === "1" ? "Cuenta" : "Cuentas"} para venta
            </p>
          </div>
          <div className="mb-4 flex justify-start items-center space-x-2">
            <FaCheck className="text-green-500" />
            <p>{getBenefits().skins} Skins disponibles</p>
          </div>
          <div className="mb-4 flex justify-start items-center space-x-2">
            <FaCheck className="text-green-500" />

            <p>
              {" "}
              1 Pantalla (<b>Maximo {getBenefits().screens} Pantallas</b>)
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default CardSubscription;
