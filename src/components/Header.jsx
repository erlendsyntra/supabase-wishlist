import lamp from "../assets/lamp.jpeg";
import { signOut } from "../functions/helpers";
import { useNavigate } from "react-router-dom";
import { supabaseContext } from "../data/SupabaseProvider";
import { useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  const supabase = useContext(supabaseContext);
  return (
    <header>
      <div className="logo">
        <img src={lamp} alt="oil lamp" />. <h1>Your Wishlist</h1>
      </div>
      <nav>
        <a
          href="#"
          onClick={() => {
            signOut(supabase, navigate);
          }}
        >
          Sign Out
        </a>
        {/* <button onClick={signOut}>Sign Out</button> */}
      </nav>
    </header>
  );
};
export default Header;
