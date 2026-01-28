import { motion } from "framer-motion";
import Selector from "./Selector";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen bg-dark-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-5xl mx-auto text-center w-full mb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            The Perfect Credit Card,{" "}
            <span className="bg-gradient-sapphire bg-clip-text text-transparent">
              Tailored to Your Lifestyle
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Stop guessing. Let our algorithm analyze your spending habits to maximize your rewards.{" "}
            <span className="text-sapphire_light font-semibold">No personal contact details required.</span>
          </motion.p>
        </motion.div>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <Selector />
      </div>
    </section>
  );
}
