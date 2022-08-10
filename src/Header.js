import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      ></img>
      <div className="header__search">
        <input className="header__search-input" type="text"></input>
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-line-one">Hello</span>
          <span className="header__option-line-two">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one">Returns</span>
          <span className="header__option-line-two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one">Your</span>
          <span className="header__option-line-two">Prime</span>
        </div>
        <div className="header__option-basket">
          <ShoppingBasketIcon />
          <span className="header__option-line-two header__basket-count">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
