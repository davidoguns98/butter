import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

function AppLayout() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header showing={setShow} show={show} />

      <Product toShow={show} />
      <Footer />
    </>
  );
}
export default AppLayout;
