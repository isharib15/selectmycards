import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import type { CreditCard } from "@shared/schema";
import { SAMPLE_CARDS } from "@shared/mockData";

interface CardResultsProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: string[];
}

export default function CardResults({
  isOpen,
  onClose,
  selectedCategories,
}: CardResultsProps) {
  const [cards, setCards] = useState<CreditCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const fetchCards = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/credit-cards");
        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }
        const data = await response.json();
        
        // Safe check for data
        const cardList = (Array.isArray(data) && data.length > 0) ? data : (SAMPLE_CARDS as any[]);
        
        const filteredCards = cardList.filter((card: any) =>
          selectedCategories.some((cat) => card.bestFor?.includes(cat))
        );
        
        setCards(filteredCards.length > 0 ? filteredCards : cardList);
      } catch (error) {
        console.error("Error fetching cards, using fallback data:", error);
        
        // Fallback to sample cards
        const filteredCards = (SAMPLE_CARDS as any[]).filter((card) =>
          selectedCategories.some((cat) => card.bestFor?.includes(cat))
        );
        setCards(filteredCards.length > 0 ? filteredCards : (SAMPLE_CARDS as any[]));
      }
      setLoading(false);
    };

    fetchCards();
  }, [isOpen, selectedCategories]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-dark-900 rounded-2xl glass p-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          data-testid="button-close-results"
          className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
        >
          <X size={24} className="text-gray-400" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-display font-bold text-white mb-2">
            Your Perfect Cards Match
          </h2>
          <p className="text-gray-400 mb-8">
            Based on your {selectedCategories.join(", ")} spending habits
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-8 border-2 border-sapphire border-t-sapphire_light rounded-full"
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                data-testid={`card-credit-${card.id}`}
                className="group glass rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-dark-950">
                  <motion.img
                    src={card.imageUrl || ""}
                    alt={card.cardName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {card.cardName}
                  </h3>

                  <p className="text-sm text-sapphire_light font-medium mb-4">
                    {card.bank}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm gap-2">
                      <span className="text-gray-400">Annual Fee</span>
                      <span className="text-white font-semibold">
                        {card.annualFee === 0 ? "FREE" : `₹${card.annualFee}`}
                      </span>
                    </div>

                    {card.bestFor && card.bestFor.length > 0 && (
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Best for</p>
                        <div className="flex flex-wrap gap-2">
                          {card.bestFor.map((category) => (
                            <span
                              key={category}
                              className="text-xs bg-sapphire/20 text-sapphire_light px-2 py-1 rounded"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`button-apply-${card.id}`}
                    className="w-full py-2 px-4 rounded-lg gold-gradient text-white font-semibold flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-sapphire/50 transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && cards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">
              No cards found for your selection.
            </p>
            <p className="text-gray-500 text-sm">
              Try adjusting your spending categories.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
