import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

// Optional configuration keeps the component lab usable without a backend.
export const supabase = url && publishableKey
  ? createClient(url, publishableKey)
  : null

export const isSupabaseConfigured = supabase !== null
