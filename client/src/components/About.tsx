import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-8 text-center">
            Decoding the Indian Credit Market, One Card at a Time.
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              SelectMyCards.com was built to simplify the complex world of personal finance. We are a dedicated credit card comparison platform designed to help you cut through the noise of hidden fees and banking jargon. Unlike traditional agents who push products for commissions, we are your unbiased guide to financial clarity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400">
                  Whether you are a student looking for a student credit card with no income proof, a professional seeking premium travel credit cards, or a shopper hunting for the best cashback offers, our goal is simple: To match you with a card that fits your actual lifestyle—not just the one with the best ads.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-400">
                    <span className="text-sapphire_light font-bold">✓</span>
                    <div>
                      <span className="text-white font-semibold">Instant Eligibility Check:</span> Our smart algorithm lets you check credit card eligibility online in seconds.
                    </div>
                  </li>
                  <li className="flex gap-3 text-gray-400">
                    <span className="text-sapphire_light font-bold">✓</span>
                    <div>
                      <span className="text-white font-semibold">Compare Top Indian Banks:</span> We aggregate data from India's leading financial institutions (HDFC, SBI, ICICI, Axis, IDFC, and more).
                    </div>
                  </li>
                  <li className="flex gap-3 text-gray-400">
                    <span className="text-sapphire_light font-bold">✓</span>
                    <div>
                      <span className="text-white font-semibold">100% Privacy, Zero Spam:</span> We do not save your personal details. Your income and score are processed instantly to find a match and then forgotten.
                    </div>
                  </li>
                  <li className="flex gap-3 text-gray-400">
                    <span className="text-sapphire_light font-bold">✓</span>
                    <div>
                      <span className="text-white font-semibold">Transparent & Unbiased:</span> We decode the fine print, from annual fee waivers to hidden interest rates.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
