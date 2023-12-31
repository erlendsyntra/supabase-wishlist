import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { supabaseContext } from "../data/SupabaseProvider";

const Login = () => {
  const navigate = useNavigate();
  const supabase = useContext(supabaseContext);

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
