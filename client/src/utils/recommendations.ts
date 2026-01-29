import { CreditCard } from "../data/cards";

export interface UserProfile {
  income: number;
  creditScore: number;
  selectedCategories: string[];
}

export function getRecommendations(userProfile: UserProfile, allCards: CreditCard[]): CreditCard[] {
  return allCards
    .filter(card => {
      // Strict Filtering
      const incomeMatch = userProfile.income >= card.minIncome;
      const scoreMatch = userProfile.creditScore >= card.minScore;
      return incomeMatch && scoreMatch;
    })
    .map(card => {
      // Scoring System
      let matchScore = 0;
      userProfile.selectedCategories.forEach(category => {
        if (card.tags.includes(category)) {
          matchScore += 10;
        }
      });
      return { ...card, matchScore };
    })
    .sort((a: any, b: any) => {
      // Sorting: matchScore (Highest to Lowest)
      if (b.matchScore !== a.matchScore) {
        return b.matchScore - a.matchScore;
      }
      // If scores are tied, sort by annualFee (Lowest first)
      return a.annualFee - b.annualFee;
    });
}
