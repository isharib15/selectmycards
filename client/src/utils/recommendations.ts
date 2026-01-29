import { CreditCard } from "../data/cards";

export interface UserProfile {
  income: number;
  creditScore: number;
  selectedCategories: string[];
}

export function getRecommendations(userProfile: UserProfile, allCards: CreditCard[]): CreditCard[] {
  // Part A: The 'Hard' Eligibility Filter (Bank Approval Rules)
  const eligibleCards = allCards.filter(card => {
    // Strict Score Check
    const scoreCheck = card.minScore <= userProfile.creditScore;
    // Strict Income Check
    const incomeCheck = card.minIncome <= userProfile.income;
    // Status Check: If user.income >= 500,000, REMOVE all cards where minIncome === 0
    let statusCheck = true;
    if (userProfile.income >= 500000 && card.minIncome === 0) {
      statusCheck = false;
    }

    return scoreCheck && incomeCheck && statusCheck;
  });

  // Part B: The 'Soft' Ranking System (User Preference)
  return eligibleCards
    .map(card => {
      let score = 0;
      // Category Match: If card.tags matches a user's selected category, add +10 points
      userProfile.selectedCategories.forEach(category => {
        if (card.tags.includes(category)) {
          score += 10;
        }
      });
      return { ...card, score };
    })
    .sort((a: any, b: any) => {
      // Final Sort:
      // First by Score (Desc)
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // Then by minIncome (Desc)
      return b.minIncome - a.minIncome;
    });
}
