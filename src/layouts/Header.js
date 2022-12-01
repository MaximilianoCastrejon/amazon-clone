import React from "react";
import "../static/styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";
import { auth } from "../config/firebase";

function Header(props) {
  const { onAdd, cartItems } = props;
  const [{ user }, dispatch] = useStateValue();
  const itemsTotal = cartItems.reduce((a, c) => a + c.qty, 0);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        ></img>
      </Link>
      <div className="header__search">
        <input className="header__search-input" type="text"></input>
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option-line-one">
              Hello {!user ? "Guest" : null} Guest
            </span>
            <span className="header__option-line-two">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option-line-one">Returns</span>
          <span className="header__option-line-two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one">Your</span>
          <span className="header__option-line-two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__option-basket">
            <ShoppingBasketIcon />
            <span className="header__option-line-two header__basket-count">
              {cartItems.length === 0 ? 0 : itemsTotal}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
