import React from "react";
import Footer from "./components/Footer";
import Home from "./screen/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import BounceIntro from "./components/BounceIntro";
import ProgresBar from "./components/ProgresBar";
// import Timer from "./components/Timer";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Best from "./components/Best";
import Food from "./components/Food";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <BounceIntro />
          <div className="homePage">
            <Nav />
            <Header />
            <Route path="/home" exact component={Home} />
            <Route path="/jeux" exact component={ProgresBar} />  {/*Timer*/}
            <Route path="/mieux" exact component={Best} />
            <Route path="/aliments" exact component={Food} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
