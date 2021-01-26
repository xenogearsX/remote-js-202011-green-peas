import "./Header.css";
import React from "react";
import Identity from "./Identity";
import BurgerMenu from "./BurgerMenu";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <Identity />
        <BurgerMenu />
      </header>
    );
  }
}

export default Header;
