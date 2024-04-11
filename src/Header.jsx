import "./App.css";

function Header({ showing, show }) {
  // host this in butter
  // burron state

  return (
    <div>
      <div className="container">
        <h1 className="header">WELCOME TO NAIJA FOOD APP</h1>
        {/* view cart button */}
        <button
          href="/cart"
          className="cart-btn"
          onClick={() => showing(!show)}
        >
          {show ? "close" : "View Cart"}
        </button>
      </div>
    </div>
  );
}

export default Header;
