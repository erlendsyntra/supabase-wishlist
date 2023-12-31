import { useNavigate } from "react-router-dom";

export const signOut = async (supabase, navigate, loginPath = "/") => {
  //   const navigate = useNavigate();
  await supabase.auth.signOut();
  navigate(loginPath);
};
