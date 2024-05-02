import { useEffect, useState } from "react";
import { HandleFetch } from "../Api";
import Cart from "./Cart";
import Error from "./Error";
import "../App.css";
import Loader from "./Loader";
import toast from "react-hot-toast";

function Product({ toShow }) {
  const [isLoading, setIsloading] = useState(false);
  const [cart, setCart] = useState([]);
  const [pro, setPro] = useState("");
  const [error, setError] = useState("");

  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        await HandleFetch().then((data) => {
          console.log(data);
          setPro(data);
          setFiltered(data);
          setIsloading(false);
        });
      } catch (err) {
        setError(err.message);
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
        <p className="text">Enjoy the Rich Taste of African Delicacies</p>
        {filtered && (
          <input
            className="input"
            type="text"
            placeholder="Search your favorite meal"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        )}
      </div>
      {isLoading && <Loader />}
      <div className="food-grid">
        {filtered ? (
          filtered.map((item) => {
            return (
              // added an onclick event to each pizza item
              <div
                style={{
                  backgroundImage: `url(${item.images})`,
                  backgroundPosition: "contain",
                }}
                className="pizza1"
              >
                <h3>{item.name}</h3>
                <p>{item.decription}</p>
                <p>#{item.price}</p>
                <button
                  className="btn"
                  onClick={() => {
                    // added a function to add the pizza to the cart
                    toast.success(`${item.name} has been added to cart`);
                    // spread previous values and append new one
                    setCart([...cart, item]);
                    console.log(cart);
                  }}
                >
                  Add to basket
                </button>
              </div>
            );
          })
        ) : (
          <Error error={error} />
        )}
      </div>

      {toShow ? <Cart cart={cart} setCart={setCart} /> : null}
    </>
  );
}

export default Product;
