import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CardSubscription from "./Card";
import { AiFillStar, AiOutlineCrown } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Plans() {
  const memberships = [
    {
      id: 1,
      name: "Membresia Basica",
      price: "price_1OcYAIFeiEj6y242fDPSuTaD",
      amount: 4.99,
      currency: "usd",
      active: true,
      type: 10,
    },
    {
      id: 2,
      name: "Membresia Plus",
      price: "price_1OcYAIFeiEj6y242fDPSuTaD",
      amount: 9.99,
      currency: "usd",
      active: true,
      type: 20,
    },
    {
      id: 3,
      name: "Membresia Premium",
      price: "price_1OcYAIFeiEj6y242fDPSuTaD",
      amount: 14.99,
      currency: "usd",
      active: true,
      type: 30,
    },
  ];

  const iconMap = {
    10: <AiFillStar />,
    20: <FaTrophy />,
    30: <AiOutlineCrown />,
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mt-6"
    >
      <div className="text-white text-center">
        <h2 className="text-2xl sm:text-4xl text-white">Planes</h2>
        <p className="text-base sm:text-xl mt-4">
          En PSROCKOLA, ofrecemos planes empresariales diseñados para potenciar
          la experiencia musical en tu establecimiento. Nuestras membresías
          brindan beneficios exclusivos, permitiéndote personalizar la música,
          gestionar empleados y adaptar la plataforma según tus necesidades
          específicas.
        </p>
        <div className="flex flex-col items-center sm:flex-row sm:justify-center space-y-6 sm:space-y-0 sm:space-x-6 my-6">
          {memberships.map((membership) => (
            <CardSubscription
              key={membership.id}
              membership={membership}
              icon={iconMap[membership.type]}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Plans;
