import './App.css';
import React from 'react'
import Home from './screen/Home'
import Nav from './components/Nav';
import Header from './components/Header';
import ProgresBar from './components/ProgresBar';

class App extends React.Component {
  render() {
    return (
    <div>
      <Nav />
      <Header />
      <Home />
      <ProgresBar />
    </div>
    );
  }
}

export default App;
