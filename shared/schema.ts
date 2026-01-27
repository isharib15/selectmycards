import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const creditCards = pgTable("credit_cards", {
  id: uuid("id").primaryKey().defaultRandom(),
  cardName: text("card_name").notNull(),
  bank: text("bank").notNull(),
  minSalary: integer("min_salary").default(0),
  annualFee: integer("annual_fee").default(0),
  bestFor: text("best_for").array().default([]),
  creditScoreRequired: integer("credit_score_required").default(0),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCreditCardSchema = createInsertSchema(creditCards).omit({
  id: true,
  createdAt: true,
});

export type InsertCreditCard = z.infer<typeof insertCreditCardSchema>;
export type CreditCard = typeof creditCards.$inferSelect;
