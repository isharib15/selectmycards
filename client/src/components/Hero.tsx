import { motion } from "framer-motion";
import Selector from "./Selector";
import { ShieldCheck, ChevronRight } from "lucide-react";

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
    <section className="bg-dark-900 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
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
            <div className="flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm w-fit mx-auto md:mx-0">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-green-100">
                No personal contact details required
              </span>
            </div>
          
        </motion.div>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <Selector />
      </div>
    </section>
  );
}
