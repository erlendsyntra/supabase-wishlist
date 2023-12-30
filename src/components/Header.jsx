import lamp from "../assets/lamp.jpeg";

const Header = () => {
  // const lamp = lamp
  return (
    <header>
      <div classname="logo">
        <img src={lamp} alt="oil lamp" />
        <h1>Your Wishlist</h1>
      </div>
      <nav>
        <a href="#">Sign Out</a>
        {/* <button onClick={signOut}>Sign Out</button> */}
      </nav>
    </header>
  );
};
export default Header;
