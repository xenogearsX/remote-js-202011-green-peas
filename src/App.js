import './App.css';
import React from 'react'
import Home from './screen/Home'
import Nav from './components/Nav';
import Header from './components/Header';
import FactsList from './components/FactsList';

class App extends React.Component {
  render() {
    return (
    <div>
      <Nav />
      <Header />
      <Home />
      <FactsList />
    </div>
    );
  }
}

export default App;
