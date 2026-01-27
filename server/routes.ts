import type { Express } from "express";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<void> {
  app.get("/api/credit-cards", async (_req, res) => {
    try {
      const cards = await storage.getCreditCards();
      res.json(cards);
    } catch (error) {
      console.error("Error fetching credit cards:", error);
      res.status(500).json({ error: "Failed to fetch credit cards" });
    }
  });

  app.get("/api/credit-cards/:id", async (req, res) => {
    try {
      const card = await storage.getCreditCard(req.params.id);
      if (!card) {
        return res.status(404).json({ error: "Credit card not found" });
      }
      res.json(card);
    } catch (error) {
      console.error("Error fetching credit card:", error);
      res.status(500).json({ error: "Failed to fetch credit card" });
    }
  });
}
