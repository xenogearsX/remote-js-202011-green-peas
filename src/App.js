import Best from "./components/Best";
import Bilan from "./components/Bilan";
import Details from "./screen/Details";
import Food from "./components/Food";
import Game from "./screen/Game";
import Game1 from "./screen/Game1";
import Game2 from "./screen/Game2";
import Game3 from "./screen/Game3";
import Game4 from "./screen/Game4";
import Game5 from "./screen/Game5";
import BilanDetail from "./screen/Game5";
import GameOver from "./screen/GameOver";
import Header from './components/Header';
import Home from './screen/Home'
import Nav from './components/Nav';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Intro from './screen/Intro';

import './App.css';

class App extends React.Component {
  state = {
    loading: true,
    scoreglobal: 0,
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({loading: false})
    }, 4000);
  }
  resetScore = () => this.setState({scoreglobal: 0})
  handleScoreGlobal = (number) => this.setState({scoreglobal: number+this.state.scoreglobal})
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
            <Route path="/details" component={Details} />
            <Route path="/game1" render={props => (<Game1 {...props} handleScoreGlobal={this.handleScoreGlobal} resetScore={this.resetScore}/>)} />
            <Route path="/bilan" render={props => (<Bilan {...props} score={this.state.scoreglobal} />)} />
            <Route path="/game2" component={Game2} />
            <Route path="/game3" component={Game3} />
            <Route path="/game4" component={Game4} />
            <Route path="/game5" component={Game5} />
            <Route path="/gameover" component={GameOver} />
            <Route path="/bilanDetail" component={BilanDetail} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
