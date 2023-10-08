import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

export const ChoosePlan = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2, // Adicione um pequeno atraso entre cada elemento
      },
    },
    exit: {},
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20, rotate: -10, scale: 0.8 },
    animate: { opacity: 1, y: 0, rotate: 0, scale: 1 },
    exit: { opacity: 0, y: -20, rotate: 10, scale: 0.8 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
      className="h-screen w-full flex items-center justify-center flex-col"
    >
      <motion.h3
        className="text-2xl font-bold uppercase mb-16"
        variants={itemVariants}
      >
        Escolha um plano
      </motion.h3>
      <div className="flex space-x-20 w-full items-center justify-evenly">
        <motion.div
          className="grid grid-cols-1 grid-rows-3 h-full"
          variants={itemVariants}
        >
          <span className="mt-20 text-xl font-bold uppercase">Companhia</span>
          <span className="mt-20 text-xl font-bold uppercase">Refeições</span>
          <span className="mt-20 text-xl font-bold uppercase">Dureza</span>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 grid-rows-3 gap-y-5 hover:bg-[#171717] py-5 px-9 rounded h-[500px]  hover:cursor-pointer"
          variants={itemVariants}
        >
          <div>
            <motion.img
              src="/images/plan/1.png"
              alt=""
              className="w-36 object-cover object-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
            />
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs font-bold uppercase">Master</span>
            <AiFillStar color="#FFD700" />
            <AiFillStar color="#FFD700" />
            <AiFillStar color="#FFD700" />
          </div>

          <div className="flex items-center">
            <span>
              <img src="/svgs/danger.svg" alt="Danger" />
            </span>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 grid-rows-3 gap-y-5 h-[500px] hover:bg-[#171717] py-5 px-9 rounded hover:cursor-pointer"
          variants={itemVariants}
        >
          <div>
            <motion.img
              src="/images/plan/2.png"
              alt=""
              className="w-36 object-cover object-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
            />
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs font-bold uppercase">Chief</span>
            <AiFillStar color="#FFD700" />
            <AiFillStar color="#FFD700" />
            <AiFillStar color="#FFD700" />
            <AiFillStar color="#FFD700" />
            <AiFillStar color="#FFD700" />
          </div>

          <div className="flex items-center space-x-3">
            <img src="/svgs/danger.svg" alt="Danger" />
            <img src="/svgs/danger.svg" alt="Danger" />
            <img src="/svgs/danger.svg" alt="Danger" />
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 grid-rows-3 gap-y-5 h-[500px] hover:bg-[#171717] py-5 px-9 rounded hover:cursor-pointer"
          variants={itemVariants}
        >
          <div>
            <motion.img
              src="/images/plan/3.png"
              alt=""
              className="w-48 object-cover object-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
            />
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs font-bold uppercase">Basic</span>
            <AiFillStar color="#FFD700" />
          </div>

          <div className="flex items-center space-x-4">
            <img src="/svgs/danger.svg" alt="Danger" />
            <img src="/svgs/danger.svg" alt="Danger" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
