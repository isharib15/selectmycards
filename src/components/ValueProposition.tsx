import { motion } from 'framer-motion';
import { Lock, Brain, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Lock,
    title: '100% Privacy (No Spam)',
    description:
      "We don't ask for personal details. Your data stays yours. No emails, no calls, no spam. Ever.",
  },
  {
    icon: Brain,
    title: 'Unbiased Algorithms',
    description:
      'Our recommendation engine uses machine learning to match cards based on your unique spending patterns, not commission.',
  },
  {
    icon: TrendingUp,
    title: 'Maximize ROI',
    description:
      'Discover cards that align with your lifestyle and unlock rewards you actually use every day.',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Why Choose SelectMyCards?
          </h2>
          <p className="text-gray-400 text-lg">
            Built for cardholders who want smarter recommendations
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass rounded-xl border-l-4 border-sapphire_light"
        >
          <p className="text-gray-300 text-center text-lg">
            <span className="text-sapphire_light font-semibold">
              Zero friction. Zero spam. Pure results.
            </span>{' '}
            Start your recommendation journey in under 2 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
