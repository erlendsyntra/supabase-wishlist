import { createClient } from "@supabase/supabase-js";
import { createContext } from "react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const supabaseContext = createContext();

const SupabaseProvider = ({ children }) => {
  return (
    <supabaseContext.Provider value={supabase}>
      {children}
    </supabaseContext.Provider>
  );
};
export default SupabaseProvider;
