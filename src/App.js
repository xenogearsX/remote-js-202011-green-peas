import './App.css';
import React from 'react'
import Nav from './components/Nav';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Nav />
      <Header />
    </div>
    );
  }
}

export default App;
