import { motion } from 'framer-motion';
import { useState } from 'react';
import { Zap } from 'lucide-react';
import CardResults from './CardResults';

interface SelectorState {
  creditScore: 'excellent' | 'good' | 'average' | 'fair';
  income: string;
  age: string;
  categories: string[];
}

const CREDIT_SCORE_OPTIONS = [
  { value: 'excellent', label: 'Excellent (800+)', min: 800 },
  { value: 'good', label: 'Good (670-799)', min: 670 },
  { value: 'average', label: 'Average (580-669)', min: 580 },
  { value: 'fair', label: 'Fair (<580)', min: 0 },
];

const SPEND_CATEGORIES = [
  'Travel',
  'Dining',
  'Shopping',
];

export default function Selector() {
  const [state, setState] = useState<SelectorState>({
    creditScore: 'good',
    income: '',
    age: '',
    categories: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleCategoryToggle = (category: string) => {
    setState((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleAnalyze = async () => {
    // Track recommendation event
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'check_recommendation', {
        'event_category': 'engagement',
        'event_label': 'user_checked_cards'
      });
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowResults(true);
  };

  const isValid =
    state.income && state.categories.length > 0;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-8 sm:p-12 space-y-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            Your perfect match awaits
          </h2>
          <p className="text-gray-400">Answer just a few questions to get started</p>
        </div>

        {/* Annual Income */}
        <div className="space-y-4">
          <label className="block text-white font-semibold text-lg">
            Annual Income (Rupees)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold">
              ₹
            </span>
            <input
              type="number"
              value={state.income}
              onChange={(e) =>
                setState((prev) => ({ ...prev, income: e.target.value }))
              }
              placeholder="Enter annual income"
              className="w-full pl-8 pr-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300 bg-white/5"
            />
          </div>
        </div>

        {/* Credit Score Selection */}
        <div className="space-y-4">
          <label className="block text-white font-semibold text-lg">
            Current Credit Score
          </label>
          <div className="grid grid-cols-2 gap-3">
            {CREDIT_SCORE_OPTIONS.map((option) => (
              <motion.button
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    creditScore: option.value as typeof state.creditScore,
                  }))
                }
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  state.creditScore === option.value
                    ? 'gold-gradient text-white shadow-lg shadow-sapphire/50'
                    : 'glass text-gray-300 hover:bg-white/15'
                }`}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Spend Categories */}
        <div className="space-y-4">
          <label className="block text-white font-semibold text-lg">
            Top Spend Categories
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SPEND_CATEGORIES.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryToggle(category)}
                className={`py-2 px-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  state.categories.includes(category)
                    ? 'gold-gradient text-white shadow-lg shadow-sapphire/30'
                    : 'glass text-gray-300 hover:bg-white/15'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Analyze Button */}
        <motion.button
          whileHover={{ scale: isValid ? 1.02 : 1 }}
          whileTap={{ scale: isValid ? 0.98 : 1 }}
          onClick={handleAnalyze}
          disabled={!isValid || isLoading}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            isValid
              ? 'gold-gradient text-white shadow-lg shadow-sapphire/50 cursor-pointer'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Zap size={20} />
              </motion.div>
              Analyzing...
            </>
          ) : (
            <>
              <Zap size={20} />
              Analyze & Find Cards
            </>
          )}
        </motion.button>
      </motion.div>

      <CardResults
        isOpen={showResults}
        onClose={() => setShowResults(false)}
        selectedCategories={state.categories}
        userIncome={Number(state.income)}
        userCreditScore={CREDIT_SCORE_OPTIONS.find(o => o.value === state.creditScore)?.min || 0}
      />
    </>
  );
}
