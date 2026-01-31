import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location, setLocation] = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location !== "/") {
      return; // Let default link behavior handle navigation to home
    }
    
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark-900/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="p-2 rounded-lg bg-gradient-sapphire group-hover:shadow-lg group-hover:shadow-sapphire/50 transition-all duration-300">
              <CreditCard size={24} className="text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-white tracking-tight">
              Select My Cards
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/#how-it-works" 
            onClick={(e) => handleScroll(e, "how-it-works")}
            className="text-gray-300 hover:text-sapphire_light transition-colors duration-300"
          >
            How it Works
          </Link>
          <a href="#about" className="text-gray-300 hover:text-sapphire_light transition-colors duration-300">
            About
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
