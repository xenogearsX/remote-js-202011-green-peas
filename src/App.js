import Best from "./components/Best";
import Food from "./components/Food";
import Game from "./screen/Game";
import Game1 from "./screen/Game1";
import Game2 from "./screen/Game2";
import Game3 from "./screen/Game3";
import Game4 from "./screen/Game4";
import Game5 from "./screen/Game5";
import GameOver from "./screen/GameOver";
import Header from './components/Header';
import Home from './screen/Home'
import Nav from './components/Nav';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Intro from './screen/Intro';

import './App.css';
import Bilan from "./components/Bilan";

class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({loading: false})
    }, 0);
  }

  render() {
    return this.state.loading ? (
      <div>
        <Intro />
      </div>
    ) : (
      <div className="App">
        <div className="homePage">
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/mieux" component={Best} />
            <Route path="/aliments" component={Food} />
            <Route path="/game1" component={Game1} />
            <Route path="/bilan" component={Bilan} />
            <Route path="/game2" component={Game2} />
            <Route path="/game3" component={Game3} />
            <Route path="/game4" component={Game4} />
            <Route path="/game5" component={Game5} />
            <Route path="/gameover" component={GameOver} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
