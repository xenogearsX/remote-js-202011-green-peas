import './App.css';
import React from 'react'
import Home from './screen/Home'
import Nav from './components/Nav';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Nav />
      <Header />
      <Home />
    </div>
    );
  }
}

export default App;
