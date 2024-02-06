import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FeatureItem from "./FeatureItem";
import featuresClient from "../../data/featuresClient";

function FeaturesClients() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const cardVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className=" p-2 rounded-t-sm w-full">
      <ul
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {featuresClient.map((feature, index) => (
          <motion.li
            key={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <FeatureItem
              title={feature.title}
              description={feature.description}
              icon={<img src={feature.image} alt={feature.title} />}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturesClients;
