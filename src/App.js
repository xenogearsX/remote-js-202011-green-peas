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
      <div className='homePage'>
      <Nav />
      <Header />
      <Home />
      </div>
      
    </div>
    );
  }
}

export default App;
