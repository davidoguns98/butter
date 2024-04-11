import { useEffect, useState } from "react";
import { HandleFetch } from "./Api";
import Cart from "./Cart";

function Product({ toShow }) {
  const [cart, setCart] = useState([]);
  const [pro, setPro] = useState("");

  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        await HandleFetch().then((data) => {
          console.log(data);
          setPro(data);
          setFiltered(data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, []);

  const handleSearchResults = () => {
    if (value !== "") {
      return pro.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    } else if (value === "" && pro !== []) {
      return pro;
    }
  };
  useEffect(() => {
    // Search for food
    let filtered = handleSearchResults();
    setFiltered(filtered);
  }, [value]);

  return (
    <>
      {/* <div className="pizza">
        {pro &&
          pro.map((item) => {
            return (
              <div
                style={{ backgroundImage: `url(${item.images})` }}
                className="pizza1"
                key={item.id}
              >
                <h3>{item.name}</h3>
                <p>{item.decription}</p>
                <p>{item.price}$</p>
                <button
                  className="btn"
                  onClick={() => {
                    // added a function to add the pizza to the cart
                    alert(`${item.name} has been added to cart`);
                    // spread previous values and append new one
                    setCart([...cart, item]);
                    console.log(cart);
                  }}
                >
                  Add to basket
                </button>
              </div>
            );
          })}
        ;
      </div> */}

      <div className="">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div className="food-grid">
        {filtered &&
          filtered.map((item) => {
            return (
              // added an onclick event to each pizza item
              <div
                style={{ backgroundImage: `url(${item.images})` }}
                className="pizza1"
              >
                <h3>{item.name}</h3>
                <p>{item.decription}</p>
                <p>{item.price}$</p>
                <button
                  className="btn"
                  onClick={() => {
                    // added a function to add the pizza to the cart
                    alert(`${item.name} has been added to cart`);
                    // spread previous values and append new one
                    setCart([...cart, item]);
                    console.log(cart);
                  }}
                >
                  Add to basket
                </button>
              </div>
            );
          })}
      </div>

      {toShow ? <Cart cart={cart} setCart={setCart} /> : null}
    </>
  );
}

export default Product;
