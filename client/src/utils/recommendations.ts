import { CreditCard } from "../data/cards";

export interface UserProfile {
  income: number;
  creditScore: number;
  selectedCategories: string[];
}

export function getRecommendations(userProfile: UserProfile, allCards: CreditCard[]): CreditCard[] {
  return allCards
    .filter(card => {
      // Strict Income Rule (Threshold)
      const incomeMatch = userProfile.income >= card.minIncome;
      // Also respect minScore if strictly requested (User mentioned score previously)
      const scoreMatch = userProfile.creditScore >= card.minScore;
      return incomeMatch && scoreMatch;
    })
    .map(card => {
      // Weighted Scoring System
      let score = 0;
      userProfile.selectedCategories.forEach(category => {
        if (card.tags.includes(category)) {
          score += 10;
        }
      });
      return { ...card, score };
    })
    .sort((a: any, b: any) => {
      // Smart Sorting
      // Priority 1: Sort by score (Highest first)
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // Priority 2: If scores are tied, sort by minIncome (Highest first)
      return b.minIncome - a.minIncome;
    });
}
