import { creditCards, type CreditCard, type InsertCreditCard } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getCreditCards(): Promise<CreditCard[]>;
  getCreditCard(id: string): Promise<CreditCard | undefined>;
  createCreditCard(card: InsertCreditCard): Promise<CreditCard>;
}

export class DatabaseStorage implements IStorage {
  async getCreditCards(): Promise<CreditCard[]> {
    return await db.select().from(creditCards);
  }

  async getCreditCard(id: string): Promise<CreditCard | undefined> {
    const [card] = await db.select().from(creditCards).where(eq(creditCards.id, id));
    return card || undefined;
  }

  async createCreditCard(card: InsertCreditCard): Promise<CreditCard> {
    const [newCard] = await db.insert(creditCards).values(card).returning();
    return newCard;
  }
}

export const storage = new DatabaseStorage();
