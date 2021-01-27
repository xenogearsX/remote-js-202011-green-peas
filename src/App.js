import './App.css';
import React from 'react'
import Home from './screen/Home'
import Nav from './components/Nav';
import Header from './components/Header';
import Timer from './components/Timer';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Nav />
      <Header />
      <Home />
      <Timer />
    </div>
    );
  }
}

export default App;
