import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
    <section className="min-h-screen bg-dark-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-5xl mx-auto text-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            The Perfect Credit Card,{' '}
            <span className="bg-gradient-sapphire bg-clip-text text-transparent">
              Tailored to Your Lifestyle
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Stop guessing. Let our algorithm analyze your spending habits to maximize your rewards.{' '}
            <span className="text-sapphire_light font-semibold">No personal contact details required.</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gold-gradient text-dark-900 font-bold px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-300 group"
            >
              Analyze & Find Cards
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sapphire/20 to-sapphire_light/20 rounded-2xl blur-3xl"></div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative glass rounded-2xl p-1 max-w-2xl mx-auto"
            >
              <div className="bg-dark-950 rounded-xl p-8 flex items-center justify-center aspect-video">
                <div className="text-center">
                  <div className="inline-block p-4 glass rounded-2xl mb-4">
                    <div className="w-32 h-20 bg-gradient-sapphire rounded-lg flex items-center justify-center">
                      <span className="text-dark-900 font-display font-bold text-2xl">•••• 8754</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Premium Card Preview</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
