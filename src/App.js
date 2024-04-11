import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Header showing={setShow} show={show} />
      <Product toShow={show} />
    </div>
  );
}
export default App;
