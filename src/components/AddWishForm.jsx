import { useState } from "react";

const AddWishForm = ({ handleInsertWish }) => {
  const [wish, setWish] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleInsertWish(wish);
    setWish("");
    // getWishes();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={wish}
        onChange={(e) => setWish(e.target.value)}
      />
      <button>Add Wish</button>
    </form>
  );
};
export default AddWishForm;
