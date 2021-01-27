import './App.css';
import React from 'react'
import Home from './screen/Home'
import Nav from './components/Nav';
import Header from './components/Header';
import BounceIntro from './components/BounceIntro';

class App extends React.Component {
  render() {
    return (
    <div>
      <BounceIntro />
      <Nav />
      <Header />
      <Home />
    </div>
    );
  }
}

export default App;
