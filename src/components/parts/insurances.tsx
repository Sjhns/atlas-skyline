"use client";

import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const insurancePlans = [
  {
    name: "Plano Bronze",
    description: "Cobertura básica para sua jornada interplanetária.",
    price: "$999",
    rating: 3,
    coverage:
      "Proteção contra acidentes leves e médios durante a viagem espacial.",
  },
  {
    name: "Plano Prata",
    description: "Cobertura intermediária para sua aventura no espaço.",
    price: "$1,499",
    rating: 4,
    coverage: "Proteção abrangente contra acidentes e imprevistos no espaço.",
  },
  {
    name: "Plano Ouro",
    description: "Cobertura premium para viajantes espaciais exigentes.",
    price: "$2,299",
    rating: 5,
    coverage:
      "Proteção completa, incluindo assistência médica e resgate no espaço.",
  },
];

export const Insurances = () => {
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
      className="h-screen w-full flex flex-col items-center justify-center space-x-6 px-4"
    >
      <motion.h3
        className="text-2xl font-bold uppercase mb-16 mt-9"
        variants={itemVariants}
      >
        Escolha um plano de seguro
      </motion.h3>

      <div className="flex flex-1 ">
        {insurancePlans.map((plan, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 grid-rows-3 gap-y-5 hover:bg-[#171717] py-5 px-9 rounded h-[500px]  hover:cursor-pointer"
            variants={itemVariants}
          >
            <div>
              <motion.img
                src={`/images/plan/${index + 1}.png`}
                alt=""
                className="w-36 object-cover object-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
              />
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-xs font-bold uppercase">{plan.name}</span>
              {Array.from({ length: plan.rating }).map((_, i) => (
                <AiFillStar key={i} color="#FFD700" />
              ))}
            </div>

            <div className="flex items-center">
              <span>{plan.price}</span>
            </div>
            <div className="flex items-center">
              <p>{plan.description}</p>
            </div>
            <div className="flex items-center">
              <p>{plan.coverage}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
