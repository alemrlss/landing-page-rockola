import { motion } from "framer-motion";

function PresentationImage() {
  return (
    <motion.div
      className="text-white text-4xl w-full sm:w-1/2 flex flex-col items-center justify-center space-y-4 mt-8 sm:mt-0"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src="/company.png"
        alt="logo image"
        className="w-64 sm:w-96"
        draggable={false}
      />
    </motion.div>
  );
}

export default PresentationImage;
