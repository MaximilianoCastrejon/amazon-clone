import React from "react";
import { useState } from "react";

function Dropdown(props) {
  const { trigger, menu } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open); //Oposite of what the current state is
  };

  // console.log(menu.map((menuItem, index) => menuItem.props));
  //https://beta.reactjs.org/apis/react/cloneElement
  //https://codepen.io/mha-el-sayed/pen/zLmoMX
  return (
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <div className="dropdown-select">
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li
                key={index}
                onClick={menuItem.props.onClick}
                className="menu-item"
              >
                {React.cloneElement(menuItem, {
                  onClick: (e) => {
                    // console.log(e.target.value);
                    menuItem.props.onClick(e);
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
