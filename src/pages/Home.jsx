import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import WishList from "../components/WishList";
import AddWishForm from "../components/AddWishForm";
import { supabaseContext } from "../data/SupabaseProvider";
import {
  deleteWish,
  getWishes,
  insertWish,
  updateWish,
} from "../functions/queries";
import { useAuth } from "../hooks";

const Home = () => {
  const supabase = useContext(supabaseContext);
  const [wishList, setWishList] = useState([]);
  const [user, signOut] = useAuth(supabase);
  const navigate = useNavigate();

  const handleGetWishes = async () => {
    const data = await getWishes(supabase);
    console.log("data: ", data);
    setWishList(data);
  };

  const handleInsertWish = async (wish) => {
    await insertWish(supabase, wish, user.id);
    handleGetWishes();
  };

  const handleUpdateWish = async (id, bought) => {
    await updateWish(supabase, id, bought);
    handleGetWishes();
  };

  const handleDeleteWish = async (id) => {
    await deleteWish(supabase, id);
    handleGetWishes();
  };

  useEffect(() => {
    if (user.id) {
      handleGetWishes();
    }
  }, [user]);

  return (
    <div>
      {user.email && (
        <>
          <p>
            {`You ( ${user.email.substring(
              0,
              user.email.indexOf("@")
            )} ) currently
            have ${wishList.length} item(s) in your wishlist`}
          </p>
          <AddWishForm handleInsertWish={handleInsertWish} />
          <WishList
            wishList={wishList}
            handleDeleteWish={handleDeleteWish}
            handleUpdateWish={handleUpdateWish}
          />
        </>
      )}
    </div>
  );
};
export default Home;
