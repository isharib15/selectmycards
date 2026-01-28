import { motion } from "framer-motion";
import { Lock, Brain, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Lock,
    title: "Tell us about you",
    description: "Share basic details like your income bracket and credit score range.",
  },
  {
    icon: Brain,
    title: "Pick your lifestyle",
    description: "Select where you spend the most—Shopping, Travel, Dining, or Fuel.",
  },
  {
    icon: TrendingUp,
    title: "Get Matched",
    description: "Our engine instantly filters through dozens of cards to show you the ones you are actually eligible for.",
  },
];

export default function ValueProposition() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg">
            Three simple steps to find your ideal card
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group glass rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="inline-block p-3 rounded-lg bg-gradient-sapphire mb-4 group-hover:shadow-lg group-hover:shadow-sapphire/50 transition-all duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
