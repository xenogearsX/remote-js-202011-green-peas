import React from "react";

import "./BurgerMenu.css";

class BurgerMenu extends React.Component {
  render() {
    return (
      <div id="menu-burger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
  }
}

export default BurgerMenu;
