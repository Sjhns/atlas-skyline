import { motion } from "framer-motion";

export const Health = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5, // Adicione um pequeno atraso entre cada elemento
      },
    },
    exit: {},
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
      className="h-screen w-full flex items-center justify-center"
    >
      <div className="flex-1 flex items-center justify-center flex-col">
        <motion.h3
          variants={itemVariants}
          className="text-white text-xl font-light mb-4"
        >
          Possuo alguma doença crônica
        </motion.h3>
        <motion.img
          variants={itemVariants}
          src="/images/health-none.png"
          alt="Person"
          className="object-cover h-[500px]"
        />
      </div>

      <div className="flex items-center space-x-20">
        <motion.img
          variants={itemVariants}
          src="/svgs/arrows/left.svg"
          alt="Arrow left"
          className="hover:border-red-500 border-transparent border-2
           rounded-full p-1 hover:cursor-pointer"
        />
        <motion.img
          variants={itemVariants}
          src="/svgs/arrows/right.svg"
          alt="Arrow right"
          className="hover:border-green-500 border-transparent border-2 rounded-full p-1 hover:cursor-pointer"
        />
      </div>

      <div className="flex-1 flex items-center justify-center flex-col">
        <motion.h3
          variants={itemVariants}
          className="text-white text-xl font-light mb-4"
        >
          Sou um indivíduo saudável
        </motion.h3>
        <motion.img
          variants={itemVariants}
          src="/images/health-2.png"
          alt="Person"
          className="object-cover h-[500px] hover:border-green-500"
        />
      </div>
    </motion.div>
  );
};
