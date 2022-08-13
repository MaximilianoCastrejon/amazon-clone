import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useState, useEffect } from "react";
// import { stockData as cartItems } from "./static/MOCK_DATA.js";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    console.log("added");
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists.qty === 1) {
      // If one, removing deletes from cart. Set cart items to be all cartItems except the one with the passed id
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      // If not 1, you can keep substracting
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Router>
      <div className="app">
        <Header onAdd={onAdd} cartItems={cartItems}></Header>
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout
                  onAdd={onAdd}
                  onRemove={onRemove}
                  cartItems={cartItems}
                ></Checkout>
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Home onAdd={onAdd} />
              </>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
