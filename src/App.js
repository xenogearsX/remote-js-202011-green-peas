import Best from "./components/Best";
import BounceIntro from './components/BounceIntro';
import Food from "./components/Food";
import Footer from './components/Footer';
import Game from "./screen/Game";
import Header from './components/Header';
import Home from './screen/Home'
import Nav from './components/Nav';
import React from 'react';
import { Route, Switch } from "react-router-dom";


import './App.css';

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
            <Route path="/jeux" component={Game} /> {/*Timer*/}
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
