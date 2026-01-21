/*
  # Create Credit Cards Table

  1. New Tables
    - `credit_cards`
      - `id` (uuid, primary key)
      - `card_name` (text)
      - `bank` (text)
      - `min_salary` (integer)
      - `annual_fee` (integer)
      - `best_for` (text array - spending categories)
      - `credit_score_required` (integer)
      - `image_url` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `credit_cards` table
    - Add policy for public read access (cards are public data)
*/

CREATE TABLE IF NOT EXISTS credit_cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  card_name text NOT NULL,
  bank text NOT NULL,
  min_salary integer DEFAULT 0,
  annual_fee integer DEFAULT 0,
  best_for text[] DEFAULT ARRAY[]::text[],
  credit_score_required integer DEFAULT 0,
  image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE credit_cards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access to credit cards"
  ON credit_cards
  FOR SELECT
  TO public
  USING (true);
