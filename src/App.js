import React from 'react';
import BounceIntro from './components/BounceIntro';
import Footer from './components/Footer';
import GameAccess from './components/GameAccess';
import Header from './components/Header';
import Home from './screen/Home'
import Nav from './components/Nav';
import ProgresBar from './components/ProgresBar';
import Timer from './components/Timer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BounceIntro />
          <div className='homePage'>
          <Nav />
          <Header />
          <Home />
          <Timer />
          <ProgresBar />
          <GameAccess />
          <Footer />
         </div>     
        </div>     
    );
  }
}

export default App;
