import { createClient } from '@supabase/supabase-js';

// @ts-ignore - import.meta.env is available in Vite but sometimes causes LSP errors
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// @ts-ignore
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only create the client if keys exist. Otherwise, return null.
// Use type casting to handle the null case for consumers
export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : (null as any);
