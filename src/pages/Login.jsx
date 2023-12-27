import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (e) => {
      console.log("Auth status", e);
      if (e === "SIGNED_IN") {
        navigate("/home");
      }
    });
  }, []);
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={[]}
      //   onlyThirdPartyProviders
    />
  );
};
export default Login;
