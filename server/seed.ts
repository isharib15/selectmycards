import { storage } from "./storage";

async function seed() {
  const cards = await storage.getCreditCards();
  if (cards.length > 0) return;

  console.log("Seeding initial credit card data...");
  const sampleCards = [
    {
      cardName: "Sapphire Preferred",
      bank: "Chase",
      minSalary: 300000,
      annualFee: 0,
      bestFor: ["Travel", "Dining"],
      creditScoreRequired: 700,
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    },
    {
      cardName: "Amex Gold",
      bank: "American Express",
      minSalary: 500000,
      annualFee: 2999,
      bestFor: ["Dining", "Groceries"],
      creditScoreRequired: 720,
      imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80",
    },
    {
      cardName: "Cash Back Plus",
      bank: "HDFC",
      minSalary: 200000,
      annualFee: 0,
      bestFor: ["Shopping", "Fuel"],
      creditScoreRequired: 650,
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    },
  ];

  for (const card of sampleCards) {
    await storage.createCreditCard(card);
  }
  console.log("Seeding complete!");
}

seed().catch(console.error);
