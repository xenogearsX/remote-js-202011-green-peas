import "./Header.css";
import React from "react";
import Identity from "./Identity";
import BurgerMenu from "./BurgerMenu";

class Header extends React.Component {
    swipeMenu = (event) => {
        const mainMenu = document.querySelector("#menu");
        const burgerMenu = document.querySelector("#menu-burger");
        document.addEventListener("click", function(event) {
          if(mainMenu.className === ''){ return;}
            else if (event.target.closest("#menu") || event.target.closest("#menu-burger")) return;
          mainMenu.classList.add("invisible");
          burgerMenu.removeAttribute("class", "clicked");
        });
        let clickedEvent = "click";
        window.addEventListener(
          "touchstart",
          function detectTouch() {
            clickedEvent = "touchstart";
            window.removeEventListener("touchstart", detectTouch, false);
          },
          false
        );
        burgerMenu.addEventListener(
          clickedEvent,
          function (evt) {
            console.log(clickedEvent);
            if (!this.getAttribute("class")) {
              this.setAttribute("class", "clicked");
            } else {
              this.removeAttribute("class");
            }
            if (mainMenu.getAttribute("class") != "visible") {
              mainMenu.setAttribute("class", "visible");
            } else {
              mainMenu.setAttribute("class", "invisible");
            }
          },
          false
        );
      }
  
    render() {
    return (
      <header id="header" onLoad={swipeMenu}>
        <Identity />
        <BurgerMenu />
      </header>
    );
  }
}

const swipeMenu = (event) => {
    const mainMenu = document.querySelector("#menu");
    const burgerMenu = document.querySelector("#menu-burger");
    document.addEventListener("click", function(event) {
      if(mainMenu.className === ''){ return;}
        else if (event.target.closest("#menu") || event.target.closest("#menu-burger")) return;
      mainMenu.classList.add("invisible");
      burgerMenu.removeAttribute("class", "clicked");
    });
    let clickedEvent = "click";
    window.addEventListener(
      "touchstart",
      function detectTouch() {
        clickedEvent = "touchstart";
        window.removeEventListener("touchstart", detectTouch, false);
      },
      false
    );
    burgerMenu.addEventListener(
      clickedEvent,
      function (evt) {
        console.log(clickedEvent);
        if (!this.getAttribute("class")) {
          this.setAttribute("class", "clicked");
        } else {
          this.removeAttribute("class");
        }
        if (mainMenu.getAttribute("class") != "visible") {
          mainMenu.setAttribute("class", "visible");
        } else {
          mainMenu.setAttribute("class", "invisible");
        }
      },
      false
    );
  }

export default Header;
