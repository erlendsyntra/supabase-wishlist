import Wish from "./Wish";
const WishList = ({ wishList, handleDeleteWish, handleUpdateWish }) => {
  return (
    <>
      {wishList.length > 0 && (
        <ul>
          {" "}
          {wishList.map(({ id }, i, arr) => (
            <Wish
              key={id}
              {...arr[i]}
              handleDeleteWish={handleDeleteWish}
              handleUpdateWish={handleUpdateWish}
            />
          ))}
        </ul>
      )}
    </>
  );
};
export default WishList;
