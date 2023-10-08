import { motion } from "framer-motion";
import { MouseDown } from "../common/mouse-down";

export const Welcome = () => {
  const titleVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const mouseDownVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
  };

  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center flex-col"
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-6xl font-extralight text-white mb-5"
        variants={titleVariants}
      >
        Uma nova experiência de navegação espacial
      </motion.h1>

      <motion.p
        className="text-2xl text-gray-300 font-light mb-36"
        variants={paragraphVariants}
      >
        Vá além do que você já viu antes. Explore o universo como nunca antes
      </motion.p>

      <motion.div
        variants={mouseDownVariants}
        initial="initial"
        animate="animate"
        className="cursor-pointer"
      >
        <MouseDown />
      </motion.div>
    </motion.div>
  );
};
