import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-sapphire">
                <CreditCard size={20} className="text-white" />
              </div>
              <span className="font-display font-bold text-white">SelectMyCards</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your personalized credit card recommendation engine.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/#how-it-works" className="hover:text-sapphire_light transition-colors duration-300">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-sapphire_light transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sapphire_light transition-colors duration-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/legal" className="hover:text-sapphire_light transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-sapphire_light transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mb-8">
            <p>&copy; 2024 SelectMyCards. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-sapphire_light transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="hover:text-sapphire_light transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-500 leading-relaxed border-t border-white/5 pt-8">
            <p>
              'SelectMyCards.com is an informational platform and does not provide financial advice. Credit card approvals are at the sole discretion of the respective banks. No Guarantee: We do not guarantee approval for any financial product. Liability: SelectMyCards.com is not responsible for rejected applications or credit score impacts. Privacy: We do not save or sell user personal data.'
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
