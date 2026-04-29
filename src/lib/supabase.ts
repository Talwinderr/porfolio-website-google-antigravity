import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: any;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('undefined')) {
  console.warn('Supabase not configured properly, using fallback');
  // Create a mock client that won't break the app
  supabase = {
    from: () => ({
      insert: () => Promise.resolve({ error: new Error('Supabase not configured') }),
      select: () => Promise.resolve({ data: [], error: null }),
    }),
  };
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };