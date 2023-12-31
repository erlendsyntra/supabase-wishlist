const Wish = ({ id, wish, bought, handleDeleteWish, handleUpdateWish }) => {
  return (
    <li key={id} className={bought ? "bought" : ""}>
      {wish}
      <a
        href="#"
        className={`ico ico--${bought ? "check" : "uncheck"}`}
        onClick={() => handleUpdateWish(id, !bought)}
      ></a>
      <a
        href="#"
        className="ico ico--delete"
        onClick={() => {
          handleDeleteWish(id);
        }}
      ></a>
    </li>
  );
};
export default Wish;
