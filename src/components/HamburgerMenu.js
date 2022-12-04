import React from "react";
import Dropdown from "./Dropdown.js";

function HamburgerMenu() {
  return (
    <div class="hamburger-menu">
      <Dropdown
        trigger={
          <div>
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
          </div>
        }
        menu={[
          <a class="menu__item" href="#">
            Home
          </a>,
          <a class="menu__item" href="#">
            About
          </a>,
          <a class="menu__item" href="#">
            Team
          </a>,
          <a class="menu__item" href="#">
            Contact
          </a>,
          <a class="menu__item" href="#">
            Twitter
          </a>,
        ]}
      />
    </div>
  );
}

export default HamburgerMenu;
