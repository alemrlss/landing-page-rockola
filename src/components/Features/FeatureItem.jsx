import { motion } from "framer-motion";

const FeatureItem = ({ title, description, icon }) => {
  return (
    <motion.div className="p-2 rounded-md flex">
      <div className="flex flex-col justify-center items-center mb-2">
        <div className=" text-white">{icon}</div>
        <h3 className="text-orange-200 text-lg font-bold text-center">
          {title}
        </h3>
        <p className="text-white text-sm text-center">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
