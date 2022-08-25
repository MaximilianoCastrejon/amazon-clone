import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useState, useEffect } from "react";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";
// import { stockData as cartItems } from "./static/MOCK_DATA.js";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
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
      // If one left, onRemove   deletes from cart. Set cart items to be all cartItems except the one with the passed id
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

  const itemsOfProductRemoved = (id) => {
    const exists = cartItems.find((x) => x.id === id);
    if (exists) {
      // If one left, onRemove   deletes from cart. Set cart items to be all cartItems except the one with the passed id
      setCartItems(cartItems.filter((x) => x.id !== id));
    }
  };

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only runs once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login></Login>
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header onAdd={onAdd} cartItems={cartItems}></Header>

                <Checkout
                  onAdd={onAdd}
                  onRemove={onRemove}
                  itemsOfProductRemoved={itemsOfProductRemoved}
                  cartItems={cartItems}
                ></Checkout>
                <Footer></Footer>
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Header onAdd={onAdd} cartItems={cartItems}></Header>

                <Home onAdd={onAdd} />
                <Footer></Footer>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
