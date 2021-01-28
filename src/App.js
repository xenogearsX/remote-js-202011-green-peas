
import React from 'react';
import Footer from './components/Footer';
import Home from './screen/Home'
import Nav from './components/Nav';
import Header from './components/Header';
import BounceIntro from './components/BounceIntro';
import ProgresBar from './components/ProgresBar';
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
          <ProgresBar />
          <Footer />
         </div>     
        </div>     
    );
  }
}

export default App;
