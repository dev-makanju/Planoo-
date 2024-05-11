import { createClient } from "@supabase/supabase-js";

const superbaseURL = process.env.REACT_APP_SUPERBASE_URL
const superbaseAnon = process.env.REACT_APP_SUPERBASE_ANON_KEY

export const supabase = createClient(superbaseURL, superbaseAnon)
