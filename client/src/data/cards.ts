export interface CreditCard {
  id: string;
  name: string;
  bank: string;
  image: string; // Path to image in public folder
  minIncome: number; // Annual income in Rupees
  minScore: number; // Credit score requirement
  tags: string[]; // Categories this card is good for (e.g. Shopping, Travel)
  annualFee: number;
  features: string[]; // 2-3 bullet points
}

export const CARDS: CreditCard[] = [
  {
    id: "idfc-wow",
    name: "WOW Student Card",
    bank: "IDFC FIRST",
    image: "/cards/idfc-wow.png",
    minIncome: 0,
    minScore: 0,
    tags: ["Shopping", "Student"],
    annualFee: 0,
    features: ["Zero Documentation", "100% FD backed"],
  },
  {
    id: "sbm-stepup",
    name: "Step-Up Card",
    bank: "SBM",
    image: "/cards/sbm-stepup.png",
    minIncome: 0,
    minScore: 0,
    tags: ["Shopping", "Secured"],
    annualFee: 0,
    features: ["Instant Virtual Card", "Build Credit Score"],
  },
  {
    id: "kotak-811-dream",
    name: "811 #DreamDifferent",
    bank: "Kotak",
    image: "/cards/kotak-811.png",
    minIncome: 0,
    minScore: 0,
    tags: ["Shopping", "Student"],
    annualFee: 0,
    features: ["No Income Proof", "Interest on FD"],
  }
];
