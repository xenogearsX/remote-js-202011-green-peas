import './App.css';
import React from 'react'
import Nav from './components/Nav';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
    <div className="App" onLoad={swipeMenu}>
      <Nav />
      <Header />
    </div>
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

export default App;
