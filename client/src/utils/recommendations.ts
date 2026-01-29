import { CreditCard } from "../data/cards";

export interface UserProfile {
  income: number;
  creditScore: number;
  selectedCategories: string[];
}

export function getRecommendations(userProfile: UserProfile, allCards: CreditCard[]): CreditCard[] {
  // Part A: The 'Hard' Eligibility Filter (Bank Approval Rules)
  const isEstablished = userProfile.income >= 500000 && userProfile.creditScore >= 700;

  const eligibleCards = allCards.filter(card => {
    // Strict Score Check
    const scoreCheck = card.minScore <= userProfile.creditScore;
    // Strict Income Check
    const incomeCheck = card.minIncome <= userProfile.income;
    
    // Status Check: Only hide 'Zero Income' cards if the user is truly established (High Income AND Good Score)
    if (isEstablished && card.minIncome === 0) {
      return false;
    }

    return scoreCheck && incomeCheck;
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
