import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Signup />

      <Header showing={setShow} show={show} />

      <Product toShow={show} />
      <Footer />
    </div>
  );
}
export default App;
