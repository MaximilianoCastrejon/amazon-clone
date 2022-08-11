import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout></Checkout>
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Home />
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
