import "../App.css";

function Cart({ cart, setCart }) {
  const handleCheckout = () => {
    setCart([]);
  };
  return (
    <div className=" cart-cont">
      <div className="cart-list">
        <h1>Cart</h1>
        {/* cart items */}
        {cart.map((item, index) => {
          return (
            <div
              style={{ backgroundImage: `url(${item.images})` }}
              className="cart"
              key={index}
            >
              <h3>{item.name}</h3>
              <p>{item.price}$</p>
              <button
                className="removeBtn"
                onClick={(e) => {
                  // remove item from cart
                  cart.splice(index, 1);
                  let x = cart;
                  setCart([...x]);
                }}
              >
                Remove Item
              </button>
            </div>
          );
        })}
      </div>
      <div className="total">
        <h1>Total</h1>
        <p>{cart.reduce((a, b) => a + b.price, 0)}$</p>
        <button onClick={handleCheckout}>Check out</button>
      </div>
    </div>
  );
}
export default Cart;
