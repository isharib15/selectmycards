import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark-900/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="p-2 rounded-lg bg-gradient-sapphire group-hover:shadow-lg group-hover:shadow-sapphire/50 transition-all duration-300">
            <CreditCard size={24} className="text-white" />
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tight">
            SelectMyCards
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-300 hover:text-sapphire_light transition-colors duration-300">
            How it Works
          </a>
          <a href="#compare" className="text-gray-300 hover:text-sapphire_light transition-colors duration-300">
            Compare
          </a>
          <a href="#about" className="text-gray-300 hover:text-sapphire_light transition-colors duration-300">
            About
          </a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="gold-gradient text-dark-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300"
        >
          Find My Card
        </motion.button>
      </div>
    </motion.nav>
  );
}
