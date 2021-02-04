import React from "react";
import Footer from "./components/Footer";
import Home from "./screen/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import BounceIntro from "./components/BounceIntro";
import ProgresBar from "./components/ProgresBar";
// import Timer from "./components/Timer";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Best from "./components/Best";
import Food from "./components/Food";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BounceIntro />
        <div className="homePage">
          <Nav />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/jeux" component={ProgresBar} /> {/*Timer*/}
            <Route path="/mieux" component={Best} />
            <Route path="/aliments" component={Food} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
