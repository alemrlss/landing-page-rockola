import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FeatureItem from "./FeatureItem";

import featuresCompany from "../../data/featuresCompany";
function FeaturesCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className=" p-2 rounded-t-sm w-full">
      <ul
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {featuresCompany.map((feature, index) => (
          <motion.li
            key={index}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={cardVariants}
            transition={{ duration: 0.3, delay: index * 0.4 }}
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

export default FeaturesCompany;
