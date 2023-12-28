import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const Home = () => {
  const [wishList, setWishList] = useState([]);
  const [wish, setWish] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getWishes = async () => {
    const { data } = await supabase
      .from("wishlist")
      .select()
      .order("created_at", { ascending: false });
    setWishList(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from("wishlist").insert({ wish, user_id: user.id });
    setWish("");
    getWishes();
  };

  const deleteWish = async (id) => {
    await supabase.from("wishlist").delete().eq("id", id);
    getWishes();
  };

  const toggleClass = async (id, bought) => {
    await supabase.from("wishlist").update({ bought }).eq("id", id);
    getWishes();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      console.log("user data: ", data);
      data.user ? setUser(data.user) : navigate("/");
    })();
  }, []);

  useEffect(() => {
    getWishes();
  }, []);

  return (
    <div>
      <nav>
        <h1>Your Wishlist</h1>
        <button onClick={signOut}>Sign Out</button>
      </nav>
      <p>You currently have {wishList.length} item(s) in your wishlist</p>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        />
        <button>Add Wish</button>
      </form>
      {wishList.length > 0 && (
        <ul>
          {" "}
          {wishList.map(({ id, wish, bought }) => (
            <li key={id} className={bought ? "bought" : ""}>
              {wish}
              <a
                href="#"
                className={`ico ico--${bought ? "check" : "uncheck"}`}
                onClick={() => toggleClass(id, !bought)}
              ></a>
              <a
                href="#"
                className="ico ico--delete"
                onClick={() => {
                  deleteWish(id);
                }}
              ></a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Home;
